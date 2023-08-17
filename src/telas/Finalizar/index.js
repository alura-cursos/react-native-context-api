import { Text, View, FlatList, StatusBar, TouchableOpacity } from 'react-native';
import { Produto } from '../../componentes/Produto';
import { estilos } from './estilos';
import { Feather } from 'react-native-vector-icons'
import MaterialCommunityIcons from 'react-native-vector-icons/Feather';
import { useContext } from 'react';
import { TemaContext } from '../../contexts/TemaContext';
import { AutenticacaoContext } from '../../contexts/AutenticacaoContext';
import { ProdutosContext } from '../../contexts/ProdutosContext';

export default function Finalizar({navigation}) {
  const {temaEscolhido} = useContext(TemaContext);
  const estilo = estilos(temaEscolhido)
  const { usuario } = useContext(AutenticacaoContext);
  const { quantidade, carrinho, deletarProdutos } = useContext(ProdutosContext);

  async function finalizar() {
    await deletarProdutos();
    navigation.navigate('Principal');
  }

  return (
    <View style={estilo.container}>
      <StatusBar />
      <View>
        <View style={estilo.tituloArea}>
          <Text style={estilo.titulo}>Confirme os dados do seu pedido</Text>
        </View>
        <View style={estilo.viewComponent}>
          <View style={estilo.finalizacaoAreaTitulo}>
            <MaterialCommunityIcons name="user" style={estilo.finalizacaoIcon} />
            <Text style={estilo.finalizacaoTitulo}>Destinatário</Text>
          </View>
          <Text style={estilo.finalizarTxt}>{usuario.nome}</Text>
          <Text style={estilo.finalizarTxt}>{usuario.endereco}</Text>
          <Text style={estilo.finalizarTxt}>{usuario.telefone}</Text>        
        </View>
        <View style={estilo.viewComponent}>
          <View style={estilo.finalizacaoAreaTitulo}>
            <MaterialCommunityIcons name="info" style={estilo.finalizacaoIcon} />
            <Text style={estilo.finalizacaoTitulo}>Produtos</Text>
          </View>
          <Text style={estilo.finalizarTxt}>Total de itens: { quantidade }</Text>
          <Text style={estilo.finalizarTxt}>Total a ser pago: R$ 
            {carrinho.reduce((total, item) => total + item.preco, 0).toFixed(2).replace('.', ',')}
          </Text>
        </View>
      </View>
      <TouchableOpacity style={estilo.botao} onPress={() => finalizar()}>
        <Text style={estilo.botaoTexto}>Finalizar</Text>
      </TouchableOpacity>
    </View>
  );
}

