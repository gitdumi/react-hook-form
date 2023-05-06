import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

type FormData = {
  firstName: string;
  lastName: string;
  phone: number;
  email: string;
  favoriteColor: 'white' | 'black'
  password: string;
  newsletter: boolean;
  acceptTerms: boolean;
};

const phoneNumberRegex = /^[0-9]{10}$/

const schema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string(),
  phone: yup.string().matches(phoneNumberRegex).required(),
  email: yup.string().email().required(),
  favoriteColor: yup.string().oneOf(['white', 'black']),
  password: yup.string().min(4).max(15).required(),
  repeatPassword: yup.string().oneOf([yup.ref("password")], 'passwords must match'),
  newsletter: yup.boolean(),
  acceptTerms: yup.boolean().required().oneOf([true], 'terms must be accepted'),

}).required();

export default function App() {
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data: FormData): void => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} placeholder="First name" />
      {errors.firstName?.message && <p>{errors.firstName?.message}</p>}

      <input {...register("lastName")} />
      {errors.lastName?.message && <p>{errors.lastName?.message}</p>}
        
      <input {...register("phone")} />
      <p>{errors.phone?.message}</p>

      <input {...register("email")} />
      <p>{errors.email?.message}</p>

      <input {...register("password")} />
      <p>{errors.password?.message}</p>

      <input {...register("repeatPassword")} />
      <p>{errors.repeatPassword?.message}</p>
      
      <input type="submit" />
    </form>
  );
}
