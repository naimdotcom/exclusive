import React, { useState } from "react";
import { axiosinstance } from "../../../helper/axios";
import { useNavigate, useParams } from "react-router-dom";
import { errorToast, successToast } from "../../../utils/toast";

function Otp() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const { email } = useParams();
  const navigate = useNavigate();

  const handleChange = (element: number, value: string) => {
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[element] = value;
      setOtp(newOtp);

      // Move to next input
      if (value && element < 5) {
        const nextInput = document.querySelector(
          `input[name="otp-${element + 1}"]`
        ) as HTMLInputElement;
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleKeyDown = (
    element: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    // Move to previous input on backspace
    if (e.key === "Backspace" && !otp[element] && element > 0) {
      const prevInput = document.querySelector(
        `input[name="otp-${element - 1}"]`
      ) as HTMLInputElement;
      if (prevInput) prevInput.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const otpValue = otp.join("");

    try {
      const response = await axiosinstance.post("/auth/verify-otp", {
        email,
        otp: otpValue,
      });
      if (response.statusText === "OK") {
        navigate("/login");
      }
    } catch (err: any) {
      errorToast(err.response?.data?.message || "Verification failed");
    }
  };

  const handleResetOtp = async () => {
    try {
      const response = await axiosinstance.post("/auth/resend-otp", { email });
      successToast(response?.data?.message || "OTP resent successfully");
    } catch (err: any) {
      errorToast(err.response?.data?.message || "Failed to resend OTP");
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md sm:p-8">
        <h2 className="mb-6 text-2xl font-semibold text-center text-gray-800 font-poppins">
          Enter OTP
        </h2>

        <p className="mb-2 text-sm text-center text-gray-600">
          We've sent a 6-digit code to {email}
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* OTP Inputs */}
          <div className="flex justify-center gap-2 sm:gap-3">
            {otp.map((value, index) => (
              <input
                key={index}
                name={`otp-${index}`}
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                value={value}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-12 text-xl text-center transition-colors border-2 rounded-md sm:w-14 sm:h-14 focus:border-blue-500 focus:outline-none"
                maxLength={1}
                autoFocus={index === 0}
              />
            ))}
          </div>

          {/* Buttons */}
          <div className="space-y-3">
            <button
              type="submit"
              className="w-full py-3 font-medium text-white transition-colors bg-green-600 rounded-md hover:bg-green-700"
              disabled={otp.join("").length !== 6}
            >
              Verify OTP
            </button>

            <div className="text-center">
              <button
                type="button"
                onClick={handleResetOtp}
                className="text-sm text-gray-600 transition-colors hover:text-gray-800 hover:underline"
              >
                Didn't receive code? Resend OTP
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Otp;
