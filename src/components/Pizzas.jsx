import Header from "./Header";
import { useEffect, useState } from "react";
import CardPizza from "./CardPizza";
import { useParams } from 'react-router-dom'; // nueva linea

function Pizzas() {
  const [pizza, setPizza] = useState({});
  const { id } = useParams();

  useEffect(() => {
    console.log('ID: ' + id);

    getPizza();

  }, []);

  const getPizza = async () => {

    const res = await fetch(`http://localhost:5000/api/pizzas/${id}`); // nueva linea
    const pizzaData = await res.json();

    setPizza(pizzaData);

  };

  return (
    <>
      <Header></Header>
      <h1 className="mnu_pizza">Menú Pizzas</h1>
      <div className="mt-5 d-flex justify-content-center">
        {Object.keys(pizza).length > 0 && (
          <CardPizza
            id={pizza.id} // nueva linea
            desc={pizza.desc}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            image={pizza.img}
            isHome={false}
          />
        )}
      </div>
    </>
  );
}

export default Pizzas;
