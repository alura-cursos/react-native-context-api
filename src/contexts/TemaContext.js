import { createContext, useState } from "react";
import { dark, light } from "../estilosGlobais";
export const TemaContext = createContext({});

export function TemaProvider({children}){

    const [temaAtual, setTemaAtual] = useState("dark");

    const temas = {
        'dark': dark,
        'light': light,
    }

    return(
        <TemaContext.Provider value={{
            temaAtual, setTemaAtual, temaEscolhido: temas[temaAtual]
        }}>
            {children}
        </TemaContext.Provider>
    )
}