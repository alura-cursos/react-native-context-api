import { createContext } from "react";
import { useState } from "react";

export const ProdutosContext = createContext({});

export function ProdutosProvider({children}){
    const [quantidade, setQuantidade] = useState(0);
    const [carrinho, setCarrinho] = useState([]);
    const [ultimosVistos, setUltimosVistos] = useState([]);

function adicionarProduto(produto){
        setQuantidade(quantidade + 1);
        let novoCarrinho = carrinho;
        novoCarrinho.push(produto);

        let novosUltimosVistos = new Set(ultimosVistos);
        novosUltimosVistos.add(produto);
        setUltimosVistos([...novosUltimosVistos]);

    }

    return(
        <ProdutosContext.Provider value={{
            quantidade, carrinho, ultimosVistos, adicionarProduto
        }}>
            {children}
        </ProdutosContext.Provider>
    )
}