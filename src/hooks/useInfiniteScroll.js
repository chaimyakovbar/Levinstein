import { useState, useEffect } from 'react';

const useInfiniteScroll = (threshold = 100) => {
  const [isNearBottom, setIsNearBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      
      // Check if user is near bottom
      const distanceFromBottom = documentHeight - (scrollTop + windowHeight);
      setIsNearBottom(distanceFromBottom < threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isNearBottom;
};

export default useInfiniteScroll; 