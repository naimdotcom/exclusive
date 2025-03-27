import * as Yup from "yup";
let mailFormat: RegExp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
let passwordFormat: RegExp =
  /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;
const bdPhoneNumberRege: RegExp = /^(?:\+?88)?01[3-9]\d{8}$/;

const LoginSchema = Yup.object({
  emailOrPhone: Yup.string()
    .matches(mailFormat, "Email or Phone is invalid")
    .required("Email or phone number is required"),
  password: Yup.string()
    // .matches(mailFormat, "Password is invalid")
    .max(30)
    .min(6)
    .required("Password is required"),
});
const SignupSchema = Yup.object({
  email: Yup.string()
    .matches(mailFormat, "Email is invalid")
    .required("Email number is required"),
  phone: Yup.string()
    .matches(bdPhoneNumberRege, "Phone is invalid")
    .required("phone number is required"),

  password: Yup.string()
    // .matches(passwordFormat, "Password is invalid")
    .max(40)
    .min(6)
    .required("Password is required"),
  firstname: Yup.string().required("firstname is required").min(3).max(50),
  lastname: Yup.string().required("lastname is required").min(2).max(50),
  address1: Yup.string().required("address1 is required").min(2).max(50),
  address2: Yup.string().required("address2 is required").min(2).max(50),
});

export { LoginSchema, SignupSchema };
