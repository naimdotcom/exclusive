import React, { useState } from "react";
import { axiosinstance } from "../../../helper/axios";
import { useNavigate, useParams } from "react-router-dom";
import { errorToast, successToast } from "../../../utils/toast";
import { Link } from "react-router-dom";

type Props = {};

function Otp({}: Props) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const { email } = useParams();
  const navigate = useNavigate();
  const handleChange = (element: number, value: string) => {
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[element] = value;
      setOtp(newOtp);

      // Move to the next input field if a digit is entered
      if (value.length === 1 && element < 6) {
        const nextInput = document.querySelector(
          `input[name="otp-${element + 1}"]`
        ) as HTMLInputElement;
        if (nextInput) {
          nextInput.focus();
        }
      }
    }
  };

  const handleKeyDown = (
    element: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    // Move to previous input field on backspace if current field is empty
    if (e.key === "Backspace" && element > 0 && otp[element] === "") {
      const prevInput = document.querySelector(
        `input[name="otp-${element - 1}"]`
      ) as HTMLInputElement;
      if (prevInput) {
        prevInput.focus();
      }
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const otpValue = otp.join("");
    console.log("OTP submitted:", otpValue);
    const response = axiosinstance.post("/auth/verify-otp", {
      email: email,
      otp: otpValue,
    });

    response
      .then((res) => {
        if (res.statusText == "OK") {
          navigate("/login");
        }
      })
      .catch((err) => {
        const data = err.response.data;
        console.log("error in otp", err);
        console.log(data);
        errorToast(data.message);
      });
  };

  const handleResetOtp = async () => {
    const response = axiosinstance.post("/auth/resend-otp", { email: email });

    response
      .then((res) => {
        console.log(res);
        successToast(res?.data?.message);
      })
      .catch((err) => {
        console.log("error in resent otp", err);
        const data = err.response.data;
        errorToast(data?.message);
      });
  };

  return (
    <div className="h-[60vh] flex items-center justify-center flex-col">
      <div className="flex flex-col items-center p-8 rounded-lg shadow-md bg-cs-white_FFFFFF">
        <h2 className="mb-4 text-2xl text-cs-black_363738 font-poppins">
          Enter OTP
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="space-x-2">
            {otp.map((value, index) => (
              <input
                key={index}
                name={`otp-${index}`}
                type="text"
                value={value}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-12 text-lg text-center border rounded-md border-cs-black_363738 text-cs-black_363738 font-inter"
                maxLength={1}
              />
            ))}
          </div>
          <div className="space-y-2 ">
            <button
              type="submit"
              className="w-full px-4 py-2 mt-8 rounded-md bg-cs-button00FF66 text-cs-text_black7D8184 font-poppins hover:bg-cs-button00FF66 active:bg-cs-hoverA0BCE0"
            >
              Verify OTP
            </button>
            <button
              type="button"
              onClick={() => {
                handleResetOtp();
              }}
              className="w-full px-4 py-2 rounded-md bg-cs-white_FEFAF1 text-cs-text_black7D8184 font-poppins active:bg-cs-hoverA0BCE0"
            >
              Resend otp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Otp;
