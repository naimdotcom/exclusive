import { IoMdArrowBack } from "react-icons/io";
import { categoryType, productCardsInfoType } from "../../utils/data";
import ItemsTitleAndSubTitle from "./ItemsTitleAndSubTitle";
import Timer from "./Timer";
import { IoArrowForward } from "react-icons/io5";
import Slider from "react-slick";
import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { cn } from "../../utils/cn";
import ProductSkeleton from "../../helper/ProductSkeleton";

// Consider separating the shared props into a base interface
interface BaseLayoutProps {
  title?: string;
  description?: string;
  timeToEndOffer?: string | Date | undefined;
  componentData?: categoryType[] | productCardsInfoType[] | undefined;
}

// Then extend it for specific use cases
interface ProductLayoutProps extends BaseLayoutProps {
  products?: productCardsInfoType[];
  category?: never;
  cards?: React.ComponentType<productCardsInfoType>;
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
}: Props) {
  const slideSlickRef = useRef<Slider | null>(null);
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    swipeToSlide: true,
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
      <div key={index}>
        <Card {...(item as any)} />
      </div>
    );
  };

  return (
    <div>
      {/* Heading */}
      <div className="flex items-center justify-between">
        <div className="flex items-end gap-32 ">
          {title && description && (
            <ItemsTitleAndSubTitle title={title} description={description} />
          )}
          {timeToEndOffer && <Timer timeToEndOffer={timeToEndOffer} />}
        </div>

        {/* Arrows */}
        {componentData
          ? componentData?.length > 5 && (
              <div className="flex items-center gap-3">
                <h1
                  //   onClick={next}
                  className="cursor-pointer w-[46px] h-[46px] bg-white_F5F5F5 rounded-full flex items-center justify-center hover:bg-black_363738 hover:text-white_FFFFFF transition"
                  onClick={previous}
                >
                  <span className="text-xl">
                    <IoMdArrowBack />
                  </span>
                </h1>
                <h1
                  //   onClick={prev}
                  className="cursor-pointer w-[46px] h-[46px] bg-white_F5F5F5 rounded-full flex items-center justify-center hover:bg-black_363738 hover:text-white_FFFFFF transition"
                  onClick={next}
                >
                  <span className="text-xl">
                    <IoArrowForward />
                  </span>
                </h1>
              </div>
            )
          : ""}
        {/* Arrows End */}
      </div>
      {/* Heading ENd */}
      <div className="pt-12">
        <div className="slider-container">
          <Slider ref={slideSlickRef} {...settings} className="">
            {componentData
              ? componentData.map((item, index) => renderCard(item, index))
              : Array(5)
                  .fill(null)
                  .map((_, index) => (
                    <div key={index}>
                      <ProductSkeleton />
                    </div>
                  ))}
          </Slider>
        </div>
      </div>

      <div className="flex items-center justify-center w-full mt-16">
        <NavLink
          to={"/products"}
          className={cn(
            "px-12 py-4 bg-cs-redDB4444 rounded justify-center items-center "
          )}
        >
          <span
            className={cn(
              "text-[#f9f9f9] text-base font-medium font-poppins leading-normal"
            )}
          >
            View All Products
          </span>
        </NavLink>
      </div>
    </div>
  );
}

export default ProductCommonComponentLayout;
