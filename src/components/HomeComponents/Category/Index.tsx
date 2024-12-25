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
          cards={CategoryCard}
          componentData={categoryData}
          isArrow={true}
        />
      </div>
    </div>
  );
}

export default Category;
