import { GrNext, GrPrevious } from "react-icons/gr";
import recipes from "./data";
import { useState } from "react";

const App = () => {
  const [selectedDishIndex, setSelectedDishIndex] = useState(0);
  const selectedDish = recipes[selectedDishIndex];

  const handleNextDish = () => {
    setSelectedDishIndex((prevIndex) => (prevIndex + 1) % recipes.length);
  };

  const handlePreviousDish = () => {
    setSelectedDishIndex((prevIndex) =>
      prevIndex === 0 ? recipes.length - 1 : prevIndex - 1
    );
  };

  return (
    <main>
      <header className="header">
        <h1 className="title">Yumtastic</h1>
        <div className="info">
          <p className="numItem">
            <span>{selectedDishIndex + 1}</span>/{recipes.length}
          </p>
          <div className="recipe">
            <h3 className="item-title">{selectedDish.title}</h3>
            <div className="recipe-details">
              <div className="recipe-amount">
                <p className="recipe-title">Amount</p>
                <p className="recipe-amount-value">{selectedDish.amount}</p>
              </div>
              <div className="recipe-ingredients">
                <p className="recipe-title">Ingredients</p>
                <div className="item-ingredients">
                  {selectedDish.ingredients.map((ingredient, i) => (
                    <p className="ingredient" key={i}>
                      {ingredient}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="navigator">
        <div className="navButton prevNav" onClick={handlePreviousDish}>
          <GrPrevious />
        </div>
        <div className="navButton nextNav" onClick={handleNextDish}>
          <GrNext />
        </div>
      </div>
      <div className="dishes">
        <div className="bg"></div>
        <div className="mainDish">
          {recipes.map((item, index) => {
            let position = "hidden";

            if (
              index === selectedDishIndex + 1 ||
              (selectedDishIndex === recipes.length - 1 && index === 0)
            ) {
              position = "nextDish";
            }
            if (index === selectedDishIndex) {
              position = "selectedDish";
            }
            if (
              index === selectedDishIndex - 1 ||
              (selectedDishIndex === 0 && index === recipes.length - 1)
            ) {
              position = "prevDish";
            }

            return (
              <div className={`dish ${position}`} key={index}>
                <img src={item.image} alt={item.title} />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default App;
