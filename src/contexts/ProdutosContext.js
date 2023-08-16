import { createContext, useEffect } from "react";
import { useState } from "react";
import { postProduto, getProdutos } from "../servicos/requisicoes/produtos";

export const ProdutosContext = createContext({});

export function ProdutosProvider({children}){
    const [quantidade, setQuantidade] = useState(0);
    const [carrinho, setCarrinho] = useState([]);
    const [ultimosVistos, setUltimosVistos] = useState([]);
    
    useEffect(() => {
        async function getProdutosCart(){
            const produtos = await getProdutos();
            setCarrinho(produtos)
            setQuantidade(produtos.length)
        }
        getProdutosCart();
    }, []);
    

    async function adicionarProduto(produto){
        setQuantidade(quantidade + 1);
        const addProduto = await postProduto(produto);
        let novoCarrinho = carrinho;
        novoCarrinho.push(addProduto);

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