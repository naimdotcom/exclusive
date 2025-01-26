import { useGetAllProductsQuery } from "../../../Features/AllSlices/Api/productApi";
import ProductCommonComponentLayout from "../../CommonComponents/ProductCommonComponentLayout";
import { productCardsInfo, productCardsInfoType } from "../../../utils/data";
import ProductCard from "../../CommonComponents/ProductCard";
import { useEffect, useState } from "react";
import { processApiResponse } from "../../../hooks/IsSpecialRoute";

function ExploreProducts() {
  const [productData, setProductData] = useState<productCardsInfoType[] | []>(
    []
  );
  const [errorQuery, setErrorQuery] = useState<string | null>(null);
  const { data, isLoading, error } = useGetAllProductsQuery();
  useEffect(() => {
    console.log("explore product", productData);

    if (data) {
      setProductData(processApiResponse(data));
    }

    if (error) {
      setErrorQuery("Failed to fetch flash sales. Please try again later.");
      console.error("Error in flash sales:", errorQuery);
    }
  }, [data, isLoading]);

  return (
    <div className="pt-36">
      <ProductCommonComponentLayout
        title="Explore Our Products"
        description="Our Products"
        products={productCardsInfo}
        componentData={productData ? productData : []}
        cards={ProductCard}
        isArrow={true}
        rows={2}
      />
    </div>
  );
}

export default ExploreProducts;
