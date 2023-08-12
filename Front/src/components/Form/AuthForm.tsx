import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { StyledButton, StyledForm, StyledInput, StyledLoginPrompt, StyledLoginLink } from "../../styles/styles.tsx";

type Inputs = {
    email: string,
    password: string,
    confirmPassword: string,
};

type Props = {
    mode: string,
}

const AuthForm = ({ mode }: Props) => {
    const { register, handleSubmit, watch, formState: { errors, isSubmitted } } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const { email, password } = data;

        try {
            // const response = await axios.post("http://localhost:3000/api/auth/signup", { email, password });
            const response = await axios.post(`http://localhost:3000/api/auth/${mode}`, { email, password });
            console.log(response.data);

        } catch (error) {
            if (axios.isAxiosError(error)) {
                return <p>Une erreur est survenue lors de l'inscription.</p>;
            }
        }
    };

    const password = watch("password", "");

    return (
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <StyledInput type="email" {...register("email", { required: true })} placeholder="Email adress"/>
                <StyledInput type="password" {...register("password", { required: true })} placeholder="Password"/>
                {mode === "signup" && (
                    <>
                        <StyledInput type="password" placeholder="Repeat password" {...register("confirmPassword", {
                            required: true,
                            validate: value => value === password || "Passwords do not match"
                        })}/>
                        {isSubmitted && errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
                    </>
                )}
                <StyledButton type="submit" value="Create an account"/>
                <StyledLoginPrompt>Already have an account? <StyledLoginLink href="/login">Log in</StyledLoginLink></StyledLoginPrompt>
            </StyledForm>
    );
};

export default AuthForm;
