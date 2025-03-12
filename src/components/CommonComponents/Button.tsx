import { useNavigate } from "react-router-dom";
import { cn } from "../../utils/cn";

type Props = {
  title: string;
  BgCss?: string;
  textCss?: string;
  type?: "button" | "submit" | "reset" | undefined;
  navigateTo?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({
  title,
  BgCss,
  textCss,
  type = "button",
  navigateTo = "/products",
  ...props
}: Props) {
  const navigate = useNavigate();
  return (
    <div>
      <button
        type={type}
        className={cn(
          "px-12 py-4 bg-[#00ff66] text-[#f9f9f9]  rounded justify-center items-center gap-2.5 inline-flex",
          BgCss
        )}
        onClick={() => {
          navigate(navigateTo);
        }}
        {...props}
      >
        <div
          className={cn(
            "text-base font-medium font-['Poppins'] leading-normal",
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
