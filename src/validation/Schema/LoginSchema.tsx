import * as Yup from "yup";
let mailFormat: RegExp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
let passwordFormat: RegExp =
  /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;
// const bdPhoneNumberRege: RegExp = /^(?:\+?88)?01[3-9]\d{8}$/;

const LoginSchema = Yup.object({
  emailOrPhone: Yup.string()
    .matches(mailFormat, "Email or Phone is invalid")
    .required("Email or phone number is required"),
  password: Yup.string()
    .matches(passwordFormat, "Password is invalid")
    .max(20)
    .min(6)
    .required("Password is required"),
});

export { LoginSchema };
