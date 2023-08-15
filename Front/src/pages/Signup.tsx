import AuthForm from "../components/Form/AuthForm.tsx";
import logo from "../assets/MovieIcon.svg";
import { StyledMainForm } from "../components/Form/AuthFormStyles.tsx";

import Menu from "../components/menu/Menu";

const Signup = () => {
    return (
        <StyledMainForm>
            <Menu />
            <img src={logo} alt="" />
            <AuthForm mode="signup"/>
        </StyledMainForm>
    );
};

export default Signup;
