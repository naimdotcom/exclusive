import Banner from "../../components/HomeComponents/Banner/Index";
import FlashSales from "../../components/HomeComponents/FlashSales/Index";
import Category from "../../components/HomeComponents/Category/Index";
import BestSeller from "../../components/HomeComponents/Best-Seller/Index";
import Exprience from "../../components/HomeComponents/Exprience/Index";
import ExploreProducts from "../../components/HomeComponents/ExploreProducts/Index";
import NewArrival from "../../components/HomeComponents/NewArrival/Index";
import Services from "../../components/HomeComponents/Services/Index";
function Home() {
  return (
    <div className="container ">
      <Banner />
      <FlashSales />
      <Category />
      {/*<BestSeller />
      <Exprience />
      <ExploreProducts />
      <NewArrival />
      <Services /> */}
    </div>
  );
}

export default Home;
