import * as yup from "yup";

const phoneNumberRegex = /^[0-9]{10}$/

export const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string(),
  phone: yup.string().matches(phoneNumberRegex, 'invalid phone number'),
  email: yup.string().email().required(),
  favoriteColor: yup.string().oneOf(['white', 'black'], 'please select a color').nullable(),
  password: yup.string().min(4).max(15).required(),
  repeatPassword: yup.string().oneOf([yup.ref("password")], 'passwords must match').required(),
  newsletter: yup.boolean(),
  acceptTerms: yup.boolean().required().oneOf([true], 'terms must be accepted'),
}).required();