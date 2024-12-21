import { cn } from "../../utils/cn";
import { categoryType } from "../../utils/data";

const CategoryCard = ({ name, image, isSelected }: categoryType) => {
  return (
    <div className="mx-2 mt-2">
      <div
        className={cn(
          "w-full cursor-pointer text-cs-text_black000000 transition hover:bg-cs-redDB4444 hover:text-cs-white_FFFFFF h-[145px] bg-transparent rounded border-[1px] border-cs-text_black7D8184 flex items-center justify-center duration-300",
          {
            "border-cs-redDB4444": isSelected,
          }
        )}
      >
        <div className="flex flex-col items-center gap-y-3">
          {/* <span className="text-[30px]">{image}</span> */}
          <picture className="w-10">
            <img src={image} alt="" />
          </picture>
          <h1 className="text-lg font-normal font-popins">{name}</h1>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
