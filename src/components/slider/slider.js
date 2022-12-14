import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper";
import "./slider.css";
import Course from "../cards/course/course";
export default function Slider(props) {
  return (
    <>
      <Swiper
        spaceBetween={8}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        effect={"fade"}
        allowTouchMove={true}
        allowSlideNext={true}
        modules={[EffectFade, Navigation, Pagination]}
      >
        {props.cards.map((card, i) => (
          <SwiperSlide
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
            key={i}
          >
            {props.cards.map((l, i) => (
              <Course />
            ))}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
