import { useState } from "react";
import { cn } from "../../utils/cn";
import { categoryType } from "../../utils/data";
import { MdOutlineKeyboardArrowRight, MdMenu, MdClose } from "react-icons/md";

function SideBar({
  data,
  classes,
}: {
  data: categoryType[];
  classes?: string;
}) {
  const [openCategories, setOpenCategories] = useState<{
    [key: string | number]: boolean;
  }>({});
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false); // For mobile sidebar toggle

  const toggleCategory = (id: string | number) => {
    setOpenCategories((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <>
      {/* Mobile Sidebar Toggle Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed p-2 text-xl bg-gray-200 rounded-full shadow-lg md:hidden top-4 left-4"
      >
        {isSidebarOpen ? <MdClose /> : <MdMenu />}
      </button>

      {/* Sidebar for larger screens */}
      <div
        className={cn(
          "border-r border-gray-300 select-none hidden md:block",
          classes
        )}
      >
        <ul className="p-4 mr-10 space-y-4">
          {data.map((item) => {
            const isOpen = openCategories[item._id] || false;
            return (
              <li className="flex flex-col" key={item._id}>
                <div className="flex items-center justify-between w-full">
                  <a href={item.name}>
                    <h2>{item.name}</h2>
                  </a>
                  {item.subCategory.length > 0 && (
                    <span
                      onClick={() => toggleCategory(item._id)}
                      className="cursor-pointer"
                    >
                      <MdOutlineKeyboardArrowRight
                        className={`text-xl transition-transform ${
                          isOpen ? "rotate-90" : ""
                        }`}
                      />
                    </span>
                  )}
                </div>
                {isOpen && item.subCategory && (
                  <ul className="pl-4 mt-2 space-y-1 transition-all duration-300 ease-in-out border-l-2">
                    {item.subCategory.map((subItem) => (
                      <li key={subItem._id}>
                        <a
                          href={subItem.name}
                          className="text-sm text-gray-600 hover:text-black"
                        >
                          {subItem.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Sidebar for mobile screens */}
      {isSidebarOpen && (
        <div className="fixed top-0 left-0 z-50 w-3/4 h-full p-6 bg-white shadow-lg md:hidden">
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="absolute text-2xl top-4 right-4"
          >
            <MdClose />
          </button>
          <ul className="mt-10 space-y-4">
            {data.map((item) => {
              const isOpen = openCategories[item._id] || false;
              return (
                <li className="flex flex-col" key={item._id}>
                  <div className="flex items-center justify-between w-full">
                    <a href={item.name}>
                      <h2>{item.name}</h2>
                    </a>
                    {item.subCategory.length > 0 && (
                      <span
                        onClick={() => toggleCategory(item._id)}
                        className="cursor-pointer"
                      >
                        <MdOutlineKeyboardArrowRight
                          className={`text-xl transition-transform ${
                            isOpen ? "rotate-90" : ""
                          }`}
                        />
                      </span>
                    )}
                  </div>
                  {isOpen && item.subCategory && (
                    <ul className="pl-4 mt-2 space-y-1 transition-all duration-300 ease-in-out border-l-2">
                      {item.subCategory.map((subItem) => (
                        <li key={subItem._id}>
                          <a
                            href={subItem.name}
                            className="text-sm text-gray-600 hover:text-black"
                          >
                            {subItem.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}

export default SideBar;
