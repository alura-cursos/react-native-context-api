import { useContext, useState } from "react";
import { Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { AutenticacaoContext } from "../../contexts/AutenticacaoContext";
import { TemaContext } from "../../contexts/TemaContext";
import { estilos } from './estilos';

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const {
    login,
  } = useContext(AutenticacaoContext);

  const {
    temas,
  } = useContext(TemaContext);

  const estilo = estilos(temas);

  async function logandoNoSistema(){
    const resultado = await login(email, senha);
    if(resultado === 'ok'){
      navigation.navigate('Principal');
    }
    else{
      alert(resultado);
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
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity
        style={estilo.botao}
        onPress={() => logandoNoSistema()}
      >
        <Text style={estilo.botaoTexto}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

