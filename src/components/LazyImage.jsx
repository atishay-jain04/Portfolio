import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

/**
 * LazyImage component with intersection observer for lazy loading
 * Optimizes performance by loading images only when they're in viewport
 */
const LazyImage = ({
  src,
  alt,
  className = '',
  placeholder = null,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px', // Start loading 50px before the image enters viewport
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <div ref={imgRef} className={`relative ${className}`}>
      {/* Placeholder while loading */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse">
          {placeholder}
        </div>
      )}

      {/* Actual image */}
      {isInView && (
        <motion.img
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className={className}
          loading="lazy"
          {...props}
        />
      )}
    </div>
  );
};

export default LazyImage;
