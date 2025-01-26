import { productCardsInfoType } from "../../../utils/data";
import ProductCommonComponentLayout from "../../CommonComponents/ProductCommonComponentLayout";
import ProductCard from "../../CommonComponents/ProductCard";
import { useGetFlashSalesQuery } from "../../../Features/AllSlices/Api/productApi";

import { useEffect, useState } from "react";

function FlashSales() {
  const [productData, setProductData] = useState<productCardsInfoType[] | []>(
    []
  );
  const { data, isLoading, error } = useGetFlashSalesQuery();

  useEffect(() => {
    if (data) {
      setProductData(data.data); // TypeScript now knows `data` has the expected structure
    }

    if (error) {
      console.error(
        "Error occurred in flash sales while fetching data from API:",
        error
      );
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
