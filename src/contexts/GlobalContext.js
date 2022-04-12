import { createContext, useState } from 'react'

export const GlobalContext = createContext({})

export function InfoProvider( {children} ) {
  const valor = 200;
  const [nome, setNome] = useState("Andre")

  return (
    <GlobalContext.Provider value={{
      valor,
      nome,
      setNome
    }}>
      {children}
    </GlobalContext.Provider>
  )
}