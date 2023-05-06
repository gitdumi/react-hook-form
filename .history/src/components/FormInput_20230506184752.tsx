import type { FormData } from "../App";

type FormInputProps = {
  inputName: keyof FormData;
  inputType?: "text" | "email" | "password" | "number" | "checkbox" | "radio";
  register: any;
  errors: any;
  schema: any;
};

const isRequired = (schema: { fields: { [x: string]: { spec: { optional: any; }; }; }; }, field: keyof FormData) => {
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
        <div className="inline">
          <input {...register(inputName)} type={inputType} value={"white"} name={inputType} />
          <label>white</label>
          </div>
          <div className="inline">
          <input {...register(inputName)} type={inputType} value={"black"} />
          <label>black</label>
          </div>
          {errors[inputName]?.message && <p>{errors[inputName]?.message}</p>}
        </>
      );
    default:
      return (
        <>
          <input
            {...register(inputName)}
            placeholder={`${isRequired(schema, inputName) ? "*" : ''} ${inputName}`}
            type={inputType}
          />
          {errors[inputName]?.message && <p>{errors[inputName]?.message}</p>}
        </>
      );
  }
};

export default FormInput;
