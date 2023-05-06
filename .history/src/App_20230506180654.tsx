import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import FormInput from "./components/FormInput";

export type FormData = {
  firstName: string;
  lastName: string;
  phone: number;
  email: string;
  favoriteColor: 'white' | 'black'
  password: string;
  repeatPassword: string;
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
  const { register, handleSubmit, formState:{ errors }, getValues } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data: FormData): void => console.log(data, 'submit');

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormInput  inputName="firstName" register={register} errors={errors} />
      <FormInput  inputName="lastName" register={register} errors={errors} />
      <FormInput  inputName="phone" register={register} errors={errors} />
      <FormInput  inputName="email" register={register} errors={errors} />
      <FormInput  inputName="favoriteColor" inputType="radio" register={register} errors={errors} />
      <FormInput  inputName="password" inputType="password"  register={register} errors={errors} />
      <FormInput  inputName="repeatPassword" inputType="password" register={register} errors={errors} />
      <FormInput  inputName="newsletter" inputType="checkbox" register={register} errors={errors} />
      <FormInput  inputName="acceptTerms" inputType="checkbox" register={register} errors={errors} />
      <input type="submit" />
    </form>
    <div>{JSON.stringify(errors)}</div>
    <div>{JSON.stringify(getValues().toString()}</div>
    </>
  );
}
