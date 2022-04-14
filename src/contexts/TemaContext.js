import { createContext, useState } from 'react'
import { escuro, claro } from '../estilosGlobais'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect } from 'react'

export const TemaContext = createContext({})

export function TemaProvider( {children} ) {
  const [temaAtual, setTemaAtual] = useState('escuro')

  const temas = {
    'escuro': escuro,
    'claro': claro
  }

  useEffect( async () => {
    const temaSalvo = await AsyncStorage.getItem('@tema');
    if(temaSalvo) {
      setTemaAtual(temaSalvo)
    }
  },[])

  async function salvarTemaNoDispositivo(tema){
    await AsyncStorage.setItem('@tema', tema)
    setTemaAtual(tema)
  }

  return (
    <TemaContext.Provider value={{
      temaAtual,
      setTemaAtual,
      temaEscolhido: temas[temaAtual],
      salvarTemaNoDispositivo
    }}>
      {children}
    </TemaContext.Provider>
  )
}