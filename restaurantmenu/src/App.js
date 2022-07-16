import { useState } from "react";
import "./App.css";
import Categories from "./Categories";
import Foods from "./Foods";
import menu from "./menu";

function App() {
  const menuItems = ["all", ...new Set(menu.map((item) => item.category))];
  const [foodList, setFoodList] = useState(menu);

  const filterMenu = (category) => {
    if (category === "all") {
      setFoodList(menu);
    } else {
      const newList = menu.filter((i) => i.category === category);
      setFoodList(newList);
    }
  };
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Foods</h2>
        </div>
        <Categories categories={menuItems} filterMenu={filterMenu} />
        <Foods foodList={foodList} />
      </section>
    </main>
  );
}

export default App;
