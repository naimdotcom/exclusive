import React from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
type Props = {
  productData: any;
  mainThumbail: string | undefined;
  setMainThumbail: React.Dispatch<React.SetStateAction<string>>;
};

function ProductDetailsImages({
  productData,
  mainThumbail,
  setMainThumbail,
}: Props) {
  return (
    <div>
      {/* Images */}
      <div className="w-full lg:col-span-3">
        <div className="flex flex-row gap-2">
          <div className="flex flex-col w-16 gap-2 max-sm:w-10 shrink-0">
            {
              // Product images
              productData?.images?.map((img: string, index: number) => (
                <img
                  key={index}
                  src={img}
                  alt={`Product thumbnail ${index}`}
                  className="w-full border-black rounded cursor-pointer bg-cs-white_F5F5F5 aspect-square"
                  onClick={() => setMainThumbail(img)}
                />
              ))
            }
          </div>
          <div className="flex-1 w-full">
            {
              // Main product image
              productData && (
                <InnerImageZoom
                  src={mainThumbail ? mainThumbail : productData.thumbnail}
                  zoomSrc={mainThumbail ? mainThumbail : productData.thumbnail}
                  hasSpacer={true}
                  width={
                    mainThumbail == productData.thumbnail ? 650 : undefined
                  }
                  height={
                    mainThumbail == productData.thumbnail ? 800 : undefined
                  }
                  className="w-full bg-cs-white_F5F5F5 rounded-md aspect-[750/800] object-contain"
                />
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsImages;
