import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  // for tailwind css className,
  return twMerge(clsx(inputs));
};
