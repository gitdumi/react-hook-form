import type { FormData } from "../App";

type FormInputProps = {
  inputName: keyof FormData;
  inputType?: "text" | "email" | "password" | "number" | "checkbox" | "radio";
  register: any;
  errors: any;
};

const FormInput = ({
  inputName,
  inputType = "text",
  register,
  errors,
}: FormInputProps) => {
  switch (inputType) {
    case "checkbox":
      return (
        <div className="">
        <label>{inputName}</label>
          <input {...register(inputName)} type={inputType} />
          {errors[inputName]?.message && (
            <p>{errors[inputName]?.message}</p>
          )}
        </div>
      );
    case "radio":
      return (
        <>
          <label>white</label>
          <input {...register(inputName)} type={inputType} value={'white'} />
          <label>black</label>
          <input {...register(inputName)} type={inputType} value={'black'} />
          {errors[inputName]?.message && (
            <p>{errors[inputName]?.message}</p>
          )}
        </>
      );
    default:
      return (
        <>
          <input
            {...register(inputName)}
            placeholder={inputName}
            type={inputType}
          />
          {errors[inputName]?.message && (
            <p>{errors[inputName]?.message}</p>
          )}
        </>
      );
  }
};

export default FormInput;