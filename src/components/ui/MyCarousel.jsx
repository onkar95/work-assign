import React, { useRef, useState } from "react";

export default function MyCarousel({
  children,
  scrollAmount = 300,
  itemWidth = "w-64", // Tailwind width class or style
  className = "",
}) {
    const childrenArray = React.Children.toArray(children);
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scroll = (direction) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={`relative w-full ${className}`}>
      {/* Left Button */}
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-secondary-3 text-primary-3  p-2 rounded-full shadow"
        onClick={() => scroll("left")}
      >
        &#8592;
      </button>

      {/* Right Button */}
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-secondary-3 text-primary-3 p-2 rounded-full shadow"
        onClick={() => scroll("right")}
      >
        &#8594;
      </button>

      {/* Scrollable container */}
      <div
        ref={carouselRef}
        className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory space-x-1.5 py-4 "
        style={{ scrollbarWidth: "none" }}
      >
        {React.Children.map(children, (child, index) => (
          <div key={index} className={`snap-start shrink-0 ${itemWidth}`}>
            {child}
          </div>
        ))}
      </div>

      {/* Dot Indicators
      <div className="flex justify-center space-x-2 mt-2">
        {childrenArray.map((_, index) => (
          <div
            key={index}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-blue-600 w-8"
                : "bg-gray-300 w-3"
            }`}
          />
        ))}
      </div> */}
    </div>
  );
}


/***lagging on drag */
// import React, { useRef, useState, useEffect } from "react";

// export default function Carousel({ children, className = "" }) {
//   const containerRef = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const childrenArray = React.Children.toArray(children);

//   const scrollToIndex = (index) => {
//     const container = containerRef.current;
//     if (!container) return;

//     const childWidth = container.firstChild?.offsetWidth || 1;
//     container.scrollTo({
//       left: index * childWidth,
//       behavior: "smooth",
//     });

//     setCurrentIndex(index);
//   };

//   // Update current index on scroll
//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     const handleScroll = () => {
//       const childWidth = container.firstChild?.offsetWidth || 1;
//       const index = Math.round(container.scrollLeft / childWidth);
//       setCurrentIndex(index);
//     };

//     container.addEventListener("scroll", handleScroll, { passive: true });
//     return () => container.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Drag scroll support
//   const [isDragging, setIsDragging] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const [scrollLeft, setScrollLeft] = useState(0);

//   const handleMouseDown = (e) => {
//     setIsDragging(true);
//     setStartX(e.pageX - containerRef.current.offsetLeft);
//     setScrollLeft(containerRef.current.scrollLeft);
//   };

//   const handleMouseMove = (e) => {
//     if (!isDragging) return;
//     e.preventDefault();
//     const x = e.pageX - containerRef.current.offsetLeft;
//     const walk = x - startX;
//     containerRef.current.scrollLeft = scrollLeft - walk;
//   };

//   const handleMouseUp = () => setIsDragging(false);
//   const handleMouseLeave = () => setIsDragging(false);

//   return (
//     <div className={`relative w-full ${className}`}>
//       {/* Left Button */}
//       <button
//         onClick={() => scrollToIndex(Math.max(0, currentIndex - 1))}
//         className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-70 hover:bg-opacity-100 px-3 py-2 rounded-full shadow"
//       >
//         ‹
//       </button>

//       {/* Right Button */}
//       <button
//         onClick={() =>
//           scrollToIndex(Math.min(childrenArray.length - 1, currentIndex + 1))
//         }
//         className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-70 hover:bg-opacity-100 px-3 py-2 rounded-full shadow"
//       >
//         ›
//       </button>

//       {/* Scrollable container */}
//       <div
//         ref={containerRef}
//         className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory space-x-4 pb-4 cursor-grab active:cursor-grabbing"
//         style={{ scrollbarWidth: "none" }}
//         onMouseDown={handleMouseDown}
//         onMouseMove={handleMouseMove}
//         onMouseUp={handleMouseUp}
//         onMouseLeave={handleMouseLeave}
//       >
//         {childrenArray.map((child, index) => (
//           <div
//             key={index}
//             className="snap-start shrink-0"
//             style={{ flexShrink: 0 }}
//           >
//             {child}
//           </div>
//         ))}
//       </div>

//       {/* Dots */}
//       <div className="flex justify-center mt-2 space-x-2">
//         {childrenArray.map((_, i) => (
//           <div
//             key={i}
//             onClick={() => scrollToIndex(i)}
//             className={`h-1 cursor-pointer rounded-full transition-all duration-300 ${
//               i === currentIndex ? "bg-blue-600 w-8" : "bg-gray-300 w-3"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

/** like shadcn ui*/
// import React, { useRef, useState, useEffect, useCallback, useContext, createContext } from "react";
// import { ArrowLeft, ArrowRight } from "lucide-react";
// import { cn } from "../../utils/tailwind.util";
// import { Button } from "../ui/button";

// const CarouselContext = createContext(null);

// export function useCarousel() {
//   const context = useContext(CarouselContext);
//   if (!context) throw new Error("useCarousel must be used within a <Carousel />");
//   return context;
// }

// export function Carousel({ children, className }) {
//   const containerRef = useRef(null);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [scrolling, setScrolling] = useState(false);
//   const [canScrollPrev, setCanScrollPrev] = useState(false);
//   const [canScrollNext, setCanScrollNext] = useState(false);

//   const updateScrollState = useCallback(() => {
//     const container = containerRef.current;
//     if (!container) return;
//     const { scrollLeft, scrollWidth, offsetWidth } = container;

//     const index = Math.round(scrollLeft / offsetWidth);
//     setActiveIndex(index);

//     setCanScrollPrev(scrollLeft > 0);
//     setCanScrollNext(scrollLeft + offsetWidth < scrollWidth);
//   }, []);

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     updateScrollState();
//     container.addEventListener("scroll", updateScrollState, { passive: true });
//     return () => container.removeEventListener("scroll", updateScrollState);
//   }, [updateScrollState]);

//   const scrollToIndex = (index) => {
//     const container = containerRef.current;
//     if (!container) return;
//     const width = container.offsetWidth;
//     container.scrollTo({ left: index * width, behavior: "smooth" });
//   };

//   const scrollNext = () => scrollToIndex(activeIndex + 1);
//   const scrollPrev = () => scrollToIndex(activeIndex - 1);

//   const onDragStart = () => setScrolling(true);
//   const onDragEnd = () => {
//     setScrolling(false);
//     updateScrollState();
//   };

//   return (
//     <CarouselContext.Provider
//       value={{
//         containerRef,
//         scrollNext,
//         scrollPrev,
//         canScrollPrev,
//         canScrollNext,
//         activeIndex,
//         onDragStart,
//         onDragEnd,
//       }}
//     >
//       <div className={cn("relative", className)}>{children}</div>
//     </CarouselContext.Provider>
//   );
// }

// export function CarouselContent({ className, children }) {
//   const { containerRef, onDragStart, onDragEnd } = useCarousel();

//   return (
//     <div
//       ref={containerRef}
//       className={cn(
//         "flex overflow-x-scroll scroll-smooth snap-x snap-mandatory no-scrollbar",
//         className
//       )}
//       onMouseDown={onDragStart}
//       onMouseUp={onDragEnd}
//       onTouchStart={onDragStart}
//       onTouchEnd={onDragEnd}
//     >
//       {children}
//     </div>
//   );
// }

// export function CarouselItem({ className, children }) {
//   return (
//     <div
//       className={cn("snap-start shrink-0 grow-0 basis-full px-4", className)}
//       role="group"
//     >
//       {children}
//     </div>
//   );
// }

// export function CarouselPrevious({ className, ...props }) {
//   const { canScrollPrev, scrollPrev } = useCarousel();
//   return (
//     <Button
//       onClick={scrollPrev}
//       disabled={!canScrollPrev}
//       className={cn("absolute top-1/2 -left-6 z-10 -translate-y-1/2", className)}
//       {...props}
//     >
//       <ArrowLeft />
//     </Button>
//   );
// }

// export function CarouselNext({ className, ...props }) {
//   const { canScrollNext, scrollNext } = useCarousel();
//   return (
//     <Button
//       onClick={scrollNext}
//       disabled={!canScrollNext}
//       className={cn("absolute top-1/2 -right-6 z-10 -translate-y-1/2", className)}
//       {...props}
//     >
//       <ArrowRight />
//     </Button>
//   );
// }

// export function CarouselDots({ length }) {
//   const { activeIndex } = useCarousel();

//   return (
//     <div className="flex justify-center gap-2 mt-4">
//       {Array.from({ length }).map((_, i) => (
//         <div
//           key={i}
//           className={cn(
//             "h-1 rounded-full transition-all duration-300",
//             activeIndex === i ? "w-6 bg-black" : "w-2 bg-gray-400"
//           )}
//         />
//       ))}
//     </div>
//   );
// }

