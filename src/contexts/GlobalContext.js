import { createContext } from "react";

export const GlobalContext = createContext({});

export function InfoProvider({ children }) {
    return (
        <GlobalContext.Provider value={{ valor: 150 }}>
            {children}
        </GlobalContext.Provider>
    );
}