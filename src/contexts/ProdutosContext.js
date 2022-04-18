import { createContext, useState } from 'react'
import { useEffect } from 'react';
import { pegarProdutos, salvarProduto } from '../servicos/requisicoes/produto';

export const ProdutosContext = createContext({})

export function ProdutosProvider( {children} ) {
  const [quantidade, setQuantidade] = useState(0);
  const [carrinho, setCarrinho] = useState([]);
  const [ultimosVistos, setUltimosVistos] = useState([]);

  useEffect( async () => {
    const resultado = await pegarProdutos();
    setCarrinho(resultado);
    setQuantidade(resultado.length);
  }, [])

  async function viuProduto(produto){
    setQuantidade(quantidade+1);

    const produtoSalvo = await salvarProduto(produto)
    let novoCarrinho = carrinho
    novoCarrinho.push(produtoSalvo);
    setCarrinho(novoCarrinho);

    let novoUltimosVistos = new Set(ultimosVistos)
    novoUltimosVistos.add(produto)
    setUltimosVistos([...novoUltimosVistos])
  }

  return (
    <ProdutosContext.Provider value={{
      quantidade,
      carrinho,
      ultimosVistos,
      viuProduto
    }}>
      {children}
    </ProdutosContext.Provider>
  )
}