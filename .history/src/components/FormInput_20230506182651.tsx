import type { FormData } from "../App";

type FormInputProps = {
  inputName: keyof FormData;
  inputType?: "text" | "email" | "password" | "number" | "checkbox" | "radio";
  register: any;
  errors: any;
  schema: any;
};

const isRequired = (schema, field: keyof FormData) => {
    console.log(schema)
  return !schema.fields[field].spec.optional || false;
};

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
            {isRequired(schema, inputName) && <span>*</span>}
            <label>{inputName}</label>
          </div>
          {errors[inputName]?.message && <p>{errors[inputName]?.message}</p>}
        </>
      );
    case "radio":
      return (
        <>
        <label>Favorite color</label>
        <div class="inline">
          <label>white</label>
          <input {...register(inputName)} type={inputType} value={"white"} />
          </div>
          <div class="inline">
          <label>black</label>
          <input {...register(inputName)} type={inputType} value={"black"} />
          </div>
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
