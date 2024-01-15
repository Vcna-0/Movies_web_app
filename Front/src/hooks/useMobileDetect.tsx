import { useState, useEffect } from 'react';

const useMobileDetect = () => {
   const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

   useEffect(() => {
      const handleResize = () => {
         setIsMobile(window.innerWidth <= 1024);
      };

      window.addEventListener('resize', handleResize);

      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, []);

   return isMobile;
};

export default useMobileDetect;
