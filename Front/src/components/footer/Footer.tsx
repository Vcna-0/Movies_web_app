import logoMovieDB from '@assets/logoMovieDB.svg';
import { FooterContainer, StyledP, GradientLink, StyledImg } from './FooterStyles';

export default function Footer() {
   return (
      <FooterContainer>
         <StyledP>
            By <GradientLink href="https://github.com/Vcna-0">Noëmie</GradientLink> powered by{' '}
            <a href="https://www.themoviedb.org/">
               <StyledImg src={logoMovieDB} />
            </a>
         </StyledP>
      </FooterContainer>
   );
}
