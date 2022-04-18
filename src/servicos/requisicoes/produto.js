import api from "../api";

export async function salvarProduto(produto){
  try {
    const resultado = await api.post('/produtos', produto);
    return resultado.data;
  }
  catch(erro){
    console.log(erro)
    return {}
  }
}

export async function pegarProdutos(){
  try {
    const resultado = await api.get('/produtos');
    return resultado.data;
  }
  catch(erro){
    console.log(erro)
    return []
  }
}