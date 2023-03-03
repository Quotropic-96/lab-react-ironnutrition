import './App.css';
import foodsDB from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [foods, setFoods] = useState(foodsDB);
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(prev => !prev);
  }

  const handleAddFood = (newFood) => {
    setFoods([...foods, newFood]);
    setShowForm(false);
  }

  return (
    <>
      <h1>Food List</h1>
      <button onClick={handleShowForm}>{showForm ? 'Hide' : 'Add food'}</button>
      {showForm && <AddFoodForm handleAddFood={handleAddFood}/>}
      <div className="food-list-container">
        {foods.map((elem, idx) => <FoodBox key={idx} food={elem}/>)}
      </div>
    </>
  );
}

export default App;
