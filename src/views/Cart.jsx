import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";
import { Container, Card, Button } from "react-bootstrap";

const Cart = () => {
  const { cart, increaseQuantity, total, decreaseQuantity } = useContext(CartContext);
  const [mensajeCompra, setMensajeCompra] = useState(false); // Aquí se corrige el useState
  const { token } = useContext(UserContext);

  const checkout = async () => {
    let token_user = localStorage.getItem('token');
    const response = await fetch("http://localhost:5000/api/checkouts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token_user}`,
      },
      body: JSON.stringify({
        cart: cart,
      }),
    });

    if (response.ok) {
      alert("Compra realizada con éxito");
      setMensajeCompra(true);
    } else {
      alert("Error al realizar la compra");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center mt-5">
      <Card border="solid" style={{ width: "50rem" }}>
      <h1>Detalle Carrito</h1>
      {mensajeCompra ? <h2>Gracias por comprar!!</h2> : ''}
      <ul>
        {cart.map((pizza) => (
          <li key={pizza.id} className="mb-3" style={{ width: "200px", height:"200px" }}>
            <div className="pizza-details">
              {pizza.quantity > 0 ? (
                <p>
                  <img src={pizza.image} className="pizza-carro" />{" "}
                  <strong>{pizza.name}</strong> (${pizza.price}) x{" "}
                  {pizza.quantity} = $ {pizza.price * pizza.quantity}
                </p>
              ) : null}
              <button  className="btn btn-danger" onClick={() => increaseQuantity(pizza)}>+</button>
              <button className="btn btn-success"  onClick={() => decreaseQuantity(pizza)}>-</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="total">
        <h2>Total: </h2>${total}
      </div>
      {token ? (
        <button className="btn btn-info" onClick={checkout}>Pagar</button>
      ) : (
        <h2>Debes iniciar sesión para pagar</h2>
      )}
      </Card>
    </Container>
  );
};

export default Cart;
