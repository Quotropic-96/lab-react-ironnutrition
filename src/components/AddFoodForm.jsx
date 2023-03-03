import { useState } from "react";
import { Input } from 'antd';

function AddFoodForm({ handleAddFood }) {
    const initialFormState = {
        name: '',
        image: '',
        calories: 85,
        servings: 1
    }
    const [newFood, setNewFood] = useState(initialFormState);
    const handleChange = (e) => {
        setNewFood(prev => {
            return {
              ...prev,
              [e.target.name]: e.target.value
            }
          });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddFood(newFood);
        setNewFood(initialFormState);
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <Input value={newFood.name} name="name" type="text" onChange={handleChange} required/>
            <label>Image</label>
            <Input value={newFood.image} name="image" type="text" onChange={handleChange} />
            <label>Calories</label>
            <Input value={newFood.calories} name="calories" type="number" onChange={handleChange} />
            <label>Servings</label>
            <Input value={newFood.servings} name="servings" type="number" onChange={handleChange} />
            <button type="submit">Add</button>
        </form>
     );
}

export default AddFoodForm;