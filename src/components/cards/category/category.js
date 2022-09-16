import sort from "../../../assets/icons/sort.svg";
import "./category.css";
function Category() {
  return (
    <div className="category">
      <img src={sort} />
      <p>
        English <br /> Language
      </p>
    </div>
  );
}
export default Category;
