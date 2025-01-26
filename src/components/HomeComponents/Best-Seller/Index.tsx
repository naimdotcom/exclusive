import ProductCommonComponentLayout from "../../CommonComponents/ProductCommonComponentLayout";
import { useGetCategoryByIdOrNameQuery } from "../../../Features/AllSlices/Api/productApi";
import ProductCard from "../../CommonComponents/ProductCard";
import { useEffect, useState } from "react";
import { productCardsInfoType } from "../../../utils/data";

function BestSeller() {
  const [productData, setProductData] = useState<productCardsInfoType[]>([]);
  const [errorQuery, setErrorQuery] = useState<string | null>(null);
  const { data, isLoading, error } = useGetCategoryByIdOrNameQuery();
  useEffect(() => {
    if (data) {
      setProductData(data?.data?.product);
    }
    if (error) {
      setErrorQuery("Failed to fetch flash sales. Please try again later.");
      console.error("Error in flash sales:", errorQuery);
    }
  }, [data, isLoading]);

  return (
    <div className=" pt-36">
      <ProductCommonComponentLayout
        title="Best Selling Products"
        description="This Month"
        // products={productCardsInfo}
        componentData={productData.length > 0 ? productData : []}
        cards={ProductCard}
        isArrow={false}
      />
    </div>
  );
}

export default BestSeller;
