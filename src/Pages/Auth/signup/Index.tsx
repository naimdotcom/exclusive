import { useFormik } from "formik";
import { useState } from "react";
import { SignupSchema } from "../../../validation/Schema/LoginSchema";
import { loginImg } from "../../../utils/assets";
import { cn } from "../../../utils/cn";
import Button from "../../../components/CommonComponents/Button";
import { Link, useNavigate } from "react-router-dom";
import { axiosinstance } from "../../../helper/axios";
import { errorToast, successToast } from "../../../utils/toast";

type Props = {};

function SignupPage({}: Props) {
  const [signupInfo, setSignInfo] = useState<{
    firstname: string;
    lastname: string;
    emailOrPhone?: string;
    email: string;
    phone: string;
    password: string;
    address1: string;
    address2: string;
  }>({
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
      console.log(values);

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
        {
          withCredentials: true,
        }
      );

      response
        .then((res) => {
          console.log(res);
          successToast("signup successfull");
          navigate("/login");
        })
        .catch((err) => {
          errorToast(`something went wrong`);
          console.log("signup error", err);
        });
    },
  });

  return (
    <div>
      <div className="container pl-0 ml-0 mt-14">
        <div className="flex items-center gap-28">
          <div>
            <picture>
              <img src={loginImg} alt={loginImg} />
            </picture>
          </div>
          <div className="w-[27%] space-y-7">
            <div>
              <h2 className="text-4xl font-medium leading-loose tracking-wider text-black font-inter">
                Sign up to Exclusive
              </h2>
              <p className="text-base font-normal leading-normal text-black font-poppins">
                Enter your details below
              </p>
            </div>
            <form
              action=""
              className="space-y-7"
              onSubmit={formik.handleSubmit}
            >
              <div>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  className={cn(
                    "text-black/40 text-base w-full font-normal font-poppins  leading-normal",
                    "border-b-2 border-black py-3 px-4"
                  )}
                  placeholder="Firstname"
                  value={formik.values.firstname}
                  onChange={formik.handleChange}
                />
                {formik.touched.firstname && formik.errors.firstname && (
                  <p className="text-sm font-normal leading-normal text-red-500 font-poppins">
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
                    "text-black/40 text-base w-full font-normal font-poppins  leading-normal",
                    "border-b-2 border-black py-3 px-4"
                  )}
                  placeholder="Lastname"
                  value={formik.values.lastname}
                  onChange={formik.handleChange}
                />
                {formik.touched.lastname && formik.errors.lastname && (
                  <p className="text-sm font-normal leading-normal text-red-500 font-poppins">
                    {formik.errors.lastname}
                  </p>
                )}
              </div>
              {/* email */}
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className={cn(
                    "text-black/40 text-base w-full font-normal font-poppins  leading-normal",
                    "border-b-2 border-black py-3 px-4"
                  )}
                  placeholder="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-sm font-normal leading-normal text-red-500 font-poppins">
                    {formik.errors.email}
                  </p>
                )}
              </div>
              {/* phone */}
              <div>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className={cn(
                    "text-black/40 text-base w-full font-normal font-poppins  leading-normal",
                    "border-b-2 border-black py-3 px-4"
                  )}
                  placeholder="phone number"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                />
                {formik.touched.phone && formik.errors.phone && (
                  <p className="text-sm font-normal leading-normal text-red-500 font-poppins">
                    {formik.errors.phone}
                  </p>
                )}
              </div>
              {/* password */}
              <div>
                <input
                  name="password"
                  id="password"
                  type="password"
                  value={formik.values.password}
                  className={cn(
                    "text-black/40 text-base w-full font-normal font-poppins  leading-normal",
                    "border-b-2 border-black py-3 px-4"
                  )}
                  placeholder="Password"
                  onChange={formik.handleChange}
                />
                {formik.touched.password && formik.errors.password && (
                  <p className="text-sm font-normal leading-normal text-red-500 font-poppins">
                    {formik.errors.password}
                  </p>
                )}
              </div>
              {/* address */}
              <div className="flex gap-2">
                {/* address1 */}
                <div>
                  <input
                    name="address1"
                    id="address1"
                    type="text"
                    value={formik.values.address1}
                    className={cn(
                      "text-black/40 text-base w-full font-normal font-poppins  leading-normal",
                      "border-b-2 border-black py-3 px-4"
                    )}
                    placeholder="address-1"
                    onChange={formik.handleChange}
                  />
                  {formik.touched.address1 && formik.errors.address1 && (
                    <p className="text-sm font-normal leading-normal text-red-500 font-poppins">
                      {formik.errors.address1}
                    </p>
                  )}
                </div>
                {/* address2 */}
                <div>
                  <input
                    name="address2"
                    id="address2"
                    type="text"
                    value={formik.values.address2}
                    className={cn(
                      "text-black/40 text-base w-full font-normal font-poppins  leading-normal",
                      "border-b-2 border-black py-3 px-4"
                    )}
                    placeholder="address-2"
                    onChange={formik.handleChange}
                  />
                  {formik.touched.address2 && formik.errors.address2 && (
                    <p className="text-sm font-normal leading-normal text-red-500 font-poppins">
                      {formik.errors.address2}
                    </p>
                  )}
                </div>
              </div>
              {/* submit button */}
              <div className="flex flex-col w-full gap-7">
                <Button
                  type="submit"
                  title="Create Account"
                  BgCss="bg-cs-redDB4444 py-3 w-full"
                  navigateTo=""
                />

                <div className="mx-auto">
                  <p className="text-base text-black opacity-70 font-poppins">
                    Already have a account?
                    {"  "} {"  "}
                    <Link
                      className="text-base font-semibold text-black underline opacity-90 font-poppins"
                      to={"/login"}
                    >
                      Log in
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
