import { Actions, Cart, HeaderContainer, Location, Quantity } from './styles'
import logoCoffee from '../../assets/coffee-logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { ThemeContext } from 'styled-components'
import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'
import { NavLink } from 'react-router-dom'

export function Header() {
  console.log(logoCoffee)
  const themeContext = useContext(ThemeContext)

  const { quantityInCart, cartItems } = useContext(CoffeeContext)

  function showCartItems() {
    console.log(cartItems)
  }

  return (
    <HeaderContainer>
      <img src={logoCoffee} alt="" />
      <Actions>
        <Location>
          <MapPin size={22} color={themeContext.purple} weight="fill" />
          Machado, MG
        </Location>
        <NavLink to={'/checkout'}>
          <Cart onClick={showCartItems}>
            <ShoppingCart
              size={22}
              color={themeContext['yellow-dark']}
              weight="fill"
            />
            {quantityInCart > 0 ? <Quantity>{quantityInCart}</Quantity> : <></>}
          </Cart>
        </NavLink>
      </Actions>
    </HeaderContainer>
  )
}
