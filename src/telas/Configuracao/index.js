import { Text, View, Switch } from 'react-native';
import { estilo } from './estilos';
import { useState } from 'react';

export default function Configuracao({ navigation }) {
  const [estado, setEstado] = useState(true);

  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Configuração</Text>

      <View style={estilo.inputArea}>
      <Text style={estilo.subtitulo}>Tema: Escuro</Text>
      <Switch
        onValueChange={() => setEstado(!estado)}
        value={estado}
      />
      </View>
    </View>
  );
}

