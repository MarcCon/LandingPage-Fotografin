import React from "react";
import { useInView } from "react-intersection-observer";

const LazyImage = ({ src, alt, className, ...props }) => {
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
    threshold: 0, // Trigger beim ersten sichtbaren Pixel
  });

  // Zustandsabhängige Klassen
  const isVisible = entry && inView;
  const imageAnimationClass = isVisible
    ? "scale-100 opacity-100 transition-all duration-500 ease-in-out"
    : "scale-50 opacity-0";

  return (
    <div ref={ref} className={className}>
      <img
        src={src}
        alt={alt}
        className={`${imageAnimationClass} transition-transform`}
        {...props}
      />
    </div>
  );
};

export default LazyImage;
