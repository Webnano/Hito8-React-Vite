import { createContext, useState } from "react";
export const CartContext = createContext();
const CartProvider = ({ children }) => {
  //const [pizzaList] = useState(initialCart);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  // Función para aumentar la cantidad de pizza
  const increaseQuantity = (pizza) => {
    setCart((prevState) => {
      const exist = prevState.find((x) => x.id === pizza.id);

      if (exist) {
        const updatedCart = prevState.map((x) =>
          x.id === pizza.id ? { ...exist, quantity: exist.quantity + 1 } : x
        );
        setTotal(calculateTotal(updatedCart));
        return updatedCart;
      } else {
        const updatedCart = [...prevState, { ...pizza, quantity: 1 }];
        setTotal(calculateTotal(updatedCart));
        return updatedCart;
      }
    });
  };

  // Función para disminuir la cantidad de pizza
  const decreaseQuantity = (pizza) => {
    setCart((prevState) => {
      const exist = prevState.find((x) => x.id === pizza.id);

      if (exist) {
        if (exist.quantity <= 1) {
          const updatedCart = prevState.filter((x) => x.id !== pizza.id);
          setTotal(calculateTotal(updatedCart));
          return updatedCart;
        } else {
          const updatedCart = prevState.map((x) =>
            x.id === pizza.id ? { ...exist, quantity: exist.quantity - 1 } : x
          );
          setTotal(calculateTotal(updatedCart));
          return updatedCart;
        }
      }
      return prevState;
    });
  };

  // Función para calcular el total
  const calculateTotal = (cart) => {
    return cart.reduce(
      (total, pizza) => total + pizza.price * pizza.quantity,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, increaseQuantity, total, decreaseQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
