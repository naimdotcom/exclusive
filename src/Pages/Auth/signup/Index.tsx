import { useFormik } from "formik";
import { useState } from "react";
import { SignupSchema } from "../../../validation/Schema/LoginSchema";
import { loginImg } from "../../../utils/assets";
import { cn } from "../../../utils/cn";
import Button from "../../../components/CommonComponents/Button";
import { Link } from "react-router-dom";

type Props = {};

function SignupPage({}: Props) {
  const [signupInfo, setSignInfo] = useState<{
    name: string;
    emailOrPhone: string;
    password: string;
  }>({
    name: "",
    emailOrPhone: "",
    password: "",
  });

  const formik = useFormik({
    initialValues: signupInfo,
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      console.log(values);
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
                  name="name"
                  id="name"
                  className={cn(
                    "text-black/40 text-base w-full font-normal font-poppins  leading-normal",
                    "border-b-2 border-black py-3 px-4"
                  )}
                  placeholder="Name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
                {formik.touched.name && formik.errors.name && (
                  <p className="text-sm font-normal leading-normal text-red-500 font-poppins">
                    {formik.errors.name}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="emailOrPhone"
                  id="emailOrPhone"
                  className={cn(
                    "text-black/40 text-base w-full font-normal font-poppins  leading-normal",
                    "border-b-2 border-black py-3 px-4"
                  )}
                  placeholder="Email or Phone Number"
                  value={formik.values.emailOrPhone}
                  onChange={formik.handleChange}
                />
                {formik.touched.emailOrPhone && formik.errors.emailOrPhone && (
                  <p className="text-sm font-normal leading-normal text-red-500 font-poppins">
                    {formik.errors.emailOrPhone}
                  </p>
                )}
              </div>
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
