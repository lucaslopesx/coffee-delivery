import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Minus,
  Money,
  Plus,
  Trash,
} from 'phosphor-react'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import {
  CoffeeImageAndData,
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
  SelectedCoffeeDetails,
  SelectedCoffeeActions,
  SelectedCoffeeCount,
  RemoveButton,
  SelectedCoffeePrice,
  Divider,
} from './styles'
import { CoffeeContext } from '../../contexts/CoffeeContext'
import { coffees } from '../../data/coffees'

function getCoffeImage(image: string) {
  return `/src/assets/${image}`
}

export function Checkout() {
  const themeContext = useContext(ThemeContext)

  const { cartItems, addCoffeeQuantityInCart, subtractCoffeeQuantityInCart } =
    useContext(CoffeeContext)

  const cartCoffees = coffees
    .filter((coffee) => cartItems.some((item) => item.id === coffee.id))
    .map((coffee) => {
      const cartItem = cartItems.find((item) => item.id === coffee.id)
      return { ...coffee, quantity: cartItem?.quantity }
    })

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
            {cartCoffees.map((item) => (
              <>
                <SelectedCoffee key={item.id}>
                  <CoffeeImageAndData>
                    <img src={getCoffeImage(item.photo)} alt="" />
                    <SelectedCoffeeDetails>
                      <p>{item.name}</p>
                      <SelectedCoffeeActions>
                        <SelectedCoffeeCount>
                          <span
                            onClick={() =>
                              subtractCoffeeQuantityInCart(item.id)
                            }
                          >
                            <Minus size={14} />
                          </span>
                          <p>{item.quantity}</p>
                          <span
                            onClick={() => addCoffeeQuantityInCart(item.id)}
                          >
                            <Plus size={14} />
                          </span>
                        </SelectedCoffeeCount>
                        <RemoveButton>
                          <Trash size={16} />
                          <p>REMOVER</p>
                        </RemoveButton>
                      </SelectedCoffeeActions>
                    </SelectedCoffeeDetails>
                  </CoffeeImageAndData>
                  <SelectedCoffeePrice>
                    <p>R$ {item.price.toFixed(2)}</p>
                  </SelectedCoffeePrice>
                </SelectedCoffee>
                <Divider />
              </>
            ))}
          </SelectedCoffeesCard>
        </div>
      </CheckoutGrid>
    </CheckoutContainer>
  )
}
