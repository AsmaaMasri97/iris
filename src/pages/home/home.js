import CategoryCard from "../../components/cards/category/categoryCard";
import CourseCard from "../../components/cards/course/coursesCard";
import Navbar from "../../navbar/navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper";
import "./home.css";
import Slider from "../../components/slider/slider";
// Import Swiper styles
function Home() {
  return (
    <>
      <div className="home">
        <div className="home_category_section">
          <h1>Categories</h1>
          <div
            style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
          >
            {Array(...Array(8)).map((_, i) => (
              <CategoryCard />
            ))}
          </div>
        </div>

        <div className="home_course_section">
          <h1>Courses</h1>
          <Slider cards={Array(...Array(4))} />
        </div>
      </div>
    </>
  );
}

export default Home;
