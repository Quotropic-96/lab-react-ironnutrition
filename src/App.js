import './App.css';
import foodsDB from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foods, setFoods] = useState(foodsDB);
  const [showForm, setShowForm] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleShowForm = () => {
    setShowForm(prev => !prev);
  }

  const handleAddFood = (newFood) => {
    setFoods([...foods, newFood]);
    setShowForm(false);
  }

  const handleSearchFilter = (value) => {
    setSearchValue(value);
  }

  const filterFoods = (value) => {
    return foods.filter(elem => elem.name.toLowerCase().includes(searchValue.toLowerCase()))
  }
  
  const handleDelete = (deleteName) => {
    const filteredFoods = foods.filter(elem => elem.name !== deleteName);
    setFoods(filteredFoods);
  }
  return (
    <>
      <h1>Food List</h1>
      <Search handleSearchFilter={handleSearchFilter} />
      <button onClick={handleShowForm}>{showForm ? 'Hide' : 'Add food'}</button>
      {showForm && <AddFoodForm handleAddFood={handleAddFood}/>}
      <div className="food-list-container">
        {filterFoods(searchValue).map((elem, idx) => <FoodBox key={idx} food={elem} handleDelete={handleDelete}/>)}
        {filterFoods(searchValue).length === 0 && 'Oooops nothing to show'}
      </div>
    </>
  );
}

export default App;
