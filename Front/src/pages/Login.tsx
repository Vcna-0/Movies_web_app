import AuthForm from "../components/Form/AuthForm.tsx";
import { StyledMainForm, StyledFormContainer, StyledTitle } from "../components/Form/AuthFormStyles.tsx";
import logo from "../assets/MovieIcon.svg";


const Login = () => {
    return (
        <div>
            <StyledMainForm>
                <img src={logo} alt="" />
                <StyledFormContainer>
                    <StyledTitle>Login</StyledTitle>
                    <AuthForm mode="login"/>
                </StyledFormContainer>
            </StyledMainForm>
        </div>
    );
};

export default Login;