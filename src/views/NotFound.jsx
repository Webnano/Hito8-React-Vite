import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import notFoundImage from "../img/404.jpg";

const NotFound = () => {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center" style={{ height: "80vh" }}>
      <h1>Página no encontrada</h1>
      <img
        src={notFoundImage}
        alt="Página no encontrada"
        className="not-found-image"
        style={{ maxWidth: "44%", height: "auto" }}
      />
      <p>
        ¡Vaya! Algo no ha salido bien. Apretar el siguiente Boton
      </p>
      <Link to="/react-pizza-mamma-mia-1/">
        <Button variant="dark" >Ir a pagina principal</Button>
      </Link>
    </Container>
  );
};

export default NotFound;
