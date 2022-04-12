import { StyleSheet } from 'react-native';

export const estilos = (tema) => {
 return StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tema.fundo,
    alignItems: 'stretch',
  },
  enderecoArea: {
    padding: 16,
    margin: 16,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'flex-start',
    backgroundColor: tema.cinza,
  },
  resumoArea: {
    flex: 1,
    margin: 16,
  },
  texto: {
    fontSize: 20,
    color: tema.texto,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: tema.texto,
    marginBottom: 16,
  },
  botao: {
    margin: 16,
    marginBottom: 32,
    paddingVertical: 16,
    borderRadius: 10,
    backgroundColor: tema.botao,
  },
  botaoTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: tema.preto,
    textAlign: 'center',
  },
})
}