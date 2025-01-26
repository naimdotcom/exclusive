import { useState } from "react";
import { cn } from "../../utils/cn";
import { categoryType } from "../../utils/data";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function SideBar({ data, classes }: { data: categoryType[]; classes: string }) {
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
        {data.map((item) => {
          const isOpen = openCategories[item._id] || false;
          return (
            <li
              className={cn("flex flex-col items-center justify-between")}
              key={item._id}
            >
              <div className="flex items-center justify-between w-full">
                <a href={item.name}>
                  <h2>{item.name}</h2>
                </a>
                {item.subCategory.length > 0 && (
                  <span onClick={() => toggleCategory(item._id)}>
                    <MdOutlineKeyboardArrowRight className={cn("text-xl ")} />
                  </span>
                )}
              </div>
              {isOpen && item.subCategory && (
                <ul className="border-l-[0.8px] -ml-16 mt-3 mb-1 pl-3 space-y-2">
                  {item.subCategory.map((subItem) => (
                    <li key={subItem._id}>
                      <a href={subItem.name}>{subItem.name}</a>
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
