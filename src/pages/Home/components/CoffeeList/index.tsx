import {
  ActionButton,
  ActionCart,
  Actions,
  CoffeCardDescription,
  CoffeCardTitle,
  CoffeeCard,
  CoffeeCardFooter,
  CoffeeCardHeader,
  CoffeePrice,
  CoffeeQuantity,
  Coffees,
  CoffeesTitle,
  CoffeeTag,
} from './styles'
import traditionalEspresso from '../../../../assets/traditional-espresso.png'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

export function CoffeeList() {
  const themeContext = useContext(ThemeContext)

  return (
    <Coffees>
      <CoffeesTitle>Nossos cafés</CoffeesTitle>
      <CoffeeCard>
        <CoffeeCardHeader>
          <img src={traditionalEspresso} alt="Expresso tradicional"></img>
        </CoffeeCardHeader>
        <CoffeeTag>TRADICIONAL</CoffeeTag>
        <CoffeCardTitle>Expresso Tradicional</CoffeCardTitle>
        <CoffeCardDescription>
          O tradicional café feito com água quente e grãos moídos
        </CoffeCardDescription>
        <CoffeeCardFooter>
          <CoffeePrice>
            <span>R$</span> 9,90
          </CoffeePrice>
          <CoffeeQuantity>
            <Actions>
              <ActionButton>
                <Plus size={14} weight="fill" color={themeContext.purple} />
              </ActionButton>
              <p>1</p>
              <ActionButton>
                <Minus size={14} weight="fill" color={themeContext.purple} />
              </ActionButton>
            </Actions>
            <ActionCart>
              <ShoppingCart size={22} weight="fill" color={themeContext.card} />
            </ActionCart>
          </CoffeeQuantity>
        </CoffeeCardFooter>
      </CoffeeCard>
    </Coffees>
  )
}
