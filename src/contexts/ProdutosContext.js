import { createContext, useState, useEffect } from "react";
import { pegarProdutos, salvarProduto, removerProduto } from "../servicos/requisicoes/produtos";

export const ProdutosContext = createContext({});

export function ProdutosProvider({ children }) {
    const [quantidade, setQuantidade] = useState(0);
    const [ultimosVistos, setUltimosVistos] = useState([]);
    const [precoTotal, setPrecoTotal] = useState(0);

    useEffect( async () => {
        const resultado = await pegarProdutos();
        if(resultado.length > 0){
            setUltimosVistos(resultado);
            setQuantidade(resultado.length);
        }
    },[])

    async function viuProduto(produto) {
        const resultado = await salvarProduto(produto);
        const novoUltimosVistos = [resultado, ...ultimosVistos];
        setUltimosVistos(novoUltimosVistos);
        setQuantidade(quantidade + 1);
        let novoPrecoTotal = precoTotal + produto.preco;
        setPrecoTotal(novoPrecoTotal);
    }

    async function retirarProduto(produto) {
        await removerProduto(produto);
        const novoUltimosVistos = ultimosVistos.filter(p => p.id !== produto.id);
        setUltimosVistos(novoUltimosVistos);
        setQuantidade(quantidade - 1);
        let novoPrecoTotal = precoTotal - produto.preco;
        setPrecoTotal(novoPrecoTotal);
    }

    async function finalizarCompra() {
        // para cada item nos ultimos vistos, apagar do banco de dados usando o removerProduto
        try {
            ultimosVistos.forEach(async produto => {
                await removerProduto(produto);
            })
            setQuantidade(0);
            setPrecoTotal(0);
            setUltimosVistos([]);
            return 'Compra finalizada com sucesso!';
        }
        catch(erro) {
            return 'Erro ao finalizar a compra, tente novamente!';
        }
    }

    return (
        <ProdutosContext.Provider
            value={{
                quantidade,
                ultimosVistos,
                precoTotal,
                viuProduto,
                retirarProduto,
                finalizarCompra,
            }}
        >
            {children}
        </ProdutosContext.Provider>
    );
}