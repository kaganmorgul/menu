import React, { useState } from "react";

function Food({ id, text, Image, name, price }) {
  const [foodTextControl, setFoodTextControl] = useState(false);
  const [foodTextClass, setFoodTextClass] = useState("food-text inactive");
  return (
    <div className="food" key={id}>
      <div className="food-image-container">
        <div className={foodTextClass}>
          <button
            type="button"
            className="food-tex-info"
            onClick={() =>
              setFoodTextControl(!foodTextControl)(
                foodTextControl === false
                  ? setFoodTextClass("food-text active")
                  : setFoodTextClass("food-text inactive")
              )
            }
          >
            {foodTextControl ? (
              <i className="fa-solid fa-arrow-down"></i>
            ) : (
              <i className="fa-solid fa-arrow-up"></i>
            )}
          </button>
          <p>{text}</p>
        </div>
        <div className="food-image">
          <img src={Image} alt={name} />
          <div className="img-bg"></div>
        </div>
      </div>
      <div className="food-info">
        <p className="food-name">{name}</p>
        <p className="food-price">{`${price}₺`}</p>
      </div>
    </div>
  );
}

export default Food;
