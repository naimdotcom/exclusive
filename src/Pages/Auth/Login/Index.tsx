import { useState } from "react";
import Button from "../../../components/CommonComponents/Button";
import { loginImg } from "../../../utils/assets";
import { cn } from "../../../utils/cn";
import { LoginSchema } from "../../../validation/Schema/LoginSchema";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { axiosinstance } from "../../../helper/axios";
import { errorToast, successToast } from "../../../utils/toast";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../Features/Auth/Auth";

type Props = {};

function Login({}: Props) {
  const [loginInfo, _] = useState<{
    emailOrPhone: string;
    password: string;
  }>({
    emailOrPhone: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const auth = useSelector((state: any) => state.auth);
  const dispath = useDispatch();

  const formik = useFormik({
    initialValues: loginInfo,
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      setLoading(true);
      const response = axiosinstance.post("/auth/login", {
        email: values.emailOrPhone,
        password: values.password,
      });

      response
        .then((res) => {
          if (res.statusText == "OK") {
            dispath(login(res.data?.data?.user));
            successToast("login successful");
            navigate("/");
          }
        })
        .catch((err) => {
          errorToast(err.response.data.message);
          if (err.response.data.redirectUrl) {
            const redirectUrl = err.response.data.redirectUrl.split("/");
            const url = `/${redirectUrl[redirectUrl.length - 2]}/${
              redirectUrl[redirectUrl.length - 1]
            }`;
            navigate(url);
          }
        })
        .finally(() => {
          setLoading(false);
        });
    },
  });

  return (
    <div className="container px-4 mx-auto mt-8 md:mt-14">
      <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-28">
        {/* Image - Hidden on small screens, shown on medium and up */}
        <div className="hidden md:block md:flex-1">
          <picture>
            <img
              src={loginImg}
              alt="Login illustration"
              className="w-full max-w-md mx-auto lg:max-w-none"
            />
          </picture>
        </div>

        {/* Login Form */}
        <div className="w-full max-w-md p-6 mx-auto space-y-6 bg-white rounded-lg shadow-sm md:p-8 lg:w-[27%] lg:max-w-none lg:shadow-none lg:bg-transparent">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl font-medium text-black md:text-3xl lg:text-4xl font-inter">
              Log in to Exclusive
            </h2>
            <p className="mt-2 text-base text-gray-600 font-poppins">
              Enter your details below
            </p>
          </div>

          <form onSubmit={formik.handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="emailOrPhone"
                id="emailOrPhone"
                className={cn(
                  "w-full px-4 py-3 text-base border-b-2 border-gray-300 focus:border-black outline-none transition-colors",
                  formik.touched.emailOrPhone && formik.errors.emailOrPhone
                    ? "border-red-500"
                    : ""
                )}
                placeholder="Email or Phone Number"
                value={formik.values.emailOrPhone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.emailOrPhone && formik.errors.emailOrPhone && (
                <p className="mt-1 text-sm text-red-500 font-poppins">
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
                  "w-full px-4 py-3 text-base border-b-2 border-gray-300 focus:border-black outline-none transition-colors",
                  formik.touched.password && formik.errors.password
                    ? "border-red-500"
                    : ""
                )}
                placeholder="Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password && (
                <p className="mt-1 text-sm text-red-500 font-poppins">
                  {formik.errors.password}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <Button
                type="submit"
                title={loading ? "Loading..." : "Log In"}
                className="w-full py-3 text-white transition-colors bg-cs-redDB4444 hover:bg-red-700 sm:w-auto sm:px-8"
                disabled={loading}
                navigateTo=""
                // onClick={han}
              />
              <button
                type="button"
                className="text-base text-cs-redDB4444 hover:underline font-poppins"
                onClick={() => navigate("/forgot-password")}
              >
                Forgot Password?
              </button>
            </div>
          </form>

          <div className="text-center text-gray-600 font-poppins">
            <p>
              Don't have an account?{" "}
              <Link
                to="/sign-up"
                className="font-medium text-cs-redDB4444 hover:underline"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
