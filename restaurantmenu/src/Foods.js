import "./foods.css";
import Food from "./Food";

function Foods({ foodList }) {
  return (
    <article className="foods">
      {foodList.map((foodf) => (
        <Food key={foodf.id} {...foodf} foodList={foodList} />
      ))}
    </article>
  );
}

export default Foods;
