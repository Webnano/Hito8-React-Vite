import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { Container } from "react-bootstrap";
import useInput from "../hooks/useInput";
import { Link } from "react-router-dom";

const Login = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const email = useInput(""); // customHook
  const password = useInput(""); // customHook
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState("success");
  const { login } = useContext(UserContext);

  const validarFormulario = (e) => {
    e.preventDefault();


    if (!email.value || !password.value) {
      setMessage("Todos los campos son obligatorios");
      setVariant("danger");
      return false;
    }
    if (password.value.length < 6) {
      setMessage("La contraseña debe tener al menos 6 caracteres");
      setVariant("danger");
      return false;
    }
    //setMessage("Login Exitoso");
    login(email.value, password.value);
    setVariant("success");
  };

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center" style={{ height: "80vh" }}>
      <Card style={{ width: "40rem" }}>
        <Form onSubmit={(e) => validarFormulario(e)}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Login</h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  placeholder="Enter email"
                  value={email}
                  {...email}
                />
              </Form.Group>
            </ListGroup.Item>
            <ListGroup.Item>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  {...password}
                />
              </Form.Group>
            </ListGroup.Item>
            <ListGroup.Item className="mb-3 d-flex justify-content-center">
              <Link variant="link" type="submit" to="/react-pizza-mamma-mia-1/register">
                Registrate ?  
              </Link>
              <Button variant="primary" type="submit">
                Inicio
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Form>
        <ListGroup.Item>
          {message && (
            <Alert variant={variant} onClose={() => setMessage("")} dismissible>
              {message}
            </Alert>
          )}
        </ListGroup.Item>
      </Card>
    </Container>
  );
};

export default Login;
