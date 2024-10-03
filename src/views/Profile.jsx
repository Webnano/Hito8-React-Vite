import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import imgPicture from "../assets/img/avatar.png";
import { UserContext } from "../context/UserContext";
import { useContext, useEffect } from "react";

const Profile = () => {
  const { profile, user, logout } = useContext(UserContext);

  useEffect(() => {
    profile();
  }, []);

  return (
    <Container className="d-flex flex-column align-items-center mt-4">
      <Card
        border="blue"
        className="profile"
        style={{ width: "40rem", height: "34rem" }}
      >
        <Card.Body className="d-flex flex-column justify-content-center align-items-center">
          <Card.Img variant="top" style={{ width: "60%" }} src={imgPicture} />
          <Card.Title className="text-center pb-3 pt-3">
            <h2>
              <strong>Bienvenido usuario</strong>
            </h2>
            <div></div>
            <strong>
              {/* Verifica si user existe y si tiene la propiedad email */}
              {user ? (
                <>
                  <p>{user.email}</p>

                </>
              ) : (
                'Cargando perfil...'
              )}
            </strong>
          </Card.Title>

          <Link to="/react-pizza-mamma-mia-1/">
            <Button variant="dark" onClick={logout}>Cerrar Sesión</Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Profile;
