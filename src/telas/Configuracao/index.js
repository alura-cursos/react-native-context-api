import { Text, View, Switch } from 'react-native';
import { estilo } from './estilos';

export default function Configuracao({ navigation }) {

  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Configuração</Text>

      <View style={estilo.inputArea}>
      <Text style={estilo.subtitulo}>Tema: Escuro</Text>
      <Switch
        onValueChange={() => {}}
        value={true}
      />
      </View>
    </View>
  );
}

