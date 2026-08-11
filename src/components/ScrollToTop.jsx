import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Exclude hash links (e.g. #services) from resetting to top unconditionally, 
    // unless you want to handle it differently. We'll simply scroll to top for now.
    if (!window.location.hash) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
