import React from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";

function ProductDetailsImages({
  productData,
  mainThumbail,
  setMainThumbail,
}: {
  productData: any;
  mainThumbail: string;
  setMainThumbail: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="flex flex-col-reverse gap-4 sm:flex-row">
      {/* Thumbnail images */}
      <div className="flex flex-row w-16 gap-2 sm:w-16 sm:flex-col">
        {productData?.images?.map((img: string, index: number) => (
          <button
            key={index}
            onClick={() => setMainThumbail(img)}
            className={`w-full aspect-square rounded border-2 transition-all ${
              mainThumbail === img
                ? "border-cs-redDB4444"
                : "border-transparent hover:border-gray-300"
            }`}
          >
            <img
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className="object-cover w-full h-full rounded bg-cs-white_F5F5F5"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1">
        {productData && (
          <InnerImageZoom
            src={mainThumbail || productData.thumbnail}
            zoomSrc={mainThumbail || productData.thumbnail}
            hasSpacer={true}
            className="w-full bg-cs-white_F5F5F5 rounded-md aspect-[3/4] object-contain"
            zoomType="hover"
            zoomPreload={true}
          />
        )}
      </div>
    </div>
  );
}

export default ProductDetailsImages;
