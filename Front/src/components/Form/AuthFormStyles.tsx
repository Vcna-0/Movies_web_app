import styled from "styled-components";

export const StyledMainForm = styled.main`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap : 3.625rem;
    margin-top: 48px;
`;

export const StyledForm = styled.form`
    background: #161D2F;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    max-width: 400px;
    padding: 1.5rem 1.5rem 2rem;
    width: 90%;
`;

export const StyledInputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
`;

export const StyledInput = styled.input`
    background: transparent;
    border: none;
    border-bottom: 1px solid #5A698F;
    color : hsla(0, 0%, 100%, 0.5);
    font : var(--font-BodyMedium);
    padding: 0 1rem 1.125rem;
    width: 100%;
`;

export const StyledButton = styled.input`
    background: #FC4747;
    border: none;
    border-radius: .375rem;
    color: #FFF;
    cursor: pointer;
    font : var(--font-BodyMedium);
    text-align: center;
    height: 3rem;
    width: 100%;
`;

export const StyledLoginPrompt = styled.label`
    color: #fff;
    font : var(--font-BodyMedium);
    text-align: center;
`;

export const StyledLoginLink = styled.a`
    color: #FC4747;
`;

export const StyledErrorText = styled.p`
    color: #FC4747;
`;