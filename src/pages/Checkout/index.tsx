import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from 'phosphor-react'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import {
  CardContainer,
  CardHeader,
  CardHeaderText,
  CEPContainer,
  CepInput,
  CheckoutContainer,
  CheckoutGrid,
  CityInput,
  FormContainer,
  NeighborhoodCityAndStateContainer,
  NeighborhoodInput,
  NumberAndUnitContainer,
  NumberInput,
  StateInput,
  StreetInput,
  Title,
  UnitInput,
  PaymentContainer,
  SelectedCoffeesCard,
  SelectedCoffee,
} from './styles'

export function Checkout() {
  const themeContext = useContext(ThemeContext)
  return (
    <CheckoutContainer>
      <CheckoutGrid>
        <div>
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
                  <CepInput placeholder="CEP" />
                </CEPContainer>
                <div>
                  <StreetInput placeholder="Rua" />
                </div>
                <NumberAndUnitContainer>
                  <NumberInput placeholder="Numero" />
                  <UnitInput placeholder="Complemento" />
                </NumberAndUnitContainer>
                <NeighborhoodCityAndStateContainer>
                  <NeighborhoodInput placeholder="Bairro" />
                  <CityInput placeholder="Cidade" />
                  <StateInput placeholder="UF" />
                </NeighborhoodCityAndStateContainer>
              </FormContainer>
            </form>
          </CardContainer>
          <CardContainer>
            <CardHeader>
              <CurrencyDollar size={22} color={themeContext.purple} />
              <CardHeaderText>
                <p>Pagamento</p>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </CardHeaderText>
            </CardHeader>
            <form action="">
              <PaymentContainer>
                <div>
                  <CreditCard size={16} color={themeContext.purple} />
                  <p>Cartão de crédito</p>
                </div>
                <div>
                  <Bank size={16} color={themeContext.purple} />
                  <p>Cartão de débito</p>
                </div>
                <div>
                  <Money size={16} color={themeContext.purple} />
                  <p>Dinheiro</p>
                </div>
              </PaymentContainer>
            </form>
          </CardContainer>
        </div>
        <div>
          <Title>Cafés Selecionados</Title>
          <SelectedCoffeesCard>
            <SelectedCoffee>
              <CoffeeImageAndData></CoffeeImageAndData>
              9,90
            </SelectedCoffee>
          </SelectedCoffeesCard>
        </div>
      </CheckoutGrid>
    </CheckoutContainer>
  )
}
