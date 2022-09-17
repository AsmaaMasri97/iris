import Category from "../../components/cards/category/category";
import Slider from "../../components/slider/slider";
import "./home.css";
function Home() {
  return (
    <>
      <div className="home">
        <div className="home_category_section">
          <h1>Categories</h1>
          <div className="home_category_container">
            {Array(...Array(8)).map((_, i) => (
              <Category />
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
