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

export default function App() {
  const { register, handleSubmit, formState:{ errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
  });
  const inputProps = { register, errors, schema };
  const onSubmit = (data: FormData) => console.log(data, 'submit');

  return (
    <>
    <h1>The React Hook Form</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormInput  inputName="firstName" {...inputProps}/>
      <FormInput  inputName="lastName" {...inputProps}/>
      <FormInput  inputName="phone" register={register} errors={errors} schema={schema}/>
      <FormInput  inputName="email" register={register} errors={errors} schema={schema}/>
      <FormInput  inputName="favoriteColor" inputType="radio" register={register} errors={errors} schema={schema}/>
      <FormInput  inputName="password" inputType="password"  register={register} errors={errors} schema={schema}/>
      <FormInput  inputName="repeatPassword" inputType="password" register={register} errors={errors} schema={schema}/>
      <FormInput  inputName="newsletter" inputType="checkbox" register={register} errors={errors} schema={schema}/>
      <FormInput  inputName="acceptTerms" inputType="checkbox" register={register} errors={errors} schema={schema}/>
      <input type="submit" />
    </form>
    {/* <div>{JSON.stringify(errors)}</div> */}
    {/* <div>{JSON.stringify(getValues().toString())}</div> */}
    </>
  );
}
