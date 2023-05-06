import type { FormData } from '../App';

type FormInputProps = {
  inputName: keyof FormData;
  register: any;
  errors: any;
};

const FormInput = ({ inputName, register, errors }: FormInputProps) => {
  return (
    <>
      <input {...register(inputName)} placeholder='' />
      {errors[inputName]?.messphone && <p>{errors[inputName]?.messphone}</p>}
    </>
  );
};

export default FormInput;
