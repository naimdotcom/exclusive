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

type Props = {};

function ProductDetails({}: Props) {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useGetProductByIdQuery(Number(id));
  const { data: relatedProducts } = useGetProductByCategoryQuery(
    data?.category
  );

  const [mainThumbail, setMainThumbail] = useState<string>("");
  const [productData, setProductData] = useState<any>({});
  const [selectedColor, setSelectedColor] = useState<string>("purple");
  const [selectedSize, setSelectedSize] = useState<string>("M");
  const [count, setCount] = useState<number>(1);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(event.target.value);
  };
  const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSize(event.target.value);
  };

  useEffect(() => {
    if (data) {
      setProductData({
        ...data,
        images: [
          ...data?.images,
          data?.thumbnail,
          "https://readymadeui.com/images/product6.webp",
        ],
      });
      setMainThumbail(data?.thumbnail);
    }
  }, [data]);

  return (
    <div className="container mt-16 space-y-20">
      {/* Bread crumb */}
      <div>
        <BreadCrumb />
      </div>
      {/* Bread crumb */}

      {/* Product details */}
      {isLoading ? (
        <div>
          <ProductDetailsSkeleton />
        </div>
      ) : (
        <div>
          <div className="p-4 ">
            <div className="max-w-xl mx-auto xl:max-w-screen-xl lg:max-w-screen-lg">
              <div className="grid items-start grid-cols-1 gap-8 lg:grid-cols-5 ">
                <div className="w-full lg:col-span-3">
                  <ProductDetailsImages
                    mainThumbail={mainThumbail}
                    setMainThumbail={setMainThumbail}
                    productData={productData}
                  />
                </div>

                <div className="w-full lg:col-span-2">
                  <ProductDetailsContainer
                    productData={productData}
                    selectedColor={selectedColor}
                    count={count}
                    handleColorChange={handleColorChange}
                    handleDecrement={handleDecrement}
                    handleIncrement={handleIncrement}
                    handleSizeChange={handleSizeChange}
                    selectedSize={selectedSize}
                    setSelectedSize={setSelectedSize}
                    setSelectedColor={setSelectedColor}
                    setCount={setCount}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* product details */}

      <div>
        <ProductCommonComponentLayout
          description="Related Products"
          title={""}
          cards={ProductCard}
          componentData={relatedProducts?.products}
          isArrow={true}
        />
      </div>
    </div>
  );
}

export default ProductDetails;
