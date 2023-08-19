import { createGlobalStyle } from 'styled-components';
import styled from "styled-components";

export const GlobalStyles = createGlobalStyle`

    :root{
        // Fonts family
        --ff-Outfit: 'Outfit', sans-serif;
        // Fonts weight
        --fw-outfitLight: 300;
        --fw-outfitMedium: 500;

        //font-weight / font-size / font-family
        --font-HeadingLarge: var(--fw-outfitLight) 32px var(--ff-font) ; 
        --font-HeadingMedium: var(--fw-outfitLight) 24px var(--ff-font) ; 
        --font-HeadingSmall: var(--fw-outfitMedium) 24px var(--ff-font) ;
        --font-HeadingXSmall: var(--fw-outfitMedium) 18px var(--ff-font) ;

        --font-BodyMedium: var(--fw-outfitLight) 15px var(--ff-font) ;
        --font-BodySmall: var(--fw-outfitLight) 13px var(--ff-font) ;

        // Colors
        --clr-red: hsl(0, 97%, 63%);
        --clr-darkBlue: hsl(233, 30%, 9%);
        --clr-greyishBlue: hsl(223, 23%, 46%);
        --clr-semiDarkBlue: hsl(223, 36%, 13%);
        --clr-white: hsl(0, 0%, 100%);
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
    color: #FFF;
    font : var(--font-HeadingLarge);
`;