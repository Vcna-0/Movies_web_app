import AuthForm from "../components/Form/AuthForm.tsx";
import { StyledTitle, StyledFormContainer } from "../styles/styles.tsx";



const Signup = () => {
    return (
        <div>
            <StyledFormContainer>
                <StyledTitle>Sign Up</StyledTitle>
                <AuthForm mode="signup"/>
            </StyledFormContainer>
        </div>
        
    );
};

export default Signup;
