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
  cartItem: CartItem[]
  addCoffeToCart: (item: CartItem) => void
}

export const CoffeeContext = createContext({} as CoffeeContextType)

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [cartItem, setCartItem] = useState<CartItem[]>([])

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
  console.log(cartItem)

  const quantityInCart = cartItem.length
  return (
    <CoffeeContext.Provider
      value={{ addCoffeToCart, quantityInCart, cartItem }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
