import './App.css';
import foodsDB from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';

function App() {
  const [foods, setFoods] = useState(foodsDB);

  return (
    <>
      <h1>Food List</h1>
      <div className="food-list-container">
        {foods.map((elem, idx) => <FoodBox key={idx} food={elem}/>)}
      </div>
    </>
  );
}

export default App;
