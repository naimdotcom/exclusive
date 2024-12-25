import { productCardsInfo } from "../../../utils/data";
import ProductCommonComponentLayout from "../../CommonComponents/ProductCommonComponentLayout";
import ProductCard from "../../CommonComponents/ProductCard";
import { useGetAllProductsQuery } from "../../../Features/AllSlices/Api/productApi";

function FlashSales() {
  const { data, isLoading, error } = useGetAllProductsQuery();

  console.log("====================================");
  console.log(data, isLoading, error);
  console.log("====================================");

  if (isLoading || error) return <h1>Loading...</h1>;

  return (
    <div className="container pt-36">
      <ProductCommonComponentLayout
        title="Flash Sale"
        description="Today's"
        timeToEndOffer={"2024-11-31T23:59:59"} // ?Set your target date here. (format of time: YYYY-MM-DDTHH:mm:ss)
        products={productCardsInfo}
        componentData={data?.products ? data?.products : []}
        cards={ProductCard}
      />
    </div>
  );
}

export default FlashSales;
