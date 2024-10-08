import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import { useState } from 'react';
import {
   StyledButton,
   StyledForm,
   StyledInputsContainer,
   StyledInput,
   StyledLoginPrompt,
   StyledLoginLink,
   StyledErrorText,
} from './AuthFormStyles.tsx';
import { StyledTitle } from '../../styles/globalStyle.tsx';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth.tsx';

type Inputs = {
   email: string;
   password: string;
   confirmPassword: string;
};

type Props = {
   mode: string;
};

const AuthForm = ({ mode }: Props) => {
   const navigate = useNavigate();
   const { login } = useAuth();

   const {
      register,
      handleSubmit,
      watch,
      formState: { errors, isSubmitted },
   } = useForm<Inputs>();
   const [apiError, setApiError] = useState<string | null>(null);

   const onSubmit: SubmitHandler<Inputs> = async (data) => {
      const { email, password } = data;

      try {
         const response = await axios.post(`http://localhost:3000/api/${mode}`, { email, password });
         const token = response.data.token;
         if (mode === 'login') {
            login(token);
         }
         navigate('/');
      } catch (error) {
         if (axios.isAxiosError(error)) {
            const errorMessage = error.response?.data?.message;

            setApiError(
               errorMessage ||
                  (mode === 'login'
                     ? 'Une erreur est survenue lors de la connexion.'
                     : "Une erreur est survenue lors de l'inscription.")
            );
         }
      }
   };

   const password = watch('password', '');
   const promptText = mode === 'signup' ? 'Already have an account? ' : "Don't have an account? ";
   const linkText = mode === 'signup' ? 'Log in' : 'Sign up';
   const TitleText = mode === 'signup' ? 'Sign Up' : 'Login';

   return (
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
         <StyledTitle>{TitleText}</StyledTitle>
         <StyledInputsContainer>
            <StyledInput type="email" {...register('email', { required: true })} placeholder="Email adress" />
            <StyledInput type="password" {...register('password', { required: true })} placeholder="Password" />
            {mode === 'signup' && (
               <>
                  <StyledInput
                     type="password"
                     placeholder="Repeat password"
                     {...register('confirmPassword', {
                        required: true,
                        validate: (value) => value === password || 'Passwords do not match',
                     })}
                  />
                  {isSubmitted && errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
               </>
            )}
         </StyledInputsContainer>
         <StyledButton type="submit" value={mode === 'signup' ? 'Create an account' : 'Log in'} />
         <StyledLoginPrompt>
            {promptText}
            <StyledLoginLink href={mode === 'signup' ? '/login' : '/signup'}>{linkText}</StyledLoginLink>
         </StyledLoginPrompt>
         {apiError && <StyledErrorText>{apiError}</StyledErrorText>}
      </StyledForm>
   );
};

export default AuthForm;
