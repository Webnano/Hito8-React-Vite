
import { useNavigate } from 'react-router-dom';
import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [token, setToken] = useState(false);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        //si el token existe en el localstorage, se setea el estado token a true para monstrar las para mostrar las partes de la aplicación que requieren autenticación
        if (token) {
            setToken(true);
        }
    }, []);

    const login = async (email, password) => {
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        if (data?.error) {
            alert(data.error);
            return;
        }
        else {
            alert('Acceso permitido')
            setToken(true);
            localStorage.setItem('token', data.token)
            navigate('/react-pizza-mamma-mia-1/profile');
            return
        }
    };

    const register = async (email, password) => {
        const response = await fetch("http://localhost:5000/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        if (data?.error) {
            alert(data.error);
            return;
        }
        else {
            alert('Registro Exitoso')
            setToken(true);
            localStorage.setItem('token', data.token)
            navigate('/react-pizza-mamma-mia-1/profile');
            return
        }
    }

    const profile = async () => {

        const token = localStorage.getItem("token"); //consulta si el token existe en el localstorage
        if (!token) {
            return;
        }
        try {
            const response = await fetch("http://localhost:5000/api/auth/me", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`, // Pasar el token en los headers
                    "Content-Type": "application/json",
                },
            });

            const data = await response.json();

            if (data?.error) {
                alert(`Error al obtener el perfil: ${data.error}`);
                return;
            }
            setToken(true);
            setUser(data);
        } catch (error) {
            console.error("Error al obtener el perfil:", error);
            alert("Hubo un problema al obtener el perfil.");
        }
    }

    const logout = () => {
        alert('Se ha cerrado la sesión');
        setToken(false);
        localStorage.removeItem('token'); //elimina el token del localstorage
        navigate('/react-pizza-mamma-mia-1/');
    };

    return (
        <UserContext.Provider value={{ token, logout, login, register, profile, user, token }}>
            {children}
        </UserContext.Provider >

    )
}

export default UserProvider;