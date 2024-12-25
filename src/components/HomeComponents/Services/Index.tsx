import { FaTruckFast } from "react-icons/fa6";
import { RiShieldCheckFill } from "react-icons/ri";
import { TfiHeadphoneAlt } from "react-icons/tfi";

function Services() {
  const services = [
    {
      id: 1,
      title: "Free and Fast Delivery",
      description: "Free delivery for all orders over $140",
      icon: <FaTruckFast className="text-4xl text-center text-white " />,
    },
    {
      id: 2,
      title: "24/7 CUSTOMER SERVICE",
      description: "24/7 customer service",
      icon: <TfiHeadphoneAlt className="text-4xl text-center text-white " />,
    },
    {
      id: 3,
      title: "MONEY BACK GUARANTEE",
      description: "Hassle-free returns within 30 days",
      icon: <RiShieldCheckFill className="text-4xl text-center text-white " />,
    },
  ];

  return (
    <div className="mt-36">
      <div className="grid justify-between grid-cols-3">
        {services.map((service, i) => (
          <div
            className="flex flex-col items-center justify-center gap-6"
            key={i * service.id}
          >
            <div className="inline-flex items-center justify-center px-4 py-4 bg-black border-[15px] rounded-full border-cs-black_363738/30 h-fit w-fit">
              <span className="">{service.icon}</span>
            </div>
            <div className="inline-flex flex-col items-center justify-start gap-2 h-14">
              <div className="text-xl font-semibold leading-7 text-black font-poppins">
                {service.title}
              </div>
              <div className="text-sm font-normal leading-tight text-center text-black font-poppins">
                {service.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
