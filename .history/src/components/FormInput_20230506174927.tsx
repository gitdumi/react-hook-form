type FormInputProps = {
  register: any;
  errors: any;
};

const FormInput = ({ inputName, register, errors }: FormInputProps) => {
  return (
    <>
      <input {...register(inputName)} />
      {errors.[inputName]?.messphone && <p>{errors[inputName]?.messphone}</p>}
    </>
  );
};

export default FormInput;
