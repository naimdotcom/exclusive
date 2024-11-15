import { IoMdArrowBack } from "react-icons/io";
import { productCardsInfoType } from "../../utils/data";
import ItemsTitleAndSubTitle from "./ItemsTitleAndSubTitle";
import Timer from "./Timer";
import { IoArrowForward } from "react-icons/io5";
import ProductCard from "./ProductCard";
import Slider from "react-slick";
import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { cn } from "../../utils/cn";

interface Props {
  title?: string;
  description?: string;
  timeToEndOffer?: string | Date;
  products?: productCardsInfoType[];
}

function ProductCommonComponentLayout({
  title,
  description,
  timeToEndOffer,
  products = [],
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

  return (
    <div>
      {/* Heading */}
      <div className="flex items-center justify-between">
        <div className="flex items-end gap-32 ">
          {title && description && (
            <ItemsTitleAndSubTitle title="Flash Sale" description="Today's" />
          )}
          {timeToEndOffer && <Timer timeToEndOffer={timeToEndOffer} />}
        </div>

        {/* Arrows */}
        {products.length > 5 && (
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
        )}
        {/* Arrows End */}
      </div>
      {/* Heading ENd */}
      <div className="pt-12">
        <div className="slider-container">
          <Slider ref={slideSlickRef} {...settings}>
            {products?.map((item) => {
              return <ProductCard key={item.id} {...item} />;
            })}
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
