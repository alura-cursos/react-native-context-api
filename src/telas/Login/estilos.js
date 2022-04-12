import { StyleSheet } from 'react-native';
import { tema } from '../../estilosGlobais';

export const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tema.fundo,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: tema.texto,
    marginBottom: 20,
  },
  inputArea: {
    height: 200,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: '90%',
    backgroundColor: tema.input,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
    color: tema.preto,
  },
  botao: {
    height: 40,
    width: 100,
    backgroundColor: tema.botao,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  botaoTexto: {
    fontSize: 18,
    fontWeight: '400',
    color: tema.preto,
  }
});