import { createContext, useState } from 'react'

export const ProdutosContext = createContext({})

export function ProdutosProvider( {children} ) {
  const [quantidade, setQuantidade] = useState(0);
  const [carrinho, setCarrinho] = useState([]);
  const [ultimosVistos, setUltimosVistos] = useState([]);

  function viuProduto(produto){
    setQuantidade(quantidade+1);

    let novoCarrinho = carrinho
    novoCarrinho.push(produto);
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