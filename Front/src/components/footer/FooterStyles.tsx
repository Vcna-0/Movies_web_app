import styled from 'styled-components';

export const FooterContainer = styled.footer`
   padding: 100px 10px 50px 10px;
   text-align: center;
   display: flex;
   align-items: center;
   justify-content: center;

   @media screen and (min-width: 768px) {
      padding: 150px 10px 50px 10px;
   }
`;

export const StyledP = styled.p`
   color: var(--clr-White);
   font: var(--font-BodySmall);

   @media screen and (min-width: 768px) {
      font: var(--font-BodyMedium);
   }
`;

export const GradientLink = styled.a`
   background-image: linear-gradient(45deg, #90cea1, #01b4e4);
   background-clip: text;
   -webkit-background-clip: text;
   color: transparent;
   text-decoration: none;
   font-weight: bold;
`;

export const StyledImg = styled.img`
   width: 75px;
`;
