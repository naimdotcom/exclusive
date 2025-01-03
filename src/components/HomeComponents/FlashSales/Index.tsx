import { productCardsInfo } from "../../../utils/data";
import ProductCommonComponentLayout from "../../CommonComponents/ProductCommonComponentLayout";
import ProductCard from "../../CommonComponents/ProductCard";
import { useGetAllProductsQuery } from "../../../Features/AllSlices/Api/productApi";

function FlashSales() {
  const { data, isLoading, error } = useGetAllProductsQuery();

  console.log("error occur in flash sales while fetching data from api", error);

  return (
    <div className="pt-36">
      <ProductCommonComponentLayout
        title="Flash Sale"
        description="Today's"
        timeToEndOffer={"2025-02-01T23:59:59"} // ?Set your target date here. (format of time: YYYY-MM-DDTHH:mm:ss)
        products={productCardsInfo}
        componentData={data?.products ? data?.products : []}
        cards={ProductCard}
        isArrow={true}
      />
    </div>
  );
}

export default FlashSales;
