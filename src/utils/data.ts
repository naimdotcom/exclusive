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
interface reviewInterface {
  user: string;
  comment: string;
  rating: number;
}
enum Size {
  XS = "XS",
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
  XXL = "XXL",
}
interface productCardsInfoType {
  _id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  size: Size;
  color: string;
  category: string;
  subcategory: string;
  discount: number;
  review: reviewInterface[];
  images: [string];
}

interface categoryType {
  _id: string | number;
  name: string;
  image: string;
  isSelected?: boolean;
  subCategory: subcategoryInterface[];
  products: productCardsInfoType[];
}

interface subcategoryInterface {
  _id: string;
  name: string;
  category: string;
  products: productCardsInfoType;
}

interface flashSaleInterface {
  _id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  size: Size;
  color: string;
  category: string;
  subcategory: string;
  image: [string];
}

type ProductApiResponse = {
  data: productCardsInfoType[];
  status: number;
  message?: string;
};

type SpecialApiResponse = {
  data: {
    product: productCardsInfoType;
    title: string;
  }[];
  status: number;
  message?: string;
};
type ApiResponse = ProductApiResponse | SpecialApiResponse;

export type {
  sideCategory,
  subCategory,
  productCardsInfoType,
  categoryType,
  flashSaleInterface,
  ApiResponse,
  ProductApiResponse,
  SpecialApiResponse,
  subcategoryInterface,
};

// const category: categoryType[] = [
//   {
//     id: uuidv4(),
//     name: "Phones",
//     image: "https://cdn-icons-png.flaticon.com/512/114/114734.png",
//     isSelected: true, // To indicate the currently selected item
//   },
//   {
//     id: uuidv4(),
//     name: "Computers",
//     image: "https://cdn-icons-png.flaticon.com/512/2990/2990890.png",
//   },
//   {
//     id: uuidv4(),
//     name: "SmartWatch",
//     image: "https://cdn-icons-png.flaticon.com/512/114/114734.png",
//   },
//   {
//     id: uuidv4(),
//     name: "Camera",
//     image: "https://cdn-icons-png.flaticon.com/512/114/114734.png",
//     isSelected: true, // To indicate the currently selected item
//   },
//   {
//     id: uuidv4(),
//     name: "HeadPhones",
//     image: "https://cdn-icons-png.flaticon.com/512/114/114734.png",
//   },
//   {
//     id: uuidv4(),
//     name: "Gaming",
//     image: "https://cdn-icons-png.flaticon.com/512/114/114734.png",
//   },
//   {
//     id: uuidv4(),
//     name: "Tablets",
//     image: "https://cdn-icons-png.flaticon.com/512/114/114734.png",
//   },
//   {
//     id: uuidv4(),
//     name: "Accessories",
//     image: "https://cdn-icons-png.flaticon.com/512/114/114734.png",
//   },
//   {
//     id: uuidv4(),
//     name: "Wearables",
//     image: "https://cdn-icons-png.flaticon.com/512/114/114734.png",
//   },
//   {
//     id: uuidv4(),
//     name: "Home Appliances",
//     image: "https://cdn-icons-png.flaticon.com/512/2990/2990890.png",
//   },
//   {
//     id: uuidv4(),
//     name: "Drones",
//     image: "https://cdn-icons-png.flaticon.com/512/114/114734.png",
//   },
//   {
//     id: uuidv4(),
//     name: "Audio Systems",
//     image: "https://cdn-icons-png.flaticon.com/512/2990/2990890.png",
//   },
//   {
//     id: uuidv4(),
//     name: "Virtual Reality",
//     image: "https://cdn-icons-png.flaticon.com/512/2990/2990890.png",
//   },
//   {
//     id: uuidv4(),
//     name: "Printers",
//     image: "https://cdn-icons-png.flaticon.com/512/2990/2990890.png",
//   },
//   {
//     id: uuidv4(),
//     name: "Monitors",
//     image: "https://cdn-icons-png.flaticon.com/512/2990/2990890.png",
//   },
// ];

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

// const productCardsInfo: productCardsInfoType[] = [
//   {
//     id: uuidv4(),
//     title: "HAVIT HV-G92 Gamepad",
//     price: 160,
//     discountPercentage: 120,
//     rating: 4.5,
//     reviews: [],
//     thumbnail: productImg1, // Replace with actual image path
//   },
//   {
//     id: uuidv4(),
//     title: "AK-900 Wired Keyboard",
//     originalPrice: 1160,
//     discountedPrice: 960,
//     discount: 35,
//     rating: 4.0,
//     reviews: 75,
//     image: productImg2,
//   },
//   {
//     id: uuidv4(),
//     name: "IPS LCD Gaming Monitor",
//     originalPrice: 400,
//     discountedPrice: 370,
//     discount: 30,
//     rating: 4.5,
//     reviews: 99,
//     image: productImg3, // Replace with actual image path
//   },
//   {
//     id: uuidv4(),
//     name: "S-Series Comfort Chair",
//     originalPrice: 400,
//     discountedPrice: 375,
//     discount: 25,
//     rating: 4.0,
//     reviews: 99,
//     image: productImg4, // Replace with actual image path
//   },
//   {
//     id: uuidv4(),
//     name: "The north coat",
//     originalPrice: 360,
//     discountedPrice: 260,
//     discount: 28, // Calculated as (360 - 260) / 360 * 100
//     rating: 4.5,
//     reviews: 65,
//     image: productImg5, // Placeholder image path
//   },
//   {
//     id: uuidv4(),
//     name: "Gucci duffle bag",
//     originalPrice: 1160,
//     discountedPrice: 960,
//     discount: 17, // Calculated as (1160 - 960) / 1160 * 100
//     rating: 4.5,
//     reviews: 65,
//     image: productImg6, // Placeholder image path
//   },
//   {
//     id: uuidv4(),
//     name: "RGB liquid CPU Cooler",
//     originalPrice: 170,
//     discountedPrice: 160,
//     discount: 6, // Calculated as (170 - 160) / 170 * 100
//     rating: 4.5,
//     reviews: 65,
//     image: productImg7, // Placeholder image path
//   },
//   {
//     id: uuidv4(),
//     name: "Small BookShelf",
//     originalPrice: 360,
//     discountedPrice: 360,
//     discount: 0,
//     rating: 4.5,
//     reviews: 65,
//     image: productImg8, // Placeholder image path
//   },
// ];

export { navigationBar, sideCategories };
