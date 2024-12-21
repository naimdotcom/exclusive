import { category as categoryData } from "../../../utils/data";
import ProductCommonComponentLayout from "../../CommonComponents/ProductCommonComponentLayout";

function Category() {
  return (
    <div>
      <div className="container pt-36">
        <ProductCommonComponentLayout
          title="Flash Sale"
          description="Today's"
          timeToEndOffer={"2024-11-31T23:59:59"} // ?Set your target date here. (format of time: YYYY-MM-DDTHH:mm:ss)
          category={categoryData}
        />
      </div>
    </div>
  );
}

export default Category;
