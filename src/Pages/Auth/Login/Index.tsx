import { useState } from "react";
import Button from "../../../components/CommonComponents/Button";
import { loginImg } from "../../../utils/assets";
import { cn } from "../../../utils/cn";
import { LoginSchema } from "../../../validation/Schema/LoginSchema";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { axiosinstance } from "../../../helper/axios";

type Props = {};

function Login({}: Props) {
  const [loginInfo, setLoginInfo] = useState<{
    emailOrPhone: string;
    password: string;
  }>({
    emailOrPhone: "",
    password: "",
  });
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: loginInfo,
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      console.log(values);

      const response = axiosinstance.post(
        "/auth/login",
        {
          email: values.emailOrPhone,
          password: values.password,
        },
        {
          withCredentials: true,
        }
      );

      response
        .then((res) => {
          console.log(res);
          // navigate("/")
        })
        .catch((err) => {
          console.log("something went wrong in login:", err);
        });
    },
  });

  return (
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
              Log in to Exclusive
            </h2>
            <p className="text-base font-normal leading-normal text-black font-poppins">
              Enter your details below
            </p>
          </div>
          <form action="" className="space-y-7" onSubmit={formik.handleSubmit}>
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
            <div className="flex items-center justify-between">
              <Button
                type="submit"
                title="Log in"
                BgCss="bg-cs-redDB4444 py-3"
                navigateTo=""
              />
              <button className="text-base font-normal leading-normal text-cs-redDB4444 font-poppins">
                Forgot Password?
              </button>
            </div>
          </form>
          <div className="text-base font-light leading-normal text-center font-poppins">
            <h1>
              Already have an Account?{" "}
              <span>
                <Link to={"/sign-up"} className="font-medium underline">
                  Sign up
                </Link>
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
