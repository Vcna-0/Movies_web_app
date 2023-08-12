import AuthForm from "../components/Form/AuthForm.tsx";
import { StyledMainForm, StyledFormContainer, StyledTitle } from "../components/Form/AuthFormStyles.tsx";
import logo from "../assets/MovieIcon.svg";


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
