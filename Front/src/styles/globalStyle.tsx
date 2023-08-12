import { createGlobalStyle } from 'styled-components';
import styled from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *,
    ::after,
    ::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
    font-family: Outfit, 'Montserrat', sans-serif;
    background-color: #10141E;
    }
`;

export const StyledTitle = styled.h1`
    color: #FFF;
    font-family: 'Outfit', sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
`;