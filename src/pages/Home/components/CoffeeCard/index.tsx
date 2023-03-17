import {
  ActionCart,
  CoffeCardDescription,
  CoffeCardTitle,
  CoffeeCardContainer,
  CoffeeCardFooter,
  CoffeeCardHeader,
  CoffeePrice,
  CoffeeTag,
  CoffeeQuantity,
  Tags,
} from './styles'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'
import { ThemeContext } from 'styled-components'
import { Coffee } from '../../../../data/coffees'
import { CartItem, CoffeeContext } from '../../../../contexts/CoffeeContext'
import { ActionButton, Actions } from '../../../../styles/actions/styles'

interface CoffeCardProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeCardProps) {
  const themeContext = useContext(ThemeContext)

  const { addCoffeToCart } = useContext(CoffeeContext)

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

  function getCoffeImage(image: string) {
    return `/src/assets/${image}`
  }

  function handleAddToCart() {
    const item: CartItem = {
      id: coffee.id,
      quantity,
    }
    addCoffeToCart(item)
  }

  return (
    <CoffeeCardContainer>
      <CoffeeCardHeader>
        <img src={getCoffeImage(coffee.photo)} alt="Expresso tradicional"></img>
      </CoffeeCardHeader>
      <Tags>
        {coffee.tags.map((tag) => {
          return <CoffeeTag key={`${coffee.id}${tag}`}>{tag}</CoffeeTag>
        })}
      </Tags>

      <CoffeCardTitle>{coffee.name}</CoffeCardTitle>
      <CoffeCardDescription>{coffee.description}</CoffeCardDescription>
      <CoffeeCardFooter>
        <CoffeePrice>
          <span>R$</span> {coffee.price.toFixed(2)}
        </CoffeePrice>
        <CoffeeQuantity>
          <Actions>
            <ActionButton onClick={addQuantity}>
              <Plus size={14} weight="fill" />
            </ActionButton>
            <p>{quantity}</p>
            <ActionButton onClick={subtractQuantity}>
              <Minus size={14} weight="fill" />
            </ActionButton>
          </Actions>
          <ActionCart onClick={handleAddToCart}>
            <ShoppingCart size={22} weight="fill" color={themeContext.card} />
          </ActionCart>
        </CoffeeQuantity>
      </CoffeeCardFooter>
    </CoffeeCardContainer>
  )
}
