import { useRef, useCallback } from 'react';

export function useDragScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({
    isDragging: false,
    startY: 0,
    scrollTop: 0,
  });

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return;

    dragState.current = {
      isDragging: true,
      startY: e.clientY,
      scrollTop: containerRef.current.scrollTop,
    };

    containerRef.current.style.cursor = 'grabbing';
    containerRef.current.style.userSelect = 'none';
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!dragState.current.isDragging || !containerRef.current) return;

    const dy = e.clientY - dragState.current.startY;
    containerRef.current.scrollTop = dragState.current.scrollTop - dy;
  }, []);

  const handleMouseUp = useCallback(() => {
    if (!containerRef.current) return;

    dragState.current.isDragging = false;
    containerRef.current.style.cursor = 'grab';
    containerRef.current.style.userSelect = '';
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!containerRef.current) return;

    dragState.current.isDragging = false;
    containerRef.current.style.cursor = 'grab';
    containerRef.current.style.userSelect = '';
  }, []);

  return {
    containerRef,
    handlers: {
      onMouseDown: handleMouseDown,
      onMouseMove: handleMouseMove,
      onMouseUp: handleMouseUp,
      onMouseLeave: handleMouseLeave,
    },
  };
}
