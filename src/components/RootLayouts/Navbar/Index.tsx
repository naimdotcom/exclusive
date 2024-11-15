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
import { cn } from "../../../utils/cn";

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
    <div className="border-b-[0.5px] pt-10 pb-4 border-b-cs_black sticky  bg-white z-50 w-full top-0 left-0">
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
                      className="text-black cursor-pointer hover:text-cs-text_black7D8184"
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

          <div className="flex items-center gap-3 ml-auto text-black">
            <div className="flex items-center gap-4 px-2 rounded-md bg-cs-white_F5F5F5 w-fit">
              <input
                type="text "
                className={cn(
                  "bg-transparent rounded-md px-3 py-2 placeholder:text-cs-text_black7D8184"
                )}
                placeholder="What are you looking for"
              />
              <IoIosSearch className="text-3xl font-bold" />
            </div>
            <div>
              <MdOutlineFavoriteBorder className="text-3xl font-bold" />
            </div>
            <div className="relative">
              <IoCartOutline className="text-3xl font-bold" />
              <div
                className={cn(
                  "absolute bottom-1/2 -right-2 bg-cs-redDB4444 w-5 h-5 rounded-full flex items-center justify-center"
                )}
              >
                <h4 className="text-xs text-white select-none font-poppins">
                  0
                </h4>
              </div>
            </div>

            <div>
              <FiUser
                className="p-1 text-3xl text-white rounded-full cursor-pointer bg-cs-redDB4444"
                onClick={handleUserModal}
              />
              <div className="relative select-none" ref={modalRef}>
                {isUserModalOpen && (
                  <div className="absolute right-0 w-56 px-5 py-4 text-white rounded-lg shadow-lg top-3 bg-gradient-to-b from-gray-800/70 via-gray-900/80 to-gray-800/90 backdrop-blur-sm">
                    {/* user modal */}
                    <div className="flex flex-col gap-3">
                      <div>
                        <button className="flex items-center gap-2 ">
                          <span>
                            <FiUser className="text-2xl" />
                          </span>
                          <span
                            className={cn(
                              "font-poppins text-sm leading-5 text-cs-text_whiteFAFAFA"
                            )}
                          >
                            Manage My Account
                          </span>
                        </button>
                      </div>
                      <div>
                        <button className="flex items-center gap-2 ">
                          <span>
                            <LuShoppingBag className="text-2xl" />
                          </span>{" "}
                          <span
                            className={cn(
                              "font-poppins text-sm leading-5 text-cs-text_whiteFAFAFA"
                            )}
                          >
                            My Order
                          </span>
                        </button>
                      </div>
                      <div>
                        <button className="flex items-center gap-2 ">
                          <span>
                            <MdOutlineCancel className="text-2xl" />
                          </span>{" "}
                          <span
                            className={cn(
                              "font-poppins text-sm leading-5 text-cs-text_whiteFAFAFA"
                            )}
                          >
                            My Cancellations
                          </span>
                        </button>
                      </div>
                      <div>
                        <button className="flex items-center gap-2 ">
                          <span>
                            <FaRegStar className="text-2xl" />
                          </span>{" "}
                          <span
                            className={cn(
                              "font-poppins text-sm leading-5 text-cs-text_whiteFAFAFA"
                            )}
                          >
                            My Reviews
                          </span>
                        </button>
                      </div>
                      <div>
                        <button className="flex items-center gap-2 ">
                          <span>
                            <TbLogout2 className="text-2xl" />
                          </span>{" "}
                          <span
                            className={cn(
                              "font-poppins text-sm leading-5 text-cs-text_whiteFAFAFA"
                            )}
                          >
                            Logout
                          </span>
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
