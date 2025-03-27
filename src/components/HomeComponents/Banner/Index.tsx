import { bannerImg } from "../../../utils/assets";
import { cn } from "../../../utils/cn";
import SideBar from "../../CommonComponents/SideBar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReactNode, useEffect, useState } from "react";
import {
  useGetAllCategoryListQuery,
  useGetBannerQuery,
} from "../../../Features/AllSlices/Api/productApi";
import { categoryType } from "../../../utils/data";

function Banner() {
  const [bannerData, setBannerData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const { data, isLoading } = useGetBannerQuery();
  const { data: category } = useGetAllCategoryListQuery();
  const [categoryData, setCategoryData] = useState<categoryType[] | null>([]);

  useEffect(() => {
    if (category) {
      setCategoryData(category.data);
    }
  }, [category]);

  useEffect(() => {
    if (!isLoading) {
      setBannerData(data?.data || [{ image: bannerImg }]);
    }
  }, [isLoading]);

  let settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    cssEase: "linear",
    autoplay: true,
    appendDots: (dots: ReactNode) => (
      <div className="absolute transform -translate-x-1/2 bottom-5 left-1/2">
        <ul> {dots} </ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div
        className={cn(
          "w-4 h-4 rounded-full cursor-pointer border-2",
          i === currentSlide ? "bg-red-500 border-white" : "bg-white opacity-50"
        )}
      ></div>
    ),
    afterChange: setCurrentSlide,
  };

  return (
    <div className="container px-4 mx-auto sm:px-2">
      <div className="grid grid-cols-1 gap-4 mt-10 lg:grid-cols-12">
        {/* Sidebar - Hidden on small screens */}
        <div className="hidden lg:block lg:col-span-2">
          <SideBar data={categoryData || []} />
        </div>

        {/* Banner Section */}
        <div className="flex justify-center col-span-1 lg:col-span-10">
          <div className="w-full aspect-video">
            <Slider {...settings}>
              {bannerData.map((item: any) => (
                <div
                  className="flex items-center justify-center w-full"
                  key={item._id}
                >
                  <a href="/" className="w-full">
                    <picture>
                      <img
                        src={item?.image || bannerImg}
                        alt="Banner"
                        className="object-cover w-full h-auto aspect-video"
                      />
                    </picture>
                  </a>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
