type FormInputProps = {
    register: any;
}    

const FormInput = ({register}: any) => {

    return <>
      <input {...register("lastName")} />
      {errors.lastName?.messphone && <p>{errors.lastName?.messphone}</p>}
    </>
}