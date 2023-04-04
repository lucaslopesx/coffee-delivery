import { createContext, ReactNode, useState } from 'react'

interface CoffeeContextProviderProps {
  children: ReactNode
}

export interface CartItem {
  id: string
  quantity: number
}

interface CoffeeContextType {
  quantityInCart: number
  cartItems: CartItem[]
  addCoffeeQuantityInCart: (id: string) => void
  subtractCoffeeQuantityInCart: (id: string) => void
  addCoffeToCart: (item: CartItem) => void
}

export const CoffeeContext = createContext({} as CoffeeContextType)

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [cartItems, setCartItem] = useState<CartItem[]>([])

  function addCoffeToCart(item: CartItem) {
    setCartItem((state) => {
      const itemInStateIndex = state.findIndex((x) => x.id === item.id)
      if (itemInStateIndex !== -1) {
        state[itemInStateIndex] = {
          id: state[itemInStateIndex].id,
          quantity: state[itemInStateIndex].quantity + item.quantity,
        }
        return [...state]
      }

      return [...state, item]
    })
  }

  function addCoffeeQuantityInCart(id: string) {
    setCartItem((state) => {
      const itemInStateIndex = state.findIndex((x) => x.id === id)
      if (itemInStateIndex !== -1) {
        state[itemInStateIndex] = {
          id: state[itemInStateIndex].id,
          quantity: state[itemInStateIndex].quantity + 1,
        }
        console.log(state)
        return [...state]
      }

      return [...state]
    })
  }

  function subtractCoffeeQuantityInCart(id: string) {
    setCartItem((state) => {
      const itemInStateIndex = state.findIndex((x) => x.id === id)
      if (itemInStateIndex !== -1) {
        state[itemInStateIndex] = {
          id: state[itemInStateIndex].id,
          quantity:
            state[itemInStateIndex].quantity > 0
              ? state[itemInStateIndex].quantity - 1
              : 0,
        }
        console.log(state)
        return [...state]
      }

      return [...state]
    })
  }

  const quantityInCart = cartItems.length
  return (
    <CoffeeContext.Provider
      value={{
        addCoffeToCart,
        quantityInCart,
        cartItems,
        addCoffeeQuantityInCart,
        subtractCoffeeQuantityInCart,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
