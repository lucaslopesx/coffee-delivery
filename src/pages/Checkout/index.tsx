import { MapPin } from 'phosphor-react'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import {
  AddressAndPayment,
  CardContainer,
  CardHeader,
  CardHeaderText,
  CEPContainer,
  CepInput,
  CheckoutContainer,
  CheckoutGrid,
  CityInput,
  FormContainer,
  InputContainer,
  NeighborhoodCityAndStateContainer,
  NeighborhoodInput,
  NumberAndUnitContainer,
  NumberInput,
  PaymentContainer,
  StateInput,
  StreetInput,
  Title,
  UnitInput,
} from './styles'

export function Checkout() {
  const themeContext = useContext(ThemeContext)
  return (
    <CheckoutContainer>
      <CheckoutGrid>
        <AddressAndPayment>
          <Title>Complete seu pedido</Title>
          <CardContainer>
            <CardHeader>
              <MapPin size={22} color={themeContext['yellow-dark']} />
              <CardHeaderText>
                <p>Endereço de Entrega</p>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </CardHeaderText>
            </CardHeader>
            <form action="">
              <FormContainer>
                <CEPContainer>
                  <CepInput placeholder='CEP'/>                    
                </CEPContainer>
                <div>
                  <StreetInput placeholder='Rua'/>
                </div>
                <NumberAndUnitContainer>
                  <NumberInput placeholder='Numero'/>
                  <UnitInput placeholder='Complemento'/> 
                </NumberAndUnitContainer>
                <NeighborhoodCityAndStateContainer>
                  <NeighborhoodInput placeholder='Bairro'/>
                  <CityInput placeholder='Cidade'/>
                  <StateInput placeholder='UF'/>
                </NeighborhoodCityAndStateContainer>
              </FormContainer>
            </form>

          </CardContainer>
          <PaymentContainer>Payment</PaymentContainer>
        </AddressAndPayment>
        <Title>teste</Title>
      </CheckoutGrid>
    </CheckoutContainer>
  )
}
