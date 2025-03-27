import React, { useEffect, useState } from "react";
import BreadCrumb from "../../components/CommonComponents/BreadCrumb";
import {
  useGetProductByCategoryQuery,
  useGetProductByIdQuery,
} from "../../Features/AllSlices/Api/productApi";
import { useParams } from "react-router-dom";
import ProductCommonComponentLayout from "../../components/CommonComponents/ProductCommonComponentLayout";
import ProductCard from "../../components/CommonComponents/ProductCard";
import ProductDetailsSkeleton from "../../helper/ProductDetailsSkeleton";
import ProductDetailsImages from "../../components/ProductDetailsComponets/ProductDetailsImages";
import ProductDetailsContainer from "../../components/ProductDetailsComponets/ProductDetailsContainer";
import { productCardsInfoType } from "../../utils/data";

function ProductDetails() {
  const [mainThumbail, setMainThumbail] = useState<string>("");
  const [productData, setProductData] = useState<productCardsInfoType>();
  const [relatedProductData, setRelatedProductData] = useState<
    productCardsInfoType[] | []
  >([]);
  const [selectedColor, setSelectedColor] = useState<string>("purple");
  const [selectedSize, setSelectedSize] = useState<string>("M");
  const [count, setCount] = useState<number>(1);
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useGetProductByIdQuery(String(id));

  const { data: relatedProducts } = useGetProductByCategoryQuery(
    productData?.category || "",
    { skip: !productData?.category }
  );

  const handleIncrement = () => setCount((prev) => prev + 1);
  const handleDecrement = () => count > 1 && setCount((prev) => prev - 1);

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(event.target.value);
  };

  const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSize(event.target.value);
  };

  useEffect(() => {
    if (data) {
      setProductData(data.data);
      setMainThumbail(data.data?.images[0]);
    }
  }, [data]);

  useEffect(() => {
    if (relatedProducts) {
      setRelatedProductData(relatedProducts.data.product);
    }
  }, [relatedProducts]);

  return (
    <div className="container px-4 mx-auto mt-16 space-y-10 md:space-y-20">
      {/* Bread crumb */}
      <BreadCrumb />

      {/* Product details */}
      {isLoading ? (
        <ProductDetailsSkeleton />
      ) : (
        <div className="p-2 sm:p-4">
          <div className="max-w-screen-xl mx-auto">
            <div className="grid items-start grid-cols-1 gap-6 lg:grid-cols-5 lg:gap-8">
              <div className="lg:col-span-3">
                <ProductDetailsImages
                  mainThumbail={mainThumbail}
                  setMainThumbail={setMainThumbail}
                  productData={productData}
                />
              </div>

              <div className="lg:col-span-2">
                <ProductDetailsContainer
                  productData={productData}
                  selectedColor={selectedColor}
                  count={count}
                  handleColorChange={handleColorChange}
                  handleDecrement={handleDecrement}
                  handleIncrement={handleIncrement}
                  handleSizeChange={handleSizeChange}
                  selectedSize={selectedSize}
                  // s={setSelectedSize}
                  // setSelectedColor={setSelectedColor}
                  // setCount={setCount}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Related products */}
      <div className="pb-10">
        <ProductCommonComponentLayout
          description="Related Products"
          title={""}
          cards={ProductCard}
          componentData={relatedProductData}
          isArrow={true}
        />
      </div>
    </div>
  );
}

export default ProductDetails;
