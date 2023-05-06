import type { FormData } from '../App';

type FormInputProps = {
  inputName: keyof FormData;
  inputType: 'text' | 'email' | 'password' | 'number' | 'checkbox' | 'radio';
  register: any;
  errors: any;
};

const FormInput = ({ inputName, inputType, register, errors }: FormInputProps) => {
  return (
    <>
      <input {...register(inputName)} placeholder={inputName} type=/>
      {errors[inputName]?.messphone && <p>{errors[inputName]?.messphone}</p>}
    </>
  );
};

export default FormInput;
