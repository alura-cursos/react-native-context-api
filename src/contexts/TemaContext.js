import { createContext, useState } from 'react'
import { escuro, claro } from '../estilosGlobais'

export const TemaContext = createContext({})

export function TemaProvider( {children} ) {
  const [temaAtual, setTemaAtual] = useState('escuro')

  const temas = {
    'escuro': escuro,
    'claro': claro
  }

  return (
    <TemaContext.Provider value={{
      temaAtual,
      setTemaAtual,
      temaEscolhido: temas[temaAtual]
    }}>
      {children}
    </TemaContext.Provider>
  )
}