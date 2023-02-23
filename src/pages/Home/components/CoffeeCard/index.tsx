import {
  ActionButton,
  ActionCart,
  Actions,
  CoffeCardDescription,
  CoffeCardTitle,
  CoffeeCardContainer,
  CoffeeCardFooter,
  CoffeeCardHeader,
  CoffeePrice,
  CoffeeQuantity,
  CoffeeTag,
  Tags,
} from './styles'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { Coffee } from '../../../../data/coffees'

interface CoffeCardProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeCardProps) {
  const themeContext = useContext(ThemeContext)

  const getCoffeImage = (image: string) => {
    return `/src/assets/${image}`
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
            <ActionButton>
              <Plus size={14} weight="fill" />
            </ActionButton>
            <p>1</p>
            <ActionButton>
              <Minus size={14} weight="fill" />
            </ActionButton>
          </Actions>
          <ActionCart>
            <ShoppingCart size={22} weight="fill" color={themeContext.card} />
          </ActionCart>
        </CoffeeQuantity>
      </CoffeeCardFooter>
    </CoffeeCardContainer>
  )
}
