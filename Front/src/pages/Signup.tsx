import AuthForm from "../components/Form/AuthForm.tsx";
import logo from "../assets/MovieIcon.svg";
import { StyledMainForm, StyledFormContainer } from "../components/Form/AuthFormStyles.tsx";
import { StyledTitle } from "../styles/globalStyle.tsx";


const Signup = () => {
    return (
        <StyledMainForm>
            <img src={logo} alt="" />
            <StyledFormContainer>
                <StyledTitle>Sign Up</StyledTitle>
                <AuthForm mode="signup"/>
            </StyledFormContainer>
        </StyledMainForm>
    );
};

export default Signup;
