import { cn } from "../../utils/cn";

function Button({
  title,
  BgCss,
  textCss,
  type = "button",
}: {
  title: string;
  BgCss?: string;
  textCss?: string;
  type?: "button" | "submit" | "reset" | undefined;
}) {
  return (
    <div>
      <button
        type={type}
        className={cn(
          "px-12 py-4 bg-[#00ff66] rounded justify-center items-center gap-2.5 inline-flex",
          BgCss
        )}
      >
        <div
          className={cn(
            "text-[#f9f9f9] text-base font-medium font-['Poppins'] leading-normal",
            textCss
          )}
        >
          {title}
        </div>
      </button>
    </div>
  );
}

export default Button;
