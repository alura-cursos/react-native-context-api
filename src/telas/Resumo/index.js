import { Text, View, FlatList, StatusBar, TouchableOpacity } from 'react-native';
import { Produto } from '../../componentes/Produto';
import { estilos } from './estilos';
import { Feather } from 'react-native-vector-icons'
import MaterialCommunityIcons from 'react-native-vector-icons/Feather';
import { useContext } from 'react';
import { TemaContext } from '../../contexts/TemaContext';
import { AutenticacaoContext } from '../../contexts/AutenticacaoContext';
import { ProdutosContext } from '../../contexts/ProdutosContext';

export default function Resumo({navigation}) {
  const {temaEscolhido} = useContext(TemaContext);
  const estilo = estilos(temaEscolhido)
  const { usuario } = useContext(AutenticacaoContext);
  const { quantidade, carrinho } = useContext(ProdutosContext);
  return (
    <View style={estilo.container}>
      <StatusBar />
      <View style={estilo.tituloArea}>
        <Text style={estilo.titulo}>Olá, {usuario?.nome}</Text>
        <View style={estilo.carrinhoArea}>
          <TouchableOpacity onPress={() => {}}>
            <Feather name="shopping-cart" size={30} color="#fff" style={estilo.carrinhoIcon} />
          </TouchableOpacity>
          {quantidade > 0 && <View style={estilo.carrinhoQuantidadeArea}>
            <Text style={estilo.carrinhoQuantidade}>{quantidade}</Text>  
          </View>}
          <TouchableOpacity onPress={() => navigation.navigate('Configurações')} style={estilo.iconArea} >
            <MaterialCommunityIcons name="settings" size={30} color="#fff" style={estilo.icon} />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={carrinho}
        keyExtractor={item => Math.random()}
        renderItem={({ item }) => <Produto item={item} adicionar={false} />}
        style={estilo.lista}
        showsVerticalScrollIndicator={false}        
      />

      <TouchableOpacity style={estilo.botao} onPress={() => navigation.navigate('Finalizar')}>
        <Text style={estilo.botaoTexto}>Finalizar</Text>
      </TouchableOpacity>
    </View>
  );
}

