import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import "/src/CardPizza.css";

const CardPizza = ({ name, price, image, ingredients, id }) => {
  const { increaseQuantity } = useContext(CartContext);
  const handleAddClick = () => {
    const pizza = { name, price, image, ingredients, id };
    increaseQuantity(pizza);
  };
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          <strong>Precio: ${price}</strong>
        </p>
        <p className="card-text">
          <strong>Ingredientes:</strong> {ingredients.join(", ")}
        </p>
        <div className="d-flex justify-content-around">
          <Link to={`/react-pizza-mamma-mia-1/Pizza/${id}`} className="btn btn-info bg-white text-dark">
          Ver más 👀
          </Link>
          <Button variant="dark" onClick={handleAddClick}>
            Añadir 🛒
          </Button>
        </div>
      </div>
    </div >
  );
};

export default CardPizza;
