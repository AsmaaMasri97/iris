import rating from "../../../assets/icons/rating.svg";
import housam from "../../../assets/icons/hosam.svg";
import time from "../../../assets/icons/time.svg";
import play from "../../../assets/icons/play.svg";
import erd from "../../../assets/icons/erd.svg";
import male from "../../../assets/icons/male.svg";
import top from "../../../assets/images/top.jpg";
import ReactStars from "react-rating-stars-component";
import "./course.css";
function Course() {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div className="course">
      <img src={top} className="course_img" />
      <div className="course_container">
        <p className="course_container_title">
          English language <br /> course
        </p>
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={24}
          value={4}
          activeColor="#ffd700"
        />

        <div>
          <img src={housam} style={{ height: "30px", width: "30px" }} />
          <p className="course_container_name">Housam</p>
        </div>
        <div className="course_container_line" />
        <div className="course_container_detailes">
          <div>
            <img src={time} />
            <span>6 hours</span>
          </div>
          <div>
            <img src={play} />
            <span>12 Lessons</span>
          </div>
          <div>
            <img src={erd} />
            <span>Beginner</span>
          </div>
          <div>
            <img src={male} />
            <span>Male</span>
          </div>
        </div>
        <div className="course_container_line" />
        <div>
          <div>
            <button className="course_container_reservation_button">
              Reservation
            </button>
          </div>
          <div className="course_container_div_price">
            <p className="course_container_price">5000 SAR</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Course;
