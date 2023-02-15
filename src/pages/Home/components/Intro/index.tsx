import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import coffeeDeliveryDesktopImg from '../../../../assets/landing-page-coffee.svg'
import {
  IntroContainer,
  Item,
  ItemIcon,
  Items,
  Subtitle,
  Title,
} from './styles'

export function Intro() {
  const themeContext = useContext(ThemeContext)
  return (
    <IntroContainer>
      <div>
        <Title>Encontre o café perfeito para qualquer hora do dia</Title>
        <Subtitle>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </Subtitle>
        <Items>
          <Item>
            <ItemIcon itemColor="dark_yellow">
              <ShoppingCart
                size={16}
                color={themeContext['background']}
                weight="fill"
              />
            </ItemIcon>
            <p>Compra simples e segura</p>
          </Item>
          <Item>
            <ItemIcon itemColor="gray">
              <Package
                size={16}
                color={themeContext['background']}
                weight="fill"
              />
            </ItemIcon>
            <p>Embalagem mantém o café intacto</p>
          </Item>
          <Item>
            <ItemIcon itemColor="yellow">
              <Timer
                size={16}
                color={themeContext['background']}
                weight="fill"
              />
            </ItemIcon>
            <p>Entrega rápida e rastreada</p>
          </Item>
          <Item>
            <ItemIcon itemColor="purple">
              <Coffee
                size={16}
                color={themeContext['background']}
                weight="fill"
              />
            </ItemIcon>
            <p>O café chega fresquinho até você</p>
          </Item>
        </Items>
      </div>
      <div>
        <img src={coffeeDeliveryDesktopImg} alt="" />
      </div>
    </IntroContainer>
  )
}
