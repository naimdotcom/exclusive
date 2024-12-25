import { useGetAllProductsQuery } from "../../../Features/AllSlices/Api/productApi";
import ProductCommonComponentLayout from "../../CommonComponents/ProductCommonComponentLayout";
import { productCardsInfo } from "../../../utils/data";
import ProductCard from "../../CommonComponents/ProductCard";

function ExploreProducts() {
  const { data, isLoading, error } = useGetAllProductsQuery();

  console.log("error occur in flash sales while fetching data from api", error);

  return (
    <div className="pt-36">
      <ProductCommonComponentLayout
        title="Explore Our Products"
        description="Our Products"
        products={productCardsInfo}
        componentData={data?.products ? data?.products : []}
        cards={ProductCard}
        isArrow={true}
        rows={2}
      />
    </div>
  );
}

export default ExploreProducts;
