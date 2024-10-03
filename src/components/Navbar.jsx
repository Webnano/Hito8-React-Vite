import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { formatCurrency } from "../helpers/format";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext"; // nueva linea
import pizzaImg from "../img/pizzamia.png";

function NavbarApp() {
  const { total } = useContext(CartContext);
  const { token, logout } = useContext(UserContext); //nueva linea


  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container className="d-flex justify-content-between align-items-center">
        <Nav className="d-flex align-items-center gap-2">
        <Navbar.Brand>
            <img src={pizzaImg} alt="pizza" className="pizza" />
          </Navbar.Brand>
          <Link to="/react-pizza-mamma-mia-1/">
            <Button className="btn-sm" variant="outline-light" href="#home">
              🍕Home
            </Button>
          </Link>

          {token ? (
            <>
              <Link to="/react-pizza-mamma-mia-1/Profile">
                <Button
                  className="btn-sm"
                  variant="outline-light"
                  href="#profile"
                >
                  🔓Profile
                </Button>
              </Link>

              <Button className="btn-sm" variant="outline-light" onClick={logout}>
                🔒Logout
              </Button>
            </>
          ) : (
            <>
              <Link to="/react-pizza-mamma-mia-1/Login">
                <Button
                  className="btn-sm"
                  variant="outline-light"
                  href="#Login"
                >
                  🔐Login
                </Button>
              </Link>
              <Link to="/react-pizza-mamma-mia-1/Register">
                <Button
                  className="btn-sm"
                  variant="outline-light"
                  href="#register"
                >
                  🔐Register
                </Button>
              </Link>
            </>
          )}
        </Nav>


        <Link to="/react-pizza-mamma-mia-1/Cart">
          <Button className="btn-sm" variant="outline-light" href="#total">
            🛒Total: {formatCurrency(total)}
          </Button>
        </Link>

      </Container>
    </Navbar>
  );
}

export default NavbarApp;
