type FormInputProps = {
    

const FormInput = (props: any) => {

    return <>
      <input {...register("lastName")} />
      {errors.lastName?.messphone && <p>{errors.lastName?.messphone}</p>}
    </>
}