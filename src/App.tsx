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

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<NavOutletFooter />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/product/" element={<ProductPage />} />
          <Route path="/login" element={<Login />} />
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
