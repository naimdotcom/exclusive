import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Index";
import Footer from "../Footer/Index";
import { useEffect } from "react";
import { infoToast } from "../../../utils/toast";

function NavOutletFooter() {
  useEffect(() => {
    infoToast("Please wait a minute to load all products");
  }, []);
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default NavOutletFooter;
