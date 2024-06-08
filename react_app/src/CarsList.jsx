import React, {useState} from 'react';
function CarsList() {

    const [cars, setCars] = useState([]);
    const [year, setYear] = useState(new Date().getFullYear());
    const [model, setModel] = useState("");
    const [make, setMake] = useState("");

    function handleAddCar(){}

    function handleRemoveCar(id){}

    function changeYear(event){
        setYear(event.target.value);
    }
    function changeModel(event){
        setModel(event.target.value);
    }
    function changeMake(event){
        setMake(event.target.value);
    }

  return (
    <div>
      <h2>List of cars</h2>
      <ul>

      </ul>
      <input type="number" value={year} onChange={changeYear}/><br/>
        <input type="text" value={model} onChange={changeModel} placeholder='enter car model'/><br/>
        <input type="text" value={make} onChange={changeMake} placeholder='enter car make'/><br/>
        <button onClick={handleAddCar}>Add car</button>
    </div>
  );
}

export default CarsList;