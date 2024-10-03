import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import { Row, Col } from "react-bootstrap";
//import { menuPizza } from "../pizzas";
import { useEffect, useState } from "react";

const Home = () => {
  const [api, setApi] = useState([]);

  useEffect(() => {
    ApiPizza();
  }, []);

  const ApiPizza = async () => {
    const url = "http://localhost:5000/api/pizzas";
    const response = await fetch(url);
    const data = await response.json();
    setApi(data);
  };
  return (
    <div>
      <Header></Header>
      <h1 className="mnu_pizza">Menú Pizzas</h1>
      <div className="container">
        <Row className="mx-2">
          {api.map((Element) => (
            <Col md={4} key={Element.id}>
              <CardPizza
                name={Element.name}
                price={Element.price}
                image={Element.img}
                ingredients={Element.ingredients}
                id={Element.id}
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Home;
