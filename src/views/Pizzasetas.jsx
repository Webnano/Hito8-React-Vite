import { formatNumber } from "../components/CambioM";
import { useEffect, useState } from "react";


function Pizzasetas() {
    const [pizza, setPizza] = useState({});

    useEffect(() => {
    getPizza();
    }, []);

    const getPizza = async () => {
    const res = await fetch("http://localhost:5000/api/Pizzas/p001");
    const pizzaData = await res.json();

    setPizza(pizzaData);
    };

    return (         
        <>             
           <h1 className="mnu_pizza">Menú Pizzas</h1>
        <div>
        {Object.keys(pizza).length > 0 && (
        <div>
      <div className="card">
        <img className="card-img-top" src={pizza.img} alt={pizza.name} style={{ width: "280px", margin: "10px" }} />
      </div>
      <div className="card">
        <h5 className="card-title"><strong>{pizza.name}</strong></h5>
        <p>Descripción: {pizza.desc}</p>
      </div>
      <div className="card" style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "96%" }}>
        <p>Ingredientes:</p>
        <div>      <p style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>🍕{pizza.ingredients.join(", ")}</p>
        </div>
        </div>
        
      <div className="card" style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "96%" }}>
        <h6 className="card-text" style={{ margin: "0 auto" }}>
          <b>Precio: ${formatNumber(pizza.price)}</b>
        </h6>
      </div>
      <div style={{ display: "flex", justifyContent: "space-around", width: "100%" }}>
        <button className="btn btn-light btn-sm border border-dark" onClick={() => alert("Ver más 👀")}>Ver más 👀</button>
        <button className="btn btn-dark" onClick={() => alert("Añadido 👍")}>Añadir 🛒</button>
      </div>
    </div>
  )}
</div>
        </>
    ); 
}

export default Pizzasetas;