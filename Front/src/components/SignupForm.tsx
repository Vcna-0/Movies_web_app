import { useForm, SubmitHandler  } from "react-hook-form";
import axios from "axios";

type Inputs = {
    email: string,
    password: string,
    confirmPassword: string,
};

const SignupForm = () => {
    const { register, handleSubmit, watch, formState: { errors, isSubmitted } } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const { email, password } = data;

        try {
            const response = await axios.post("http://localhost:3000/api/auth/signup", { email, password });
            console.log(response.data);

        } catch (error) {
            if (axios.isAxiosError(error)) {
                return <p>Une erreur est survenue lors de l'inscription.</p>;
            }
        }
    };

    const password = watch("password", "");

    return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="email" {...register("email", { required: true })} placeholder="Email adress"/>
                <input type="password" {...register("password", { required: true })} placeholder="Password"/>
                <input type="password" placeholder="Repeat password" {...register("confirmPassword", {
                    required: true,
                    validate: value => value === password || "Passwords do not match"
                })}/>
                {isSubmitted && errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
                <input type="submit"/>
            </form>
    );
};

export default SignupForm;
