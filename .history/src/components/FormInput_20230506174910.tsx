type FormInputProps = {
  register: any;
  errors: any;
};

const FormInput = ({ inputName, register, errors }: FormInputProps) => {
  return (
    <>
      <input {...register("lastName")} />
      {errors.lastName?.messphone && <p>{errors.lastName?.messphone}</p>}
    </>
  );
};

export default FormInput;
