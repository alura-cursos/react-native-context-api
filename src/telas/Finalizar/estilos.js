import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export const estilos = (tema) =>{
  return StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: tema.fundo,
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
  tituloArea: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight,
    marginBottom: 16,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: tema.titulo,
  },
  botao: {
    marginBottom: 32,
    paddingVertical: 16,
    borderRadius: 10,
    backgroundColor: tema.botao,
    justifyContent: 'flex-end',
  },
  botaoTexto: {
      fontSize: 18,
      fontWeight: 'bold',
      color: tema.preto,
      textAlign: 'center',
  },
  viewComponent: {
    backgroundColor: tema.bgFinalizacao,
    padding: 16,
    width: '100%',
    marginBottom: 16,
  },
  finalizacaoAreaTitulo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  finalizacaoTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: tema.titulo,
    marginLeft: 8,
  },
  finalizacaoIcon: {
    marginBottom: 8,
    color: tema.titulo,
    fontSize: 26,
  },
  tituloArea: {
    width: '100%',
    marginBottom: 16,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: tema.titulo,
  },
  finalizarTxt: {
    fontSize: 16,
    color:tema.titulo,
  }
});
};