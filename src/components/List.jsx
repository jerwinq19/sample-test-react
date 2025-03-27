import { useState } from "react";

const RenderCars = (props) => {

    return <li>
        This is a: <b>{props.brand} <button>delete car</button></b>
    </li>
}

const Garage = (props) => {

    const[input, setInput] = useState("")
    const[listCar, addCar] = useState(props.cars)

    const addCars = () => {
        addCar([...listCar, input])
    }

    return (
        <div>
            <h1>Garage</h1>
            <input type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={() => addCars()}>add a car</button>

            <ul>
                {listCar && (
                    listCar.map((car, index)=> <RenderCars key = {index} brand={car}/>)
                )}
            </ul>

        </div>
    );
}

export default Garage;