import { useEffect } from "react";

const useImageLoading = (targetClassName) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    // Wait for elements to be available in the DOM
    setTimeout(() => {
      const elements = document.querySelectorAll(`.${targetClassName}`);
      elements.forEach((el) => {
        // Set initial styles directly
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";

        // Check if element is already in viewport
        const rect = el.getBoundingClientRect();
        const isInViewport = rect.top <= window.innerHeight;

        if (isInViewport) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }

        observer.observe(el);
      });
    }, 100);

    return () => observer.disconnect();
  }, [targetClassName]);

  return {
    imageWrapperStyle: {
      transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
    },
  };
};

export default useImageLoading;
