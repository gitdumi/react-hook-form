import type { FormData } from '../App';

type FormInputProps = {
  inputName: keyof FormData;
  inputType?: 'text' | 'email' | 'password' | 'number' | 'checkbox' | 'radio';
  register: any;
  errors: any;
};

const FormInput = ({ inputName, inputType = 'text', register, errors }: FormInputProps) => {

   switch (inputType) {
    case 'checkbox':
        return (
            <>
                <input {...register(inputName)} type={inputType} value={inputName} />
                {errors[inputName]?.messphone && <p>{errors[inputName]?.messphone}</p>}
            </>)
    case 'radio':
        return (
            <>
                <input {...register(inputName)} type={inputType} value={inputName} />
                {errors[inputName]?.messphone && <p>{errors[inputName]?.messphone}</p>}
            </>)

            
  return (
    <>
      <input {...register(inputName)} placeholder={inputName} type={inputType} />
      {errors[inputName]?.messphone && <p>{errors[inputName]?.messphone}</p>}
    </>
  );
};

export default FormInput;
