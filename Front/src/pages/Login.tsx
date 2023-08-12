import AuthForm from "../components/Form/AuthForm.tsx";
import { StyledTitle, StyledFormContainer } from "../styles/styles.tsx";



const Login = () => {
    return (
        <div>
            <StyledFormContainer>
                <StyledTitle>Login</StyledTitle>
                <AuthForm mode="login"/>
            </StyledFormContainer>
        </div>
    );
};

export default Login;