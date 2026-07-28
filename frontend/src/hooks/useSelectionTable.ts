import { useState, useCallback, useEffect, useMemo } from 'react';
import type { CellCoord } from '../types';

export const useSelectionTable = (data: any[], columns: string[]) => {
  const [selectionStart, setSelectionStart] = useState<CellCoord | null>(null);
  const [selectionEnd, setSelectionEnd] = useState<CellCoord | null>(null);
  const [isSelecting, setIsSelecting] = useState<boolean>(false);

  // Mouse handlers
  const handleMouseDown = useCallback((row: number, col: number) => {
    setIsSelecting(true);
    setSelectionStart({ row, col });
    setSelectionEnd({ row, col });
  }, []);

  const handleMouseEnter = useCallback(
    (row: number, col: number) => {
      if (isSelecting) {
        setSelectionEnd({ row, col });
      }
    },
    [isSelecting]
  );

  const handleMouseUp = useCallback(() => {
    setIsSelecting(false);
  }, []);

  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp);
    return () => window.removeEventListener('mouseup', handleMouseUp);
  }, [handleMouseUp]);

  // Get cell status (selected or not)
  const getCellStatus = useCallback(
    (row: number, col: number) => {
      if (!selectionStart || !selectionEnd) return '';

      const minRow = Math.min(selectionStart.row, selectionEnd.row);
      const maxRow = Math.max(selectionStart.row, selectionEnd.row);
      const minCol = Math.min(selectionStart.col, selectionEnd.col);
      const maxCol = Math.max(selectionStart.col, selectionEnd.col);

      const isInside =
        row >= minRow && row <= maxRow && col >= minCol && col <= maxCol;

      if (!isInside) return '';

      if (selectionStart.row === selectionEnd.row && selectionStart.col === selectionEnd.col) {
        return 'selected-cell';
      }
      return 'selected-range';
    },
    [selectionStart, selectionEnd]
  );

  // Selection dimensions
  const selectionDimensions = useMemo(() => {
    if (!selectionStart || !selectionEnd) return null;
    const rows = Math.abs(selectionEnd.row - selectionStart.row) + 1;
    const cols = Math.abs(selectionEnd.col - selectionStart.col) + 1;
    return { rows, cols, total: rows * cols };
  }, [selectionStart, selectionEnd]);

  // Copy to clipboard (TSV)
  const copyToClipboard = useCallback(() => {
    if (!selectionStart || !selectionEnd) return;

    const minRow = Math.min(selectionStart.row, selectionEnd.row);
    const maxRow = Math.max(selectionStart.row, selectionEnd.row);
    const minCol = Math.min(selectionStart.col, selectionEnd.col);
    const maxCol = Math.max(selectionStart.col, selectionEnd.col);

    const rowsText: string[] = [];
    for (let r = minRow; r <= maxRow; r++) {
      const cells: string[] = [];
      for (let c = minCol; c <= maxCol; c++) {
        const colKey = columns[c];
        const value = data[r]?.[colKey] ?? '';
        cells.push(String(value));
      }
      rowsText.push(cells.join('\t'));
    }
    const tsvString = rowsText.join('\n');

    if (navigator.clipboard) {
      navigator.clipboard.writeText(tsvString).catch(() => {
        fallbackCopy(tsvString);
      });
    } else {
      fallbackCopy(tsvString);
    }
  }, [selectionStart, selectionEnd, data, columns]);

  const fallbackCopy = (text: string) => {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  };

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!selectionStart) return;

      const { row, col } = selectionStart;

      // Arrow keys
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
        event.preventDefault();
        let newRow = row;
        let newCol = col;

        if (event.key === 'ArrowUp') newRow = Math.max(0, row - 1);
        if (event.key === 'ArrowDown') newRow = Math.min(data.length - 1, row + 1);
        if (event.key === 'ArrowLeft') newCol = Math.max(0, col - 1);
        if (event.key === 'ArrowRight') newCol = Math.min(columns.length - 1, col + 1);

        setSelectionStart({ row: newRow, col: newCol });
        setSelectionEnd({ row: newRow, col: newCol });
      }

      // Ctrl+C
      if ((event.ctrlKey || event.metaKey) && event.code === 'KeyC') {
        event.preventDefault();
        copyToClipboard();
      }

      // Escape - clear selection
      if (event.key === 'Escape') {
        setSelectionStart(null);
        setSelectionEnd(null);
      }
    },
    [selectionStart, data.length, columns.length, copyToClipboard]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return {
    getCellStatus,
    handleMouseDown,
    handleMouseEnter,
    handleMouseUp,
    selectionDimensions,
  };
};