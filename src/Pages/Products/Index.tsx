import BreadCrumb from "../../components/CommonComponents/BreadCrumb";
import ProductCategories from "../../components/ProductPageComponent/ProductCategories";
import { useGetAllCategoryListQuery } from "../../Features/AllSlices/Api/productApi";

function ProductPage() {
  const { data, isLoading, error } = useGetAllCategoryListQuery();
  return (
    <div className="container mt-16">
      <BreadCrumb />
      <div className="flex mt-6">
        <ProductCategories data={data} isLoading={isLoading} error={error} />
      </div>
    </div>
  );
}

export default ProductPage;
