import { createContext, useEffect } from "react";
import { useState } from "react";
import { postProduto, getProdutos, deleteProdutos } from "../servicos/requisicoes/produtos";
import { Alert } from "react-native";

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

    async function deletarProdutos(){
        const deleteProd = await deleteProdutos();
        if(deleteProd === null){
            Alert.alert("Erro ao deletar produtos");
            return;
        }
        setQuantidade(0);
        setCarrinho([]);
    }

    return(
        <ProdutosContext.Provider value={{
            quantidade, carrinho, ultimosVistos, adicionarProduto, deletarProdutos
        }}>
            {children}
        </ProdutosContext.Provider>
    )
}