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

type Props = {};

function ProductDetails({}: Props) {
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

  // the product category query was not working because of productdata.category was unavailable while i was quering. so i used skip..
  const { data: relatedProducts } = useGetProductByCategoryQuery(
    productData?.category || "",
    {
      skip: !productData?.category,
    }
  );
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
        ...data?.data,
      });
      setMainThumbail(data.data?.images[0]);
    }

    // console.log("productData: product", productData, data?.data);
  }, [data, isLoading]);

  useEffect(() => {
    if (relatedProducts) {
      // Set related product data
      setRelatedProductData(relatedProducts.data.product);
      console.log("related: product", relatedProductData, relatedProducts.data);
    }
  }, [relatedProducts]);

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
          componentData={relatedProductData}
          isArrow={true}
        />
      </div>
    </div>
  );
}

export default ProductDetails;
