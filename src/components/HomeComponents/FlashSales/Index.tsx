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
  const { data, isLoading, error } = useGetFlashSalesQuery();
  const time = "2025-04-01T23:59:59";

  useEffect(() => {
    if (data) {
      setProductData(processApiResponse(data));
    }

    if (error) {
      console.error("Error in flash sales:", error);
    }
  }, [data, isLoading]);

  return (
    <div className="pt-24">
      <ProductCommonComponentLayout
        title="Flash Sale"
        description="Today's"
        timeToEndOffer={"2025-06-01T23:59:59"} // ?Set your target date here. (format of time: YYYY-MM-DDTHH:mm:ss)
        products={productData}
        componentData={productData.length > 0 ? productData : []}
        cards={ProductCard}
        isArrow={true}
      />
    </div>
  );
}

export default FlashSales;
