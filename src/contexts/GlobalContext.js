import { createContext } from "react";
import { useState } from "react";

export const GlobalContext = createContext({});

export function InfoProvider({children}){

    const val = 150;
    const [name, setName] = useState("João");

    return(
        <GlobalContext.Provider value={{
            val, name, setName
        }}>
            {children}
        </GlobalContext.Provider>
    )
}