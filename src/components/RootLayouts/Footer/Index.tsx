import { GoPaperAirplane } from "react-icons/go";

function Footer() {
  return (
    <div className="py-10  bg-cs-text_black000000">
      <div className="grid grid-cols-6">
        {/* exlusive */}
        <div>
          <div>
            <h1 className="text-2xl font-bold text-cs-text_whitef9f9f9 font-inter">
              Exclusive
            </h1>
            <h4 className="text-[#f9f9f9] text-xl font-medium font-['Poppins'] leading-7">
              Subscribe
            </h4>
          </div>
          <div>
            <h3>Get 10% off your first purchase</h3>
            <div>
              <input type="email" />
              <span>
                <GoPaperAirplane />
              </span>
            </div>
          </div>
        </div>
        {/* exlusive */}
        {/* support */}
        <div></div>
        {/* support */}
      </div>
    </div>
  );
}

export default Footer;
