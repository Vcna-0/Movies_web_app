import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { StyledButton } from './ScrollToTopButtonStyles';

export default function ScrollToTopButton() {
   const [isVisible, setIsVisible] = useState(false);

   const handleScroll = () => {
      const yOffset = window.scrollY;
      setIsVisible(yOffset > 100);
   };

   const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
   };

   useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   return (
      <StyledButton isVisible={isVisible} onClick={scrollToTop}>
         <FaArrowUp />
      </StyledButton>
   );
}
