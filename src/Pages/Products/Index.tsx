import { useEffect, useState } from "react";
import BreadCrumb from "../../components/CommonComponents/BreadCrumb";
import ProductCategories from "../../components/ProductPageComponent/ProductCategories";
import ProductsShowCase from "../../components/ProductPageComponent/ProductsShowCase";
import { useGetAllCategoryListQuery } from "../../Features/AllSlices/Api/productApi";
import { categoryType } from "../../utils/data";

function ProductPage() {
  const [categoryData, setCategoryData] = useState<categoryType[] | null>([]);
  const [errorQuery, setErrorQuery] = useState<string | null>();
  const { data, isLoading, error } = useGetAllCategoryListQuery();

  useEffect(() => {
    if (data) {
      setCategoryData(data.data);
    }
    if (error) {
      setErrorQuery("Failed to fetch flash sales. Please try again later.");
      console.error("Error in flash sales:", errorQuery);
    }
  }, [data, isLoading]);

  return (
    <div className="container mt-16">
      <BreadCrumb />
      <div className="flex mt-6">
        <ProductCategories
          data={categoryData ? categoryData : []}
          isLoading={isLoading}
          error={error}
        />
        <ProductsShowCase />
      </div>
    </div>
  );
}

export default ProductPage;
