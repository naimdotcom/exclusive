import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Index";
import Footer from "../Footer/Index";

function NavOutletFooter() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default NavOutletFooter;
