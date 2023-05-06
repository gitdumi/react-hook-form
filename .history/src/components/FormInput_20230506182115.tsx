import type { FormData } from "../App";

type FormInputProps = {
  inputName: keyof FormData;
  inputType?: "text" | "email" | "password" | "number" | "checkbox" | "radio";
  register: any;
  errors: any;
  schema: any;
};

const isRequired = (schema, field: keyof FormData) =>{
    return schema.fields[field]._exclusive.required || false 
}

const FormInput = ({
  inputName,
  inputType = "text",
  register,
  errors,
  schema,
}: FormInputProps) => {
  switch (inputType) {
    case "checkbox":
      return (
        <>
          <div className="inline">
            <input {...register(inputName)} type={inputType} />
            <label>{isRequired(schema, inputName) ? '*'}{inputName}</label>
          </div>
          {errors[inputName]?.message && <p>{errors[inputName]?.message}</p>}
        </>
      );
    case "radio":
      return (
        <>
          <label>white</label>
          <input {...register(inputName)} type={inputType} value={"white"} />
          <label>black</label>
          <input {...register(inputName)} type={inputType} value={"black"} />
          {errors[inputName]?.message && <p>{errors[inputName]?.message}</p>}
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
          {errors[inputName]?.message && <p>{errors[inputName]?.message}</p>}
        </>
      );
  }
};

export default FormInput;
