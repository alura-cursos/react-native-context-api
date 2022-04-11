import api from "../api";

export async function pegarProdutos(){
    try {
        const resultado = await api.get('/produtos');
        return resultado.data
    }
    catch (error){
        console.log(error)
        return []
    }
}

export async function salvarProduto(produto){
  try {
      const resultado = await api.post(`/produtos`, produto);
      return resultado.data
  }
  catch (error){
        console.log(error)
        return {}
  }
}

export async function removerProduto(produto){
    try {
        await api.delete(`/produtos/${produto.id}`);
        return 'sucesso'
    }
    catch (error){
        console.log(error)
        return 'erro'
    }
}