import { createContext } from "react";
import { useState } from "react";

export const AutenticacaoContext = createContext({});

export function AutenticacaoProvider({ children }) {
    const [usuario, setUsuario] = useState({});

    function login(user, senha) {
        if (user === "admin@admin.com" && senha === "admin") {
            setUsuario({
                nome: "Administrador",
                email: "admin@admin.com",
                endereco: "Rua 1, 123",
                telefone: "11 1234-5678"
            });
            return `ok`;    
        } else {
            return `erro`;
        }
    }

    return (
        <AutenticacaoContext.Provider value={{
            usuario, login
        }}>
            {children}
        </AutenticacaoContext.Provider>
    )
}