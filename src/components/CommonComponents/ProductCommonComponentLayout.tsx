import { IoMdArrowBack } from "react-icons/io";
import { categoryType, productCardsInfoType } from "../../utils/data";
import ItemsTitleAndSubTitle from "./ItemsTitleAndSubTitle";
import Timer from "./Timer";
import { IoArrowForward } from "react-icons/io5";
import Slider, { Settings } from "react-slick";
import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { cn } from "../../utils/cn";
import ProductSkeleton from "../../helper/ProductSkeleton";
import Button from "./Button";
import { productCardWitClass } from "./ProductCard";

interface BaseLayoutProps {
  title?: string;
  description?: string;
  timeToEndOffer?: string | Date | undefined;
  componentData?: categoryType[] | productCardsInfoType[] | undefined;
  isArrow?: boolean;
  rows?: number;
  buttonTitle?: string;
  buttonBgCss?: string;
  descriptionCss?: string;
  wishList?: string;
  topButtonNavigateTo?: string;
}

interface ProductLayoutProps extends BaseLayoutProps {
  products?: productCardsInfoType[];
  category?: never;
  cards?: React.ComponentType<productCardWitClass>;
}

interface CategoryLayoutProps extends BaseLayoutProps {
  category?: categoryType[];
  products?: never;
  cards?: React.ComponentType<categoryType>;
}

type Props = ProductLayoutProps | CategoryLayoutProps;
function ProductCommonComponentLayout({
  title,
  description,
  timeToEndOffer,
  componentData,
  cards,
  isArrow,
  rows = 1,
  buttonTitle,
  buttonBgCss,
  descriptionCss = "",
  wishList = "",
  topButtonNavigateTo = "",
}: Props) {
  const slideSlickRef = useRef<Slider | null>(null);

  const settings: Settings = {
    dots: componentData && componentData.length >= 5,
    infinite: componentData && componentData.length >= 5,
    speed: 500,
    slidesToShow: componentData?.length ? Math.min(componentData.length, 5) : 1,
    slidesToScroll: componentData?.length
      ? Math.min(componentData.length, 5)
      : 1,
    swipeToSlide: true,
    rows: rows,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          rows: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          rows: 3,
        },
      },
    ],
  };

  const next = (): void => {
    slideSlickRef.current?.slickNext();
  };
  const previous = (): void => {
    slideSlickRef.current?.slickPrev();
  };

  const renderCard = (
    item: productCardsInfoType | categoryType,
    index: number
  ) => {
    if (!cards) return null;
    const Card = cards;
    return (
      <div key={index} className="px-2 sm:px-3">
        <Card {...(item as any)} />
      </div>
    );
  };

  return (
    <div className="container px-4 mx-auto">
      <div className="flex flex-col items-start justify-between gap-4 mb-6 sm:flex-row sm:items-end sm:gap-0">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:gap-6 md:gap-10">
          {(title || description || wishList) && (
            <ItemsTitleAndSubTitle
              title={title}
              description={description}
              descriptionCss={descriptionCss}
              wishList={wishList}
            />
          )}
          {timeToEndOffer && <Timer timeToEndOffer={timeToEndOffer} />}
        </div>
        {componentData && isArrow ? (
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={previous}
              className="flex items-center justify-center w-8 h-8 transition bg-gray-200 rounded-full hover:bg-gray-800 hover:text-white sm:w-10 sm:h-10"
            >
              <IoMdArrowBack className="text-xl" />
            </button>
            <button
              onClick={next}
              className="flex items-center justify-center w-8 h-8 transition bg-gray-200 rounded-full hover:bg-gray-800 hover:text-white sm:w-10 sm:h-10"
            >
              <IoArrowForward className="text-xl" />
            </button>
          </div>
        ) : (
          <Button
            title={buttonTitle || "View All"}
            type="button"
            navigateTo={topButtonNavigateTo}
            BgCss={cn("bg-cs-redDB4444", buttonBgCss)}
          />
        )}
      </div>
      <div className="pt-6">
        <div className="slider-container">
          <Slider ref={slideSlickRef} {...settings}>
            {componentData && componentData.length > 0
              ? componentData.map((item, index) => renderCard(item, index))
              : [...Array(5)].map((_, index) => (
                  <div key={index} className="px-2 sm:px-3">
                    <ProductSkeleton />
                  </div>
                ))}
          </Slider>
        </div>
      </div>
      {isArrow && (
        <div className="flex justify-center mt-10">
          <NavLink
            to="/products"
            className="px-6 py-3 text-white transition bg-red-600 rounded hover:bg-red-700"
          >
            View All Products
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default ProductCommonComponentLayout;
