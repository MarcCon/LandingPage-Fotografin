import React from "react";
import { useInView } from "react-intersection-observer";

const LazyImage = ({ src, alt, ...props }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div ref={ref}>{inView && <img src={src} alt={alt} {...props} />}</div>
  );
};

export default LazyImage;
