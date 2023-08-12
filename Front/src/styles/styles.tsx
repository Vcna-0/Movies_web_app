import styled from "styled-components";

export const StyledTitle = styled.h1`
    color: #FFF;
    font-family: 'Outfit', sans-serif;
    font-size: 2rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
`;

export const StyledButton = styled.input`
    //=== Layout
    background: #FC4747;
    border-radius: 0.375rem;
    border: none;
    height: 3rem;
    width: 21rem;
    
    //=== Typography
    color: #FFF;
    text-align: center;
    font-family: Outfit;
    font-size: 15px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
`;

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;    
    align-items: center;
`;

export const StyledInput = styled.input`
    //=== Layout+
    background: transparent;
    border: none;
    border-bottom: 1px solid #5A698F;
    height: 2.3125rem;
    width: 100%;
    // width: 21rem;
    
    //=== Typography
    color : #FFF;
    font-family: Outfit;
    font-size: 15px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
`;

export const StyledLoginPrompt = styled.label`
    color: #fff;
    font-family: Outfit;
    font-size: 15px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
`;

export const StyledLoginLink = styled.a`
    color: #FC4747;
`;

export const StyledFormContainer = styled.div`
    background: #161D2F;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    padding: 2rem;
    width: 400px;
`;