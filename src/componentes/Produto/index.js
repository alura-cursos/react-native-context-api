import { Text, View, Image, TouchableOpacity } from 'react-native';
import { estilos } from './estilos'

export function Produto({item}) {
  return (
    <View style={estilos.cartao}>
      <Image style={estilos.imagem} source={item.imagem}/>
      <View style={estilos.textoContainer}>
        <Text style={estilos.texto}>{item.texto}</Text>
        <Text style={estilos.preco}>R$ {item.preco}</Text>
      </View>
      <TouchableOpacity style={estilos.botaoAdicionar} onPress={() => {}}>
        <Text style={estilos.botaoTexto}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
