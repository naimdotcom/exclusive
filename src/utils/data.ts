import { v4 as uuidv4 } from "uuid";

type Navigation = {
  id: string;
  title: string;
  path: string;
};

const navigationBar: Navigation[] = [
  {
    id: uuidv4(),
    title: "Home",
    path: "/",
  },
  {
    id: uuidv4(),
    title: "Contact",
    path: "/contact",
  },
  {
    id: uuidv4(),
    title: "About",
    path: "/about",
  },
  {
    id: uuidv4(),
    title: "Sign up",
    path: "/sign-up",
  },
];

export { navigationBar };
