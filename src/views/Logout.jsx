import React from "react";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Logout = () => {
  const { user, setUser } = useContext(UserContext);

  const logout = () => {
    setUser(false);
  };

  return (
    <>
      <div style={{ height: "70vh", textAlign: "center", marginTop: "200px" }}>
        <p> ¿Estás seguro que quieres cerrar sesión? </p>
        <Button variant="dark" onClick={logout}>
          {" "}
          Cerrar Sesión{" "}
        </Button>
        <NavLink to="/">
          {" "}
          <button> Volver al inicio </button>{" "}
        </NavLink>
      </div>
    </>
  );
};

export default Logout;
