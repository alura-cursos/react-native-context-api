import { Text, View, StatusBar, Button, Alert } from 'react-native';
import { ProdutosContext } from '../../contexts/ProdutosContext';
import { AutenticacaoContext } from '../../contexts/AutenticacaoContext';
import { TemaContext } from '../../contexts/TemaContext';
import { estilos } from './estilos';
import { useContext } from 'react';

export default function Finalizar({ navigation }) {
  const {
    quantidade,
    precoTotal,
    finalizarCompra,
  } = useContext(ProdutosContext);

  const {
    temas,
  } = useContext(TemaContext);

  const {
    usuario
  } = useContext(AutenticacaoContext);

  const estilo = estilos(temas);

  async function finalizar() {
    const resultado = await finalizarCompra();
    Alert.alert(resultado);
    navigation.navigate('Principal');
  }

  return (
    <View style={estilo.container}>
      <StatusBar />
      <View style={estilo.enderecoArea}>
        <Text style={estilo.texto}>Nome: {usuario.nome}</Text>
        <Text style={estilo.texto}>Endereço: {usuario.endereco}</Text>
        <Text style={estilo.texto}>Email: {usuario.email}</Text>
        <Text style={estilo.texto}>Telefone: {usuario.telefone}</Text>
      </View>
      <View style={estilo.resumoArea}>
        <Text style={estilo.texto}>Quantidade: {quantidade}</Text>
        <Text style={estilo.texto}>Preço Total: {precoTotal}</Text>
      </View>
      <Button title="Finalizar" onPress={() => finalizar()} />
    </View>
  );
}

