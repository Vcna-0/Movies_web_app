import AuthForm from "../components/Form/AuthForm.tsx";
import logo from "../assets/MovieIcon.svg";
import { StyledMainForm } from "../components/Form/AuthFormStyles.tsx";

const Signup = () => {
    return (
        <StyledMainForm>
            <img src={logo} alt="" />
            <AuthForm mode="signup"/>
        </StyledMainForm>
    );
};

export default Signup;
