import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  age: yup.number().positive().integer().required(),
  email: yup.string().email().required(),
  password: yup.string().min(4).max(15).required(),
  newsletter: yup.boolean(),
  acceptTerms: yup.boolean().required().oneOf([true], 'terms must be accepted'),
}).required();

export default function App() {
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} />
      <p>{errors.firstName?.message}</p>

      <input {...register("firstName")} />
      <p>{errors.firstName?.message}</p>
        
      <input {...register("age")} />
      <p>{errors.age?.message}</p>

      <input {...register("age")} />
      <p>{errors.age?.message}</p>
      
      <input type="submit" />
    </form>
  );
}
