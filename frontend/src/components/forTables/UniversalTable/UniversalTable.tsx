import './UniversalTable.css';
import { useVirtualScroll } from '../../../hooks/useVirtualScroll';
import { useSelectionTable } from '../../../hooks/useSelectionTable';
import type { TypeRow } from '../../../types/index';

const ROW_HEIGHT = 30;

interface UniversalTableProps {
  data: TypeRow[];
  columns: string[];
}

const UniversalTable = ({ data, columns }: UniversalTableProps) => {
  const { containerRef, visibleData, startIndex } = useVirtualScroll(data);
  const {
    getCellStatus,
    handleMouseDown,
    handleMouseEnter,
    handleMouseUp,
    selectionDimensions,
  } = useSelectionTable(data, columns);

  return (
    <div
      ref={containerRef}
      className="table-scroll-container"
      onMouseUp={handleMouseUp}
    >
      <table className="main-table" style={{ tableLayout: 'fixed', width: '100%' }}>
        <colgroup>
          <col style={{ width: '50px' }} />
          {columns.map((col) => (
            <col key={col} style={{ width: '120px' }} />
          ))}
        </colgroup>
        <thead>
          <tr>
            <th>#</th>
            {columns.map((col) => (
              <th key={col}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody style={{ position: 'relative', height: `${data.length * ROW_HEIGHT}px` }}>
          {visibleData.map((row, rowIndex) => {
            const realIndex = startIndex + rowIndex;
            return (
              <tr
                key={realIndex}
                style={{
                  position: 'absolute',
                  top: `${realIndex * ROW_HEIGHT}px`,
                  left: 0,
                  right: 0,
                  height: `${ROW_HEIGHT}px`,
                }}
              >
                <td className="cell-content">{realIndex + 1}</td>
                {columns.map((colKey, colIndex) => (
                  <td
                    key={colKey}
                    className={`cell-content ${getCellStatus(realIndex, colIndex)}`}
                    onMouseDown={() => handleMouseDown(realIndex, colIndex)}
                    onMouseEnter={() => handleMouseEnter(realIndex, colIndex)}
                  >
                    {String(row[colKey] ?? '')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      {selectionDimensions && selectionDimensions.cols >= 1 && (
        <div className="selection-info">
          <span className="cols_and_rows">
            {selectionDimensions.rows} × {selectionDimensions.cols}
          </span>
          <span className="totalCount">count {selectionDimensions.total}</span>
        </div>
      )}
    </div>
  );
};

export default UniversalTable;