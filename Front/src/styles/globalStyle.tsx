import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    :root{
        // Fonts family
        --ff-Outfit: 'Outfit', sans-serif;
        // Fonts weight
        --fw-OutfitLight: 300;
        --fw-OutfitMedium: 500;

        //font-weight / font-size / font-family
        --font-HeadingLarge: 300 32px 'Outfit', sans-serif ; 
        --font-HeadingMedium: 300 24px 'Outfit', sans-serif ; 
        --font-HeadingSmall: 500 24px 'Outfit', sans-serif ;
        --font-HeadingXSmall: 500 18px 'Outfit', sans-serif ;
        --font-HeadingXxSmall: 500 14px 'Outfit', sans-serif ;

        --font-BodyMedium: 300 16px 'Outfit', sans-serif ;
        --font-BodySmall: 300 13px 'Outfit', sans-serif ;

        // Colors
        --clr-Red: hsl(0, 97%, 63%);
        --clr-DarkBlue: hsl(233, 30%, 9%);
        --clr-GreyishBlue: hsl(223, 23%, 46%);
        --clr-SemiDarkBlue: hsl(223, 36%, 13%);
        --clr-White: hsl(0, 0%, 100%);
    }

    *,
    ::after,
    ::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
    font-family: var(--ff-Outfit);
    background-color: #10141E;
    }

`;

export const StyledTitle = styled.h1`
   color: #fff;
   font: var(--font-HeadingLarge);
`;
