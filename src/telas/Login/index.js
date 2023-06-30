import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, StatusBar, Alert } from 'react-native';
import { estilos } from './estilos';
import { useContext } from "react";
import { TemaContext } from "../../contexts/TemaContext";
import { AutenticacaoContext } from "../../contexts/AutenticacaoContext";
import { Platform } from "react-native";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const {temaEscolhido} = useContext(TemaContext);
  const estilo = estilos(temaEscolhido);

  const { login } = useContext(AutenticacaoContext);

  function logar() {
    const resposta = login(email, senha);
    if (resposta === "ok") {
      navigation.navigate("Principal");
    } else {
      /**
       * We show the error message alert according to the language of the device.
       * For web, use JS alert function.
       * For mobile, use React Native Alert component.
       */
      if (Platform.OS === "web") {
        alert("Usuário ou senha inválidos");
      } else {
        Alert.alert("Usuário ou senha inválidos");
      }
    }
  }

  return (
    <View style={estilo.container}>
      <StatusBar />
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
        onPress={() => logar()}
      >
        <Text style={estilo.botaoTexto}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

