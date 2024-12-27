import { cn } from "../../utils/cn";

interface Props {
  title?: string;
  description?: string;
}

function ItemsTitleAndSubTitle({ title, description }: Props) {
  return (
    <div className={cn("space-y-6")}>
      <div className={cn("flex items-center gap-4")}>
        <div>
          <div
            style={{
              width: 20,
              height: 40,
              background: "#DB4444",
              borderRadius: 4,
            }}
          />
        </div>
        <h2 className="text-[#db4444] text-base font-semibold font-poppins">
          {description ? description : ""}
        </h2>
      </div>

      <div
        className={cn(
          "text-black text-4xl font-semibold font-inter leading-10 tracking-wider"
        )}
      >
        <h1>{title ? title : ""}</h1>
      </div>
    </div>
  );
}

export default ItemsTitleAndSubTitle;
