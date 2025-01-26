import { productCardsInfoType } from "../../../utils/data";
import ProductCommonComponentLayout from "../../CommonComponents/ProductCommonComponentLayout";
import ProductCard from "../../CommonComponents/ProductCard";
import { useGetFlashSalesQuery } from "../../../Features/AllSlices/Api/productApi";

import { useEffect, useState } from "react";
import { processApiResponse } from "../../../hooks/IsSpecialRoute";

function FlashSales() {
  const [productData, setProductData] = useState<productCardsInfoType[] | []>(
    []
  );
  const [errorQuery, setErrorQuery] = useState<string | null>(null);
  const { data, isLoading, error } = useGetFlashSalesQuery();
  console.log("flash data;", productData);

  useEffect(() => {
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
        title="Flash Sale"
        description="Today's"
        timeToEndOffer={"2025-02-01T23:59:59"} // ?Set your target date here. (format of time: YYYY-MM-DDTHH:mm:ss)
        products={productData}
        componentData={productData.length > 0 ? productData : []}
        cards={ProductCard}
        isArrow={true}
      />
    </div>
  );
}

export default FlashSales;
