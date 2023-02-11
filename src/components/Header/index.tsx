import { Actions, Cart, HeaderContainer, Location } from './styles'
import logoCoffee from '../../assets/coffee-logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  console.log(logoCoffee)

  return (
    <HeaderContainer>
      <img src={logoCoffee} alt="" />
      <Actions>
        <Location>
          <MapPin size={22} color="#8047F8" weight="fill" />
          Machado, MG
        </Location>
        <Cart>
          <ShoppingCart size={22} color="#C47F17" weight="fill" />
        </Cart>
      </Actions>
    </HeaderContainer>
  )
}
