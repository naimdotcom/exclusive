import { GoPaperAirplane } from "react-icons/go";
import { appStore, googlePay, qrCode } from "../../../utils/assets";
import { RiFacebookLine, RiLinkedinLine } from "react-icons/ri";
import { CiTwitter } from "react-icons/ci";
import { SlSocialInstagram } from "react-icons/sl";

function Footer() {
  return (
    <div className="bg-cs-text_black000000 mt-36">
      <div className="container py-20 ">
        <div className="grid grid-cols-5">
          {/* exlusive */}
          <div className="space-y-6">
            <div className="space-y-6">
              <h1 className="text-2xl font-bold text-cs-text_whitef9f9f9 font-inter">
                Exclusive
              </h1>
              <h4 className="text-xl font-medium leading-7 text-cs-text_whitef9f9f9 font-poppins">
                Subscribe
              </h4>
            </div>
            <div className="space-y-4">
              <div className="text-base font-normal leading-normal text-cs-text_whitef9f9f9 font-poppins">
                Get 10% off your first order
              </div>
              <div className="flex items-center justify-between px-3 py-2 border-2 rounded-lg w-fit border-cs-text_whiteFAFAFA ">
                <input
                  type="email"
                  className="w-full px-2 py-1 bg-transparent text-cs-text_whitef9f9f9"
                  placeholder="Enter your email"
                />
                <button>
                  <span>
                    <GoPaperAirplane className="font-bold text-white" />
                  </span>
                </button>
              </div>
            </div>
          </div>
          {/* exlusive */}
          {/* support */}
          <div className="space-y-16">
            <h2 className="text-[#f9f9f9] text-xl font-medium font-poppins leading-7">
              Support
            </h2>

            <ul className="space-y-4">
              <li className="text-[#f9f9f9] text-base font-normal font-poppins leading-normal">
                exclusive@gmail.com
              </li>
              <li className="text-[#f9f9f9] text-base font-normal font-poppins leading-normal">
                +88015-88888-9999
              </li>
            </ul>
          </div>
          {/* support */}
          {/* account */}
          <div className="space-y-6">
            <h2 className="text-[#f9f9f9] text-xl font-medium font-poppins leading-7">
              Account
            </h2>
            <ul className="inline-flex flex-col items-start justify-start gap-4  text-[#f9f9f9] text-base font-normal font-poppins leading-normal">
              <li className="">My Account</li>
              <li className="">Login / Register</li>
              <li className="">Cart</li>
              <li className="">Wishlist</li>
              <li className="">Shop</li>
            </ul>
          </div>
          {/* account */}
          {/* Quick link */}
          <div>
            <div className="inline-flex flex-col items-start justify-start h-48 gap-6">
              <h2 className="text-[#f9f9f9] text-xl font-medium font-['Poppins'] leading-7">
                Quick Link
              </h2>
              <ul className="flex flex-col items-start justify-start gap-4">
                <li className="text-[#f9f9f9] text-base font-normal font-['Poppins'] leading-normal">
                  Privacy Policy
                </li>
                <li className="text-[#f9f9f9] text-base font-normal font-['Poppins'] leading-normal">
                  Terms Of Use
                </li>
                <li className="text-[#f9f9f9] text-base font-normal font-['Poppins'] leading-normal">
                  FAQ
                </li>
                <li className="text-[#f9f9f9] text-base font-normal font-['Poppins'] leading-normal">
                  Contact
                </li>
              </ul>
            </div>
          </div>
          {/* Quick link */}
          {/* download app*/}
          <div className="space-y-6">
            <h2 className="text-[#f9f9f9] text-xl font-medium font-['Poppins'] leading-7">
              Download App
            </h2>
            <div className="space-y-3">
              <h3 className="opacity-70 text-[#f9f9f9] text-xs font-medium font-['Poppins'] leading-none">
                Save $3 with App New User Only
              </h3>
              <div className="flex items-center justify-center gap-3 w-fit">
                <div className="">
                  <picture>
                    <img className="h-20 bg-contain " src={qrCode} alt="" />
                  </picture>
                </div>
                <div className="grid grid-rows-2">
                  <div>
                    <picture>
                      <img className="w-full" src={googlePay} alt="" />
                    </picture>
                  </div>
                  <div>
                    <picture>
                      <img className="w-full" src={appStore} alt="" />
                    </picture>
                  </div>
                </div>
              </div>
            </div>

            <ul className="flex items-center justify-between pr-32 text-3xl text-cs-text_whitef9f9f9">
              <li>
                <RiFacebookLine />
              </li>
              <li>
                <CiTwitter className="" />
              </li>
              <li>
                <SlSocialInstagram className="text-2xl" />
              </li>
              <li>
                <RiLinkedinLine />
              </li>
            </ul>
          </div>
          {/* download app*/}
        </div>
      </div>
      <hr className="texts-cs-text_black7D8184 bg-cs-white_F5F5F5 opacity-60" />
      <div className="py-4">
        <h2 className="text-base font-normal text-center text-cs-white_color opacity-60 font-poppins">
          © Copyright Rimel 2022. All right reserved
        </h2>
      </div>
    </div>
  );
}

export default Footer;
