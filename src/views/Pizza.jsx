import React, {useEffect ,useState } from 'react'
import { useParams } from 'react-router-dom';

const Pizza = () => {
    const {id}= useParams();
    const [pizza, setPizza] = useState({
        desc:''
        ,id:''
        ,img:''
        ,ingredients:[]
        ,name:''
        ,price:0
    });
    useEffect(() => {
        consultarApi();
    }, [])
    const consultarApi = async()=>{
        const url = `http://localhost:5000/api/pizzas/${id}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            setPizza(data);
        } catch (error) {
            console.error("Hubo un problema con la solicitud Fetch:", error);
        }
    }
    return (
        <div id='cont'>
            <h3>Pizza {pizza.name}</h3>
            <img src={pizza.img} alt="Imagen de la pizza" />
            <p>Descripcion: {pizza.desc}</p>
            <p>Precio de pizza: {pizza.price}</p>
            <h4>Ingredientes</h4>
            <ul>
                {pizza.ingredients.map((ingredient, index) => (
                    <li key={index} className='ingrediente'>{ingredient}</li>
                ))}
            </ul>
        </div>
    )
}

export default Pizza