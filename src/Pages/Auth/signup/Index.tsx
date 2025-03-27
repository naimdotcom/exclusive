import { useFormik } from "formik";
import { useState } from "react";
import { SignupSchema } from "../../../validation/Schema/LoginSchema";
import { loginImg } from "../../../utils/assets";
import { cn } from "../../../utils/cn";
import Button from "../../../components/CommonComponents/Button";
import { Link, useNavigate } from "react-router-dom";
import { axiosinstance } from "../../../helper/axios";
import { errorToast, successToast } from "../../../utils/toast";

function SignupPage() {
  const [signupInfo] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    address1: "",
    address2: "",
  });
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: signupInfo,
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      const response = axiosinstance.post(
        "/auth/signup",
        {
          firstName: values.firstname,
          lastName: values.lastname,
          email: values.email,
          phone: values.phone,
          address1: values.address1,
          address2: values.address2,
          password: values.password,
        },
        { withCredentials: true }
      );

      response
        .then(() => {
          successToast("Signup successful");
          navigate("/login");
        })
        .catch((err) => {
          errorToast("Something went wrong");
          console.error("Signup error", err);
        });
    },
  });

  return (
    <div className="container px-4 mx-auto mt-8 md:mt-14">
      <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-20 xl:gap-28">
        {/* Image - Hidden on mobile, shown on md screens and up */}
        <div className="hidden md:block md:flex-1">
          <picture>
            <img
              src={loginImg}
              alt="Signup illustration"
              className="w-full max-w-md mx-auto lg:max-w-none"
            />
          </picture>
        </div>

        {/* Signup Form */}
        <div className="w-full max-w-md p-6 mx-auto space-y-6 bg-white rounded-lg shadow-sm md:p-8 lg:w-[30%] lg:max-w-none lg:shadow-none lg:bg-transparent">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl font-medium text-black md:text-3xl lg:text-4xl font-inter">
              Sign up to Exclusive
            </h2>
            <p className="mt-2 text-base text-gray-600 font-poppins">
              Enter your details below
            </p>
          </div>

          <form onSubmit={formik.handleSubmit} className="space-y-4">
            {/* Name Fields */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  className={cn(
                    "w-full px-4 py-3 text-base border-b-2 border-gray-300 focus:border-black outline-none transition-colors",
                    formik.touched.firstname && formik.errors.firstname
                      ? "border-red-500"
                      : ""
                  )}
                  placeholder="First Name"
                  value={formik.values.firstname}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.firstname && formik.errors.firstname && (
                  <p className="mt-1 text-sm text-red-500 font-poppins">
                    {formik.errors.firstname}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  className={cn(
                    "w-full px-4 py-3 text-base border-b-2 border-gray-300 focus:border-black outline-none transition-colors",
                    formik.touched.lastname && formik.errors.lastname
                      ? "border-red-500"
                      : ""
                  )}
                  placeholder="Last Name"
                  value={formik.values.lastname}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.lastname && formik.errors.lastname && (
                  <p className="mt-1 text-sm text-red-500 font-poppins">
                    {formik.errors.lastname}
                  </p>
                )}
              </div>
            </div>

            {/* Email and Phone */}
            <div>
              <input
                type="email"
                name="email"
                id="email"
                className={cn(
                  "w-full px-4 py-3 text-base border-b-2 border-gray-300 focus:border-black outline-none transition-colors",
                  formik.touched.email && formik.errors.email
                    ? "border-red-500"
                    : ""
                )}
                placeholder="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="mt-1 text-sm text-red-500 font-poppins">
                  {formik.errors.email}
                </p>
              )}
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                id="phone"
                className={cn(
                  "w-full px-4 py-3 text-base border-b-2 border-gray-300 focus:border-black outline-none transition-colors",
                  formik.touched.phone && formik.errors.phone
                    ? "border-red-500"
                    : ""
                )}
                placeholder="Phone Number"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.phone && formik.errors.phone && (
                <p className="mt-1 text-sm text-red-500 font-poppins">
                  {formik.errors.phone}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <input
                name="password"
                id="password"
                type="password"
                className={cn(
                  "w-full px-4 py-3 text-base border-b-2 border-gray-300 focus:border-black outline-none transition-colors",
                  formik.touched.password && formik.errors.password
                    ? "border-red-500"
                    : ""
                )}
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password && (
                <p className="mt-1 text-sm text-red-500 font-poppins">
                  {formik.errors.password}
                </p>
              )}
            </div>

            {/* Address Fields */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <input
                  name="address1"
                  id="address1"
                  type="text"
                  className={cn(
                    "w-full px-4 py-3 text-base border-b-2 border-gray-300 focus:border-black outline-none transition-colors",
                    formik.touched.address1 && formik.errors.address1
                      ? "border-red-500"
                      : ""
                  )}
                  placeholder="Address Line 1"
                  value={formik.values.address1}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.address1 && formik.errors.address1 && (
                  <p className="mt-1 text-sm text-red-500 font-poppins">
                    {formik.errors.address1}
                  </p>
                )}
              </div>

              <div>
                <input
                  name="address2"
                  id="address2"
                  type="text"
                  className={cn(
                    "w-full px-4 py-3 text-base border-b-2 border-gray-300 focus:border-black outline-none transition-colors",
                    formik.touched.address2 && formik.errors.address2
                      ? "border-red-500"
                      : ""
                  )}
                  placeholder="Address Line 2"
                  value={formik.values.address2}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.address2 && formik.errors.address2 && (
                  <p className="mt-1 text-sm text-red-500 font-poppins">
                    {formik.errors.address2}
                  </p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              title="Create Account"
              className="w-full py-3 text-white transition-colors bg-cs-redDB4444 hover:bg-red-700"
            />

            {/* Login Link */}
            <div className="text-center">
              <p className="text-base text-gray-600 font-poppins">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-semibold text-cs-redDB4444 hover:underline"
                >
                  Log in
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
