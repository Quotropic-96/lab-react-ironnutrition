import './App.css';
import foodsDB from './foods.json';
import { useState } from 'react';

function App() {
  const [foods, setFoods] = useState(foodsDB);

  return (
    <div className="food-list-container">
      <h1>Food List</h1>
      <div className="food-list">
        {foods.map((elem, idx) => 
          <div className="food-card" key={idx}>
            <h3>{elem.name}</h3>
            <img src={elem.image} alt={elem.name} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
