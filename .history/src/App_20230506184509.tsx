import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import FormInput from "./components/FormInput";
import { schema } from "./lib/validation";

export type FormData = {
  firstName: string;
  lastName: string;
  phone: number;
  email: string;
  favoriteColor: 'white' | 'black' | null;
  password: string;
  repeatPassword: string;
  newsletter: boolean;
  acceptTerms: boolean;
};

const defaultValues: FormData = {
  firstName: '',
  lastName: '',
  phone: 0,
  email: '',
  favoriteColor: null,
  password: '',
  repeatPassword: '',
  newsletter: false,
  acceptTerms: false,
};

export default function App() {
  const { register, handleSubmit, formState:{ errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
    defaultValues
  });
  const inputProps = { register, errors, schema };
  const onSubmit = (data: FormData) => console.log(data, 'submit');

  return (
    <>
    <h1>The React Hook Form</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormInput  inputName="firstName" {...inputProps}/>
      <FormInput  inputName="lastName" {...inputProps}/>
      <FormInput  inputName="phone" {...inputProps}/>
      <FormInput  inputName="email" {...inputProps}/>
      <FormInput  inputName="favoriteColor" inputType="radio" {...inputProps}/>
      <FormInput  inputName="password" inputType="password"  {...inputProps}/>
      <FormInput  inputName="repeatPassword" inputType="password" {...inputProps}/>
      <FormInput  inputName="newsletter" inputType="checkbox" {...inputProps}/>
      <FormInput  inputName="acceptTerms" inputType="checkbox" {...inputProps}/>
      <input type="submit" />
    </form>
    {/* <div>{JSON.stringify(errors)}</div> */}
    {/* <div>{JSON.stringify(getValues().toString())}</div> */}
    </>
  );
}
