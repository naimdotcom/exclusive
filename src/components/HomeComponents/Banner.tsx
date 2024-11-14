import { bannerImg } from "../../utils/assets";
import { cn } from "../../utils/cn";
import SideBar from "./SideBar";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReactNode, useState } from "react";

function Banner() {
  const [currentSlide, setcurrentSlide] = useState<number>(0);
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i: number) =>
      i == currentSlide ? (
        <div
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            background: "#DB4444",
            border: "3px solid #ffff",
            marginRight: "12px",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></div>
      ) : (
        <div
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            background: "#ffff",
            opacity: "0.5",
            marginRight: "12px",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></div>
      ),
    afterChange: function (currentSlide: number) {
      setcurrentSlide(currentSlide);
    },
  };
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 mt-10">
        <SideBar classes="col-span-2" />
        <div className={cn("col-span-10 pl-10 flex justify-center")}>
          <div className={cn("w-full ")}>
            <div className="w-full">
              <Slider {...settings} className="w-full mx-auto">
                {[...new Array(5)].map((item: number, i: number) => {
                  return (
                    <div
                      className={cn("w-full  flex justify-center items-center")}
                      key={i}
                    >
                      <a href="">
                        <picture>
                          <img
                            src={bannerImg}
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
