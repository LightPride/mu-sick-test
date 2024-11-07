import React, { useRef, useEffect, useState } from 'react';

const CustomScrollbar = ({ children }) => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const thumbRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [startTop, setStartTop] = useState(0);

  // Функція для оновлення розміру та позиції смуги прокрутки
  const updateThumb = () => {
    const contentHeight = contentRef.current.scrollHeight;
    const visibleHeight = contentRef.current.clientHeight;
    const thumbHeight = (visibleHeight / contentHeight) * visibleHeight;
    thumbRef.current.style.height = `${thumbHeight}px`;
    thumbRef.current.style.top = `${
      (contentRef.current.scrollTop / contentHeight) * visibleHeight
    }px`;
  };

  // Функція для обробки прокрутки контенту
  const handleScroll = () => {
    updateThumb();
  };

  // Функція для початку перетягування скролбару
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartY(e.clientY);
    setStartTop(thumbRef.current.offsetTop);
    e.preventDefault();
  };

  // Функція для обробки перетягування скролбару
  const handleMouseMove = (e) => {
    if (isDragging) {
      const deltaY = e.clientY - startY;
      const newTop = startTop + deltaY;
      const maxTop =
        containerRef.current.clientHeight - thumbRef.current.clientHeight;
      thumbRef.current.style.top = `${Math.max(0, Math.min(maxTop, newTop))}px`;

      // Синхронізація прокрутки контенту
      const scrollRatio = newTop / maxTop;
      contentRef.current.scrollTop =
        scrollRatio *
        (contentRef.current.scrollHeight - contentRef.current.clientHeight);
    }
  };

  // Функція для завершення перетягування скролбару
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Додаємо події миші та оновлюємо скролбар при монтуванні
  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    updateThumb(); // Оновлюємо скролбар при завантаженні компонента
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="scrollable-container" ref={containerRef}>
      <div className="content" ref={contentRef} onScroll={handleScroll}>
        {children}
      </div>
      <div className="custom-scrollbar">
        <div
          className="scroll-thumb"
          ref={thumbRef}
          onMouseDown={handleMouseDown}
        />
      </div>
    </div>
  );
};

export default CustomScrollbar;
