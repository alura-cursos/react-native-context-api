import { createContext, useEffect, useState } from "react";
import { dark, light } from "../estilosGlobais";
export const TemaContext = createContext({});
import AsyncStorage from "@react-native-async-storage/async-storage";

export function TemaProvider({children}){

    const [temaAtual, setTemaAtual] = useState("dark");

    const temas = {
        'dark': dark,
        'light': light,
    }

    async function salvarTema(tema){
        await AsyncStorage.setItem("tema", tema);
        setTemaAtual(tema);
    }

    useEffect(() => {
        async function carregarTema(){
            const tema = await AsyncStorage.getItem("tema");
            if(tema) {
                setTemaAtual(tema)
            }
        }
        carregarTema();
    }, [])

    return(
        <TemaContext.Provider value={{
            temaAtual, 
            setTemaAtual, 
            temaEscolhido: temas[temaAtual],
            salvarTema
        }}>
            {children}
        </TemaContext.Provider>
    )
}