import AuthForm from "@components/Form/AuthForm.tsx";
import logo from "@assets/MovieIcon.svg";
import { StyledMainForm } from "@components/Form/AuthFormStyles.tsx";

const Login = () => {
    return (
        <div>
            <StyledMainForm>
                <img src={logo} alt="" />
                <AuthForm mode="login"/>
            </StyledMainForm>
        </div>
    );
};

export default Login;

