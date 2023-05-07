import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import FormInput from "./components/FormInput";
import { schema } from "./lib/validation";
import { useEffect } from "react";

export type FormData = {
  firstName: string | null;
  lastName: string | null;
  phone: number | null;
  email: string | null;
  favoriteColor: 'white' | 'black' | null;
  password: string | null;
  repeatPassword: string | null;
  newsletter: boolean | null;
  acceptTerms: boolean | null;
};

const defaultValues: FormData = {
  firstName: null,
  lastName: null,
  phone: null,
  email: null,
  favoriteColor: null,
  password: null,
  repeatPassword: null,
  newsletter: false,
  acceptTerms: false,
};

export default function App() {
  const { register, handleSubmit, formState:{ errors, isValid }, reset, watch } = useForm<FormData>({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues
  });
  const inputProps = { register, errors, schema };
  const onSubmit = (data: FormData) => alert(JSON.stringify(data, undefined, 2));

  const first = watch('firstName')
  const phone = watch('phone')

  useEffect(()=> {
    if(window?.confirm) {
      reset(defaultValues)
    }
  }, [window?.confirm])

  useEffect(()=> {
    console.log({isValid})
    console.log({first})
    console.log({phone})
  }, [first, phone, isValid])

  return (
    <>
    <h1>The React Hook Form</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormInput  name="firstName" {...inputProps}/>
      <FormInput  name="lastName" {...inputProps}/>
      <FormInput  name="phone" {...inputProps}/>
      <FormInput  name="email" {...inputProps}/>
      <FormInput  name="favoriteColor" inputType="radio" {...inputProps}/>
      <FormInput  name="password" inputType="password"  {...inputProps}/>
      <FormInput  name="repeatPassword" inputType="password" {...inputProps}/>
      <FormInput  name="newsletter" inputType="checkbox" {...inputProps}/>
      <FormInput  name="acceptTerms" inputType="checkbox" {...inputProps}/>
      <input type="submit" />
    </form>
    </>
  );
}
