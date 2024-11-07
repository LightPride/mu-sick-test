import { useRef, useEffect, useState } from 'react';

const CustomScrollbar = ({ children }) => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const verticalThumbRef = useRef(null);
  const horizontalThumbRef = useRef(null);

  const [isDraggingVertical, setIsDraggingVertical] = useState(false);
  const [isDraggingHorizontal, setIsDraggingHorizontal] = useState(false);
  const [startY, setStartY] = useState(0);
  const [startTop, setStartTop] = useState(0);
  const [startX, setStartX] = useState(0);
  const [startLeft, setStartLeft] = useState(0);

  const updateThumbs = () => {
    const contentHeight = contentRef.current.scrollHeight;
    const contentWidth = contentRef.current.scrollWidth;
    const visibleHeight = contentRef.current.clientHeight;
    const visibleWidth = contentRef.current.clientWidth;

    const verticalThumbHeight = (visibleHeight / contentHeight) * visibleHeight;
    const horizontalThumbWidth = (visibleWidth / contentWidth) * visibleWidth;

    verticalThumbRef.current.style.height = `${verticalThumbHeight}px`;
    verticalThumbRef.current.style.top = `${
      (contentRef.current.scrollTop / contentHeight) * visibleHeight
    }px`;

    horizontalThumbRef.current.style.width = `${horizontalThumbWidth}px`;
    horizontalThumbRef.current.style.left = `${
      (contentRef.current.scrollLeft / contentWidth) * visibleWidth
    }px`;
  };

  const handleScroll = () => {
    updateThumbs();
  };

  const handleMouseDownVertical = (e) => {
    setIsDraggingVertical(true);
    setStartY(e.clientY);
    setStartTop(verticalThumbRef.current.offsetTop);
    e.preventDefault();
  };

  const handleMouseDownHorizontal = (e) => {
    setIsDraggingHorizontal(true);
    setStartX(e.clientX);
    setStartLeft(horizontalThumbRef.current.offsetLeft);
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (isDraggingVertical) {
      const deltaY = e.clientY - startY;
      const newTop = startTop + deltaY;
      const maxTop =
        containerRef.current.clientHeight -
        verticalThumbRef.current.clientHeight;

      verticalThumbRef.current.style.top = `${Math.max(
        0,
        Math.min(maxTop, newTop)
      )}px`;

      const scrollRatio = newTop / maxTop;
      contentRef.current.scrollTop =
        scrollRatio *
        (contentRef.current.scrollHeight - contentRef.current.clientHeight);
    }

    if (isDraggingHorizontal) {
      const deltaX = e.clientX - startX;
      const newLeft = startLeft + deltaX;
      const maxLeft =
        containerRef.current.clientWidth -
        horizontalThumbRef.current.clientWidth;

      horizontalThumbRef.current.style.left = `${Math.max(
        0,
        Math.min(maxLeft, newLeft)
      )}px`;

      const scrollRatio = newLeft / maxLeft;
      contentRef.current.scrollLeft =
        scrollRatio *
        (contentRef.current.scrollWidth - contentRef.current.clientWidth);
    }
  };

  const handleMouseUp = () => {
    setIsDraggingVertical(false);
    setIsDraggingHorizontal(false);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    updateThumbs();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDraggingVertical, isDraggingHorizontal]);

  return (
    <div className="scrollable-container" ref={containerRef}>
      <div className="content" ref={contentRef} onScroll={handleScroll}>
        {children}
      </div>
      <div className="custom-scrollbar-vertical">
        <div
          className="scroll-thumb-vertical"
          ref={verticalThumbRef}
          onMouseDown={handleMouseDownVertical}
        />
      </div>
      <div className="custom-scrollbar-horizontal">
        <div
          className="scroll-thumb-horizontal"
          ref={horizontalThumbRef}
          onMouseDown={handleMouseDownHorizontal}
        />
      </div>
    </div>
  );
};

export default CustomScrollbar;

// import React, { useRef, useEffect, useState } from 'react';

// const CustomScrollbar = ({ children }) => {
//   const containerRef = useRef(null);
//   const contentRef = useRef(null);
//   const thumbRef = useRef(null);
//   const [isDragging, setIsDragging] = useState(false);
//   const [startY, setStartY] = useState(0);
//   const [startTop, setStartTop] = useState(0);

//   const updateThumb = () => {
//     const contentHeight = contentRef.current.scrollHeight;
//     const visibleHeight = contentRef.current.clientHeight;
//     const thumbHeight = (visibleHeight / contentHeight) * visibleHeight;
//     thumbRef.current.style.height = `${thumbHeight}px`;
//     thumbRef.current.style.top = `${
//       (contentRef.current.scrollTop / contentHeight) * visibleHeight
//     }px`;
//   };

//   const handleScroll = () => {
//     updateThumb();
//   };

//   const handleMouseDown = (e) => {
//     setIsDragging(true);
//     setStartY(e.clientY);
//     setStartTop(thumbRef.current.offsetTop);
//     e.preventDefault();
//   };

//   const handleMouseMove = (e) => {
//     if (isDragging) {
//       const deltaY = e.clientY - startY;
//       const newTop = startTop + deltaY;
//       const maxTop =
//         containerRef.current.clientHeight - thumbRef.current.clientHeight;
//       thumbRef.current.style.top = `${Math.max(0, Math.min(maxTop, newTop))}px`;

//       const scrollRatio = newTop / maxTop;
//       contentRef.current.scrollTop =
//         scrollRatio *
//         (contentRef.current.scrollHeight - contentRef.current.clientHeight);
//     }
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//   };

//   useEffect(() => {
//     document.addEventListener('mousemove', handleMouseMove);
//     document.addEventListener('mouseup', handleMouseUp);
//     updateThumb(); // Оновлюємо скролбар при завантаженні компонента
//     return () => {
//       document.removeEventListener('mousemove', handleMouseMove);
//       document.removeEventListener('mouseup', handleMouseUp);
//     };
//   }, [isDragging]);

//   return (
//     <div className="scrollable-container" ref={containerRef}>
//       <div className="content" ref={contentRef} onScroll={handleScroll}>
//         {children}
//       </div>
//       <div className="custom-scrollbar">
//         <div
//           className="scroll-thumb"
//           ref={thumbRef}
//           onMouseDown={handleMouseDown}
//         />
//       </div>
//     </div>
//   );
// };

// export default CustomScrollbar;
