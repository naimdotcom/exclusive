import { productCardsInfo } from "../../../utils/data";
import ProductCommonComponentLayout from "../../CommonComponents/ProductCommonComponentLayout";

function FlashSales() {
  return (
    <div className="container pt-36">
      <ProductCommonComponentLayout
        title="Flash Sale"
        description="Today's"
        timeToEndOffer={"2024-11-31T23:59:59"}
        products={productCardsInfo}
      />
    </div>
  );
}

export default FlashSales;
