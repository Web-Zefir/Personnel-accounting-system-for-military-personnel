import { useState, useEffect, useRef, useMemo } from 'react';
import type { TypeRow } from '../types';

const ROW_HEIGHT = 30;
const BUFFER = 5;

export const useVirtualScroll = (data: TypeRow[]) => {
  const [scrollTop, setScrollTop] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      setScrollTop(container.scrollTop);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateHeight = () => {
      setContainerHeight(container.clientHeight);
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(container);
    window.addEventListener('resize', updateHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  const virtualData = useMemo(() => {
    if (containerHeight === 0) {
      return {
        startIndex: 0,
        endIndex: 0,
        visibleData: [] as TypeRow[],
      };
    }

    const startIndex = Math.max(0, Math.floor(scrollTop / ROW_HEIGHT) - BUFFER);
    const endIndex = Math.min(
      data.length,
      Math.ceil((scrollTop + containerHeight) / ROW_HEIGHT) + BUFFER
    );

    return {
      startIndex,
      endIndex,
      visibleData: data.slice(startIndex, endIndex),
    };
  }, [data, scrollTop, containerHeight]);

  return {
    containerRef,
    ...virtualData,
  };
};