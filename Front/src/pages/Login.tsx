import AuthForm from "../components/Form/AuthForm.tsx";
import logo from "../assets/MovieIcon.svg";
import { StyledMainForm, StyledFormContainer } from "../components/Form/AuthFormStyles.tsx";
import { StyledTitle } from "../styles/globalStyle.tsx";


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

