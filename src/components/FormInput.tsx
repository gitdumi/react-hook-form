import type { FormData } from "../App";

type FormInputProps = {
  name: keyof FormData;
  inputType?: "text" | "email" | "password" | "number" | "checkbox" | "radio";
  register: any;
  errors: any;
  schema: any;
};

const isRequired = (
  schema: { fields: { [x: string]: { spec: { optional: any } } } },
  field: keyof FormData
) => {
  return !schema.fields[field].spec.optional || false;
};

const FormInput = ({
  name,
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
            <input {...register(name)} type={inputType} />
            {isRequired(schema, name) && <span>*</span>}
            <label>{name}</label>
          </div>
          {errors[name]?.message && <p>{errors[name]?.message}</p>}
        </>
      );
    case "radio":
      return (
        <>
          <label>Favorite color</label>
          <div className="inline">
            <input {...register(name)} type={inputType} value={"white"} />
            <label>white</label>
          </div>
          <div className="inline">
            <input {...register(name)} type={inputType} value={"black"} />
            <label>black</label>
          </div>
          {errors[name]?.message && <p>{errors[name]?.message}</p>}
        </>
      );
    default:
      return (
        <>
          <input
            {...register(name)}
            placeholder={`${
              isRequired(schema, name) ? "*" : ""
            } ${name}`}
            type={inputType}
          />
          {errors[name]?.message && <p>{errors[name]?.message}</p>}
        </>
      );
  }
};

export default FormInput;
