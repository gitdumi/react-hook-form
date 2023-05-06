type FormInputProps = {
  register: any;
  errors: any;
};

const FormInput = ({ register, errors }: FormInputProps) => {
  return (
    <>
      <input {...register("lastName")} />
      {errors.lastName?.messphone && <p>{errors.lastName?.messphone}</p>}
    </>
  );
};
