'use client'
import { createContext, useState } from 'react'

export const Context = createContext()

export function RepositoryProvider({ children }) {
  const [repository, setRepository] = useState()
  return (
    <Context.Provider value={{ repository, setRepository }}>
      {children}
    </Context.Provider>
  )
}

export default Context
