import { useForm, SubmitHandler  } from "react-hook-form";

type Inputs = {
    email: string,
    password: string,
    confirmPassword: string,
};


const SignupForm = () => {

    const { register, handleSubmit, watch, formState: { errors, isSubmitted  } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

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
