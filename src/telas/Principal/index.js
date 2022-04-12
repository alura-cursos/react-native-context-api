import { Text, View, FlatList, StatusBar, TouchableOpacity } from 'react-native';
import { Produto } from '../../componentes/Produto';
import { ProdutosContext } from '../../contexts/ProdutosContext';
import { AutenticacaoContext } from '../../contexts/AutenticacaoContext';
import { TemaContext } from '../../contexts/TemaContext';
import { estilos } from './estilos';
import { useContext } from 'react';
import { Feather } from 'react-native-vector-icons'
import { produtos } from './produtos';
import MaterialCommunityIcons from 'react-native-vector-icons/Feather';

export default function Principal({navigation}) {
  const {
    quantidade,
    ultimosVistos,
  } = useContext(ProdutosContext);

  const {
    temas,
  } = useContext(TemaContext);

  const {
    usuario
  } = useContext(AutenticacaoContext);

  const estilo = estilos(temas);

  return (
    <View style={estilo.container}>
      <StatusBar />
      <View style={estilo.tituloArea}>
        <Text style={estilo.titulo}>Olá, {usuario.nome}</Text>
        <View style={estilo.carrinhoArea}>
          <TouchableOpacity onPress={() => navigation.navigate('Resumo')}>
            <Feather name="shopping-cart" size={30} color="#fff" style={estilo.carrinhoIcon} />
          </TouchableOpacity>
          {quantidade > 0 &&
          <View style={estilo.carrinhoQuantidadeArea}>
            <Text style={estilo.carrinhoQuantidade}>{quantidade}</Text>  
          </View>}
          <TouchableOpacity onPress={() => navigation.navigate('Configurações')} style={estilo.iconArea} >
            <MaterialCommunityIcons name="settings" size={30} color="#fff" style={estilo.icon} />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={produtos}
        keyExtractor={item => Math.random()}
        renderItem={({ item }) => <Produto item={item} visualizado={true}/>}
        style={estilo.lista}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() =>
          <View>
            {ultimosVistos.length > 0 &&
              <View style={estilo.ultimosVistos}>
                <Text style={estilo.tituloUltimosVistos}>Últimos vistos</Text>
                <FlatList
                  data={ultimosVistos}
                  keyExtractor={item => Math.random()}
                  renderItem={({ item }) => <Produto item={item} visualizado={false} />}
                  style={estilo.lista}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                />
              </View>}
            <Text style={[estilo.titulo, { paddingLeft: 16 }]}>Produtos</Text>
          </View>
        }
      />
    </View>
  );
}

