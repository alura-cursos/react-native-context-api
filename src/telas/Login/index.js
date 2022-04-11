import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { estilo } from './estilos';
import MaterialCommunityIcons from 'react-native-vector-icons/Feather';

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <View style={estilo.container}>
      <StatusBar />

      <TouchableOpacity onPress={() => navigation.navigate('Configurações')} style={estilo.iconArea} >
        <MaterialCommunityIcons name="settings" size={30} color="#fff" style={estilo.icon} />
      </TouchableOpacity>

      <Text style={estilo.titulo}>Login</Text>

      <View style={estilo.inputArea}>
        <TextInput
          style={estilo.input}
          placeholder="Email"
          placeholderTextColor="#999"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={estilo.input}
          placeholder="Senha"
          placeholderTextColor="#999"
          autoCapitalize="none"
          value={senha}
          onChangeText={setSenha}
        />
      </View>

      <TouchableOpacity
        style={estilo.botao}
        onPress={() => navigation.navigate('Principal')}
      >
        <Text style={estilo.botaoTexto}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

