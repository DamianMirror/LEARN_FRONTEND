import React, {useState} from 'react';


function MyComponent(){
    const [payment, setPayment] = useState("card");
    const [shiping, setShipping] = useState("");
    const [car, setCar] = useState({year: 2020, model: "Tesla"});
    const [foods, setFoods] = useState(["apple", "banana", "orange"]);

    function handleAddFood(){
        const foodInput = document.getElementById('foodInput').value;
        setFoods(f => [...f, foodInput]);
        document.getElementById('foodInput').value = '';
    }
    function handleRemoveFood(id){
        setFoods(f => f.filter((_, index) => index !== id));
    }

    function changeYear(event){
        setCar( c => ({...car, year: event.target.value}));
    }

    function changeModel(event){
        setCar( c => ({...car, model: event.target.value}));
    }

    function handlePayment(event){
        setPayment(event.target.value);
    }

    function handleShipping(event){
        setShipping(event.target.value);
    }

    return(
        <div>
            <select value={payment} onChange={handlePayment}>
                <option value="card">Картка</option>
                <option value="cash">Готівка</option>
            </select>
            <p>{payment}</p>
            <label>
                <input type="radio" value="pickup" checked={shiping === "pickup"} onChange={handleShipping}/>
                Pick up
            </label>
            <label>
                <input type="radio" value="delivery" checked={shiping === "delivery"} onChange={handleShipping}/>
                Delivery
            </label>

            <div>
                <h1>Car</h1>
                <p>{car.year} {car.model}</p>
                <input type='number' value={car.year} onChange={changeYear}/>
                <input type='text' value={car.model} onChange={changeModel}/>
            </div>
            <div>
                <h1>List of Food</h1>
                <ul>
                    {foods.map((food, index) => 
                    <li key={index} onClick={() => handleRemoveFood(index)}>
                        {food}
                    </li>)}
                </ul>
                <input type='text' id='foodInput' placeholder='input food'/>
                <button onClick={handleAddFood}>Add</button>
            </div> 
        </div>
    )
}

export default MyComponent;