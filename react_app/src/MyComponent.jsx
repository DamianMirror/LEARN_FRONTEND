import React, {useState} from 'react';


function MyComponent(){
    const [name, setName] = useState("");
    const [payment, setPayment] = useState("card");
    const [shiping, setShipping] = useState("");


    function handleChange(event){
        setName(event.target.value);
    }

    function handlePayment(event){
        setPayment(event.target.value);
    }

    function handleShipping(event){
        setShipping(event.target.value);
    }

    return(
        <div>
            <input value={name} onChange={handleChange}/>
            <p>{name}</p>
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
        </div>
    )
}

export default MyComponent;