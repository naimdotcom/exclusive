import { useState } from "react";
import { cn } from "../../utils/cn";
import { sideCategories, sideCategory, subCategory } from "../../utils/data";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function SideBar({ classes }: { classes: string }) {
  const [openCategories, setOpenCategories] = useState<{
    [key: string | number]: boolean;
  }>({});

  const toggleCategory = (id: string | number) => {
    setOpenCategories((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div
      className={cn(
        "border-r-[0.5px] border-r-cs-text_black000000 select-none",
        classes
      )}
    >
      <ul className={cn("space-y-4 mr-10")}>
        {sideCategories.map((item: sideCategory) => {
          const isOpen = openCategories[item.id] || false;
          return (
            <li
              className={cn("flex flex-col items-center justify-between")}
              key={item.id}
            >
              <div className="flex items-center justify-between w-full">
                <a href={item.path}>
                  <h2>{item.title}</h2>
                </a>
                {item.subCategory.length > 0 && (
                  <span onClick={() => toggleCategory(item.id)}>
                    <MdOutlineKeyboardArrowRight className={cn("text-xl ")} />
                  </span>
                )}
              </div>
              {isOpen && item.subCategory && (
                <ul className="border-l-[0.8px] -ml-16 mt-3 mb-1 pl-3 space-y-2">
                  {item.subCategory.map((subItem: subCategory) => (
                    <li key={subItem.id}>
                      <a href={subItem.path}>{subItem.title}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SideBar;
