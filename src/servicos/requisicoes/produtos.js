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

export async function deleteProdutos() {
    const produtos = await getProdutos();
    if(produtos.length > 0){
        produtos.forEach(async (produto) => {
            await deleteProduto(produto.id);
        })
    }
}

async function deleteProduto(id) {
    try{
        const resposta = await api.delete(`/produtos/${id}`);
        return resposta.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}
