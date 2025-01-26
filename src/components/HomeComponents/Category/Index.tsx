import { useEffect, useState } from "react";
import { categoryType } from "../../../utils/data";
import ProductCommonComponentLayout from "../../CommonComponents/ProductCommonComponentLayout";
import CategoryCard from "../../CommonComponents/categoryCard";
import { useGetCategoryQuery } from "../../../Features/AllSlices/Api/productApi";
function Category() {
  const [categoryData, setCategoryData] = useState<categoryType[]>([]);
  const { data, isLoading, error } = useGetCategoryQuery();

  useEffect(() => {
    if (data) {
      setCategoryData(data?.data);
    }

    if (error) {
      console.error(
        "Error occurred in flash sales while fetching data from API:",
        error
      );
    }
  }, [data, isLoading]);

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
