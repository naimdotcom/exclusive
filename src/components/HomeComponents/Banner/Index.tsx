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
  const [currentSlide, setcurrentSlide] = useState<number>(0);
  const { data, isLoading, error } = useGetBannerQuery();

  const [categoryData, setCategoryData] = useState<categoryType[] | null>([]);
  const [errorQuery, setErrorQuery] = useState<string | null>();
  const { data: category, isLoading: isLoadingCategory } =
    useGetAllCategoryListQuery();

  useEffect(() => {
    if (category) {
      setCategoryData(category.data);
    }
    if (error) {
      setErrorQuery("Failed to fetch flash sales. Please try again later.");
      console.error("Error in flash sales:", errorQuery);
    }
  }, [category, isLoadingCategory]);

  // css for react slick which will be set in <slider .... >
  let settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    cssEase: "linear",
    autoplay: true,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    appendDots: (dots: ReactNode) => (
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          borderRadius: "10px",
          padding: "10px",
          color: "#000",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i: number) =>
      i == currentSlide ? (
        <div
          style={{
            width: "15px",
            height: "15px",
            borderRadius: "50%",
            background: "#DB4444",
            border: "3px solid #ffff",
            marginRight: "12px",
            cursor: "pointer",
          }}
        ></div>
      ) : (
        <div
          style={{
            width: "15px",
            height: "15px",
            borderRadius: "50%",
            background: "#ffff",
            opacity: "0.5",
            marginRight: "12px",
            cursor: "pointer",
          }}
        ></div>
      ),
    afterChange: function (currentSlide: number) {
      setcurrentSlide(currentSlide);
    },
  };

  useEffect(() => {
    if (!isLoading) {
      setBannerData(data?.data);
    }
  }, [isLoading]);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 mt-10">
        <SideBar data={categoryData ? categoryData : []} classes="col-span-2" />
        <div className={cn("col-span-10 pl-10 flex justify-center")}>
          <div className={cn("w-full ")}>
            <div className="w-full">
              <Slider {...settings}>
                {bannerData.map((item: any) => {
                  return (
                    <div
                      className={cn("w-full flex justify-center items-center")}
                      key={item._id}
                    >
                      <a href="/" className="w-full">
                        <picture>
                          <img
                            src={item?.image ? item.image : bannerImg}
                            alt={bannerImg}
                            className="object-cover w-full h-full"
                          />
                        </picture>
                      </a>
                    </div>
                  );
                })}
              </Slider>
            </div>

            {/* <picture>
              <img src={bannerImg} alt={bannerImg} />
            </picture> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
