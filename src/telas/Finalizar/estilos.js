import { StyleSheet } from 'react-native';

export const estilos = (tema) => {
 return StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tema.fundo,
    alignItems: 'center',
    justifyContent: 'center',
  },
  enderecoArea: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resumoArea: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 20,
    color: tema.texto,
  },
})
}