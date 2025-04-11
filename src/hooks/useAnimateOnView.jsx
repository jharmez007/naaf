import { useState, useEffect } from 'react';

const useAnimateOnView = (id) => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById(id);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (!hasAnimated && rect.top < window.innerHeight && rect.bottom >= 0) {
          setHasAnimated(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasAnimated, id]);

  return hasAnimated;
};

export default useAnimateOnView;
