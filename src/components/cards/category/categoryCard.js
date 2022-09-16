import sort from "../../../assets/icons/sort.svg";
import "./categoryCard.css";
function CategoryCard() {
  return (
    <div className="category">
      <img src={sort} />
      <p>
        English <br /> Language
      </p>
    </div>
  );
}
export default CategoryCard;
