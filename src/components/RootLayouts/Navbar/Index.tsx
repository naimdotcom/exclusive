import { NavLink } from "react-router-dom";
import { logo } from "../../../utils/assets";
import { navigationBar } from "../../../utils/data";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineCancel, MdOutlineFavoriteBorder } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";
import { LuShoppingBag } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";

function Navbar() {
  const [isUserModalOpen, setIsUserModalOpen] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  // todo: handle the click of userProfile
  const handleUserModal = () => {
    setIsUserModalOpen(!isUserModalOpen);
  };

  // todo: handle the click of outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsUserModalOpen(false);
      }
    };

    if (isUserModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      console.log("clicked add");
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isUserModalOpen]);

  return (
    <div className="border-b-[0.5px] pt-10 pb-4 border-b-cs_black">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 ">
          <div className="cursor-pointer">
            <NavLink to="/">
              <picture>
                <img src={logo} alt={logo} />
              </picture>
            </NavLink>
          </div>

          {/* navigation bar */}

          <div>
            <ul className="flex gap-11">
              {navigationBar.map((item, _) => {
                return (
                  <>
                    <li
                      key={item.id}
                      className="cursor-pointer text-black hover:text-cs-text_black7D8184"
                    >
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          isActive
                            ? "text-center  font-poppins border-b-[1px] border-b-black"
                            : "text-center font-poppins"
                        }
                      >
                        {item.title}{" "}
                      </NavLink>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>

          {/* navigation bar  end*/}

          {/* Search and Cart */}

          <div className="flex ml-auto items-center gap-3 text-black">
            <div className="bg-cs-white_F5F5F5 flex rounded-md w-fit gap-4 items-center px-2">
              <input
                type="text "
                className="bg-transparent rounded-md px-3 py-2 placeholder:text-cs-text_black7D8184"
                placeholder="What are you looking for"
              />
              <IoIosSearch className="font-bold text-3xl" />
            </div>
            <div>
              <MdOutlineFavoriteBorder className="font-bold text-3xl" />
            </div>
            <div>
              <IoCartOutline className="font-bold text-3xl" />
            </div>

            <div>
              <FiUser
                className="bg-cs-redDB4444 rounded-full text-3xl p-1 text-white"
                onClick={handleUserModal}
              />
              <div className="relative" ref={modalRef}>
                {isUserModalOpen && (
                  <div
                    className="absolute right-0 top-3  w-56
                   bg-gradient-to-b from-gray-800/70 via-gray-900/80 to-gray-800/90 text-white backdrop-blur-sm rounded-lg shadow-lg px-5 py-4"
                  >
                    {/* user modal */}
                    <div className="flex flex-col gap-3">
                      <div>
                        <button className="flex items-center gap-2 ">
                          <span>
                            <FiUser className="text-2xl" />
                          </span>{" "}
                          Manage My Account
                        </button>
                      </div>
                      <div>
                        <button className="flex items-center gap-2 ">
                          <span>
                            <LuShoppingBag className="text-2xl" />
                          </span>{" "}
                          My Order
                        </button>
                      </div>
                      <div>
                        <button className="flex items-center gap-2 ">
                          <span>
                            <MdOutlineCancel className="text-2xl" />
                          </span>{" "}
                          My Cancellations
                        </button>
                      </div>
                      <div>
                        <button className="flex items-center gap-2 ">
                          <span>
                            <FaRegStar className="text-2xl" />
                          </span>{" "}
                          My Review
                        </button>
                      </div>
                      <div>
                        <button className="flex items-center gap-2 ">
                          <span>
                            <TbLogout2 className="text-2xl" />
                          </span>{" "}
                          Logout
                        </button>
                      </div>
                    </div>
                    {/* user modal End*/}
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* Search and Cart end */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
