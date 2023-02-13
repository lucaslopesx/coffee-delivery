import { Actions, Cart, HeaderContainer, Location } from './styles'
import logoCoffee from '../../assets/coffee-logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { ThemeContext } from 'styled-components'
import { useContext } from 'react'

export function Header() {
  console.log(logoCoffee)
  const themeContext = useContext(ThemeContext)

  return (
    <HeaderContainer>
      <img src={logoCoffee} alt="" />
      <Actions>
        <Location>
          <MapPin size={22} color={themeContext['purple-500']} weight="fill" />
          Machado, MG
        </Location>
        <Cart>
          <ShoppingCart
            size={22}
            color={themeContext['yellow-800']}
            weight="fill"
          />
        </Cart>
      </Actions>
    </HeaderContainer>
  )
}
