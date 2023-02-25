import { createContext, ReactNode, useState } from 'react'

interface CoffeeContextProviderProps {
  children: ReactNode
}

interface CoffeeContextType {
  quantity: number
  addQuantity: () => void
  subtractQuantity: () => void
}

export const CoffeeContext = createContext({} as CoffeeContextType)

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [quantity, setQuantity] = useState(1)

  function addQuantity() {
    setQuantity((state) => {
      return state + 1
    })
  }

  function subtractQuantity() {
    setQuantity((state) => {
      if (state === 1) {
        return 1
      }
      return state - 1
    })
  }

  return (
    <CoffeeContext.Provider value={{ quantity, addQuantity, subtractQuantity }}>
      {children}
    </CoffeeContext.Provider>
  )
}
