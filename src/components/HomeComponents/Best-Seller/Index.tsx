import ProductCommonComponentLayout from "../../CommonComponents/ProductCommonComponentLayout";
import { useBestSellingQuery } from "../../../Features/AllSlices/Api/productApi";
import ProductCard from "../../CommonComponents/ProductCard";

function BestSeller() {
  const { data, isLoading, error } = useBestSellingQuery();

  console.log(
    "error occur in flash sales while fetching data from api",
    error,
    isLoading
  );

  return (
    <div className=" pt-36">
      <ProductCommonComponentLayout
        title="Best Selling Products"
        description="This Month"
        // products={productCardsInfo}
        componentData={data?.products ? data?.products : []}
        cards={ProductCard}
        isArrow={false}
      />
    </div>
  );
}

export default BestSeller;
