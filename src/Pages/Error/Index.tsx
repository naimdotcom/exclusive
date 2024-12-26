import { Link } from "react-router-dom";
import BreadCrumb from "../../components/CommonComponents/BreadCrumb";

const Error = () => {
  return (
    <div className="container flex flex-col items-center justify-center mt-36">
      <div className="flex flex-col items-center justify-start gap-10 mb-10">
        <div className="font-medium leading-10 tracking-widest text-black text-8xl font-inter">
          404 Not Found
        </div>
        <div className="text-base font-normal leading-normal text-black font-poppins">
          Your visited page not found. You may go home page.
        </div>
      </div>
      <Link
        to="/"
        className="h-14 px-12 py-4 bg-[#db4444] rounded justify-center items-center gap-2.5 inline-flex"
      >
        <div className="text-[#f9f9f9] text-base font-medium font-poppins leading-normal">
          Back to home page
        </div>
      </Link>
      <BreadCrumb />
    </div>
  );
};

export default Error;
