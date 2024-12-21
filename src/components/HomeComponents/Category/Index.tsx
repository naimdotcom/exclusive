import { category as categoryData } from "../../../utils/data";
import ProductCommonComponentLayout from "../../CommonComponents/ProductCommonComponentLayout";
import CategoryCard from "../../CommonComponents/categoryCard";
function Category() {
  return (
    <div>
      <div className="container pt-36">
        <ProductCommonComponentLayout
          title="Browse By Category"
          description="Categories"
          timeToEndOffer={"2024-11-31T23:59:59"} // ?Set your target date here. (format of time: YYYY-MM-DDTHH:mm:ss)
          cards={CategoryCard}
          componentData={categoryData}
        />
      </div>
    </div>
  );
}

export default Category;
