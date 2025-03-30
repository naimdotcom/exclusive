import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home/Index";
import NavOutletFooter from "./components/RootLayouts/Nav&Footer/Index";
import Error from "./Pages/Error/Index";
import ProductPage from "./Pages/Products/Index";
import ProductDetails from "./Pages/ProductDetails/Index";
import Login from "./Pages/Auth/Login/Index";
import WishList from "./Pages/WishList/Index";
import AddToCart from "./Pages/AddToCart/Index";
import SignupPage from "./Pages/Auth/signup/Index";
import Otp from "./Pages/Auth/otp/Otp";
import Account from "./Pages/Auth/Account/Index";
import Checkout from "./Pages/Checkout/Index";
import PaymentSuccess from "./Pages/payment/success/Index";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<NavOutletFooter />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/product/" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignupPage />} />
          <Route path="/otp/:email" element={<Otp />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/cart" element={<AddToCart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/account" element={<Account />} />
          <Route path="/payment/success" element={<PaymentSuccess />} />
          <Route path="/*" element={<Error />} />
        </Route>
      </>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
