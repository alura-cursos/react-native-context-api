import api from "../api";

export async function postProduto(produto) {
    try{
        const resposta = await api.post("/produtos", produto);
        return resposta.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getProdutos() {
    try{
        const resposta = await api.get("/produtos");
        return resposta.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}