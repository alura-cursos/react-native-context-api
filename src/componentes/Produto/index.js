import { Text, View, Image, TouchableOpacity } from 'react-native';
import { estilos } from './estilos'

export function Produto({ item, adicionar }) {
  return (
    <View style={estilos.cartao}>
      <Image style={estilos.imagem} source={item.imagem}/>
      <View style={estilos.textoContainer}>
        <Text style={estilos.texto} numberOfLines={1}>{item.texto}</Text>
        <Text style={estilos.preco}>R$ {item.preco}</Text>
      </View>
      { adicionar &&
      <TouchableOpacity style={estilos.botaoAdicionar} onPress={() => {}}>
        <Text style={estilos.botaoTexto}>+</Text>
      </TouchableOpacity>}
    </View>
  );
}
