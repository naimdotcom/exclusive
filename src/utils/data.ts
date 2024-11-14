import { v4 as uuidv4 } from "uuid";

type Navigation = {
  id: string;
  title: string;
  path: string;
};

type subCategory = {
  id: string | number;
  title: string;
  path: string;
};

type sideCategory = {
  id: string | number;
  title: string;
  path: string;
  subCategory: subCategory[];
};

export type { sideCategory, subCategory };

const sideCategories: sideCategory[] = [
  {
    id: "1",
    title: "Woman's Fashion",
    path: "/womens-fashion",
    subCategory: [
      { id: "1-1", title: "Dresses", path: "/womens-fashion/dresses" },
      { id: "1-2", title: "Shoes", path: "/womens-fashion/shoes" },
      { id: "1-3", title: "Accessories", path: "/womens-fashion/accessories" },
    ],
  },
  {
    id: "2",
    title: "Men's Fashion",
    path: "/mens-fashion",
    subCategory: [
      { id: "2-1", title: "Shirts", path: "/mens-fashion/shirts" },
      { id: "2-2", title: "Shoes", path: "/mens-fashion/shoes" },
      { id: "2-3", title: "Accessories", path: "/mens-fashion/accessories" },
    ],
  },
  {
    id: "3",
    title: "Electronics",
    path: "/electronics",
    subCategory: [],
  },
  {
    id: "4",
    title: "Home & Lifestyle",
    path: "/home-lifestyle",
    subCategory: [
      { id: "4-1", title: "Furniture", path: "/home-lifestyle/furniture" },
      { id: "4-2", title: "Kitchen", path: "/home-lifestyle/kitchen" },
      { id: "4-3", title: "Decor", path: "/home-lifestyle/decor" },
    ],
  },
  {
    id: "5",
    title: "Medicine",
    path: "/medicine",
    subCategory: [],
  },
  {
    id: "6",
    title: "Sports & Outdoor",
    path: "/sports-outdoor",
    subCategory: [
      { id: "6-1", title: "Fitness", path: "/sports-outdoor/fitness" },
      { id: "6-2", title: "Outdoor Gear", path: "/sports-outdoor/gear" },
    ],
  },
  {
    id: "7",
    title: "Baby's & Toys",
    path: "/babys-toys",
    subCategory: [
      { id: "7-1", title: "Toys", path: "/babys-toys/toys" },
      { id: "7-2", title: "Baby Clothes", path: "/babys-toys/clothes" },
    ],
  },
  {
    id: "8",
    title: "Groceries & Pets",
    path: "/groceries-pets",
    subCategory: [],
  },
  {
    id: "9",
    title: "Health & Beauty",
    path: "/health-beauty",
    subCategory: [],
  },
];

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

export { navigationBar, sideCategories };
