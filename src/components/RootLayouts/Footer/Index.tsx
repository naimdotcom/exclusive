import { GoPaperAirplane } from "react-icons/go";
import { appStore, googlePay, qrCode } from "../../../utils/assets";
import { RiFacebookLine, RiLinkedinLine } from "react-icons/ri";
import { CiTwitter } from "react-icons/ci";
import { SlSocialInstagram } from "react-icons/sl";

function Footer() {
  return (
    <div className="bg-cs-text_black000000 mt-36">
      <div className="container py-20 ">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Exclusive */}
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-cs-text_whitef9f9f9 font-inter">
              Exclusive
            </h1>
            <h4 className="text-xl font-medium text-cs-text_whitef9f9f9 font-poppins">
              Subscribe
            </h4>
            <p className="text-base text-cs-text_whitef9f9f9 font-poppins">
              Get 10% off your first order
            </p>
            <div className="flex items-center w-full px-3 py-2 border-2 rounded-lg sm:w-fit border-cs-text_whiteFAFAFA">
              <input
                type="email"
                className="w-full px-2 py-1 bg-transparent text-cs-text_whitef9f9f9"
                placeholder="Enter your email"
              />
              <button>
                <GoPaperAirplane className="text-white" />
              </button>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h2 className="text-xl font-medium text-cs-text_whitef9f9f9 font-poppins">
              Support
            </h2>
            <ul className="space-y-2">
              <li className="text-base text-cs-text_whitef9f9f9 font-poppins">
                exclusive@gmail.com
              </li>
              <li className="text-base text-cs-text_whitef9f9f9 font-poppins">
                +88015-88888-9999
              </li>
            </ul>
          </div>

          {/* Account */}
          <div className="space-y-6">
            <h2 className="text-xl font-medium text-cs-text_whitef9f9f9 font-poppins">
              Account
            </h2>
            <ul className="space-y-2 text-cs-text_whitef9f9f9 font-poppins">
              <li>My Account</li>
              <li>Login / Register</li>
              <li>Cart</li>
              <li>Wishlist</li>
              <li>Shop</li>
            </ul>
          </div>

          {/* Quick Link */}
          <div className="space-y-6">
            <h2 className="text-xl font-medium text-cs-text_whitef9f9f9 font-poppins">
              Quick Link
            </h2>
            <ul className="space-y-2 text-cs-text_whitef9f9f9 font-poppins">
              <li>Privacy Policy</li>
              <li>Terms Of Use</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Download App */}
          <div className="space-y-6">
            <h2 className="text-xl font-medium text-cs-text_whitef9f9f9 font-poppins">
              Download App
            </h2>
            <p className="text-xs text-cs-text_whitef9f9f9 opacity-70 font-poppins">
              Save $3 with App New User Only
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <img className="h-20" src={qrCode} alt="QR Code" />
              <div className="grid grid-rows-2 gap-2">
                <img className="w-full" src={googlePay} alt="Google Pay" />
                <img className="w-full" src={appStore} alt="App Store" />
              </div>
            </div>
            <ul className="flex items-center justify-start gap-4 text-2xl text-cs-text_whitef9f9f9">
              <li>
                <RiFacebookLine />
              </li>
              <li>
                <CiTwitter />
              </li>
              <li>
                <SlSocialInstagram />
              </li>
              <li>
                <RiLinkedinLine />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="bg-cs-white_F5F5F5 opacity-60" />
      <div className="py-4">
        <h2 className="text-base text-center text-cs-white_color opacity-60 font-poppins">
          © Copyright Rimel 2022. All rights reserved
        </h2>
      </div>
    </div>
  );
}

export default Footer;
