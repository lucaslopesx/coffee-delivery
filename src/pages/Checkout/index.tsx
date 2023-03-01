import { MapPin } from 'phosphor-react'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import {
  AddressAndPayment,
  AddressContainer,
  AddressSelection,
  AddressText,
  CheckoutContainer,
  CheckoutGrid,
  PaymentContainer,
  Title,
} from './styles'

export function Checkout() {
  const themeContext = useContext(ThemeContext)
  return (
    <CheckoutContainer>
      <CheckoutGrid>
        <AddressAndPayment>
          <Title>Complete seu pedido</Title>
          <AddressContainer>
            <AddressSelection>
              <MapPin size={22} color={themeContext['yellow-dark']} />
              <AddressText>
                <p>Endereço de Entrega</p>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </AddressText>
            </AddressSelection>
          </AddressContainer>
          <PaymentContainer>Payment</PaymentContainer>
        </AddressAndPayment>
        <Title>teste</Title>
      </CheckoutGrid>
    </CheckoutContainer>
  )
}
