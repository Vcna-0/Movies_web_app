import styled from "styled-components";

export const StyledMainForm = styled.main`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap : 5.125rem;
    margin-top: 4.875rem;
`;

export const StyledFormContainer = styled.div`
    background: #161D2F;
    border-radius: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 32px;
    width: 25rem;
`;


export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 24px;    
    align-items: center;
`;

export const StyledInput = styled.input`
    //=== Layout+
    background: transparent;
    border: none;
    border-bottom: .0625rem solid #5A698F;
    height: 37px;
    width: 100%;
    // width: 336px;
    
    //=== Typography
    color : #FFF;
    font-family: Outfit;
    font-size: .9375rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
`;

export const StyledButton = styled.input`
    //=== Layout
    background: #FC4747;
    border-radius: 6px;
    border: none;
    height: 48px;
    width: 336px;
    cursor: pointer;
    
    //=== Typography
    color: #FFF;
    text-align: center;
    font-family: Outfit;
    font-size: .9375rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
`;

export const StyledLoginPrompt = styled.label`
    color: #fff;
    font-family: Outfit;
    font-size: .9375rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
`;

export const StyledLoginLink = styled.a`
    color: #FC4747;
`;

export const StyledErrorText = styled.p`
    color: #FC4747;
`;