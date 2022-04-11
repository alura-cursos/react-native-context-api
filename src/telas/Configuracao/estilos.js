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
    subtitulo: {
      fontSize: 18,
      fontWeight: '400',
      color: tema.texto,
      marginBottom: 20,
    },
    inputArea: {
      height: 200,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });