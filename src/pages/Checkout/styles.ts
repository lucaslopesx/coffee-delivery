import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  margin: 0rem 10rem 15rem;
`

export const CheckoutGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;

  gap: 2rem;
`

export const Title = styled.p`
  margin-top: 2rem;
  margin-bottom: 1rem;

  font-family: 'Baloo 2', cursive;
  font-size: 1.125rem;
  font-weight: 700;

  color: ${(props) => props.theme.subtitle};
`

export const CardContainer = styled.div`
  background: ${(props) => props.theme.card};
  margin-bottom: 0.75rem;
  padding: 2.5rem;
  border-radius: 6px;
`

export const PaymentContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 0.75rem;

  div {
    border-radius: 6px;
    flex: 1;
    background: ${(props) => props.theme.button};
    padding: 1rem;
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 0.75rem;

    p {
      text-transform: uppercase;
      font-size: 0.75rem;
    }
  }
`

export const CardHeader = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const CardHeaderText = styled.div`
  p:first-of-type {
    font-size: 1rem;
    color: ${(props) => props.theme.subtitle};
  }
  p:last-of-type {
    font-size: 0.875rem;
    color: ${(props) => props.theme.text};
  }
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 2rem;

  row-gap: 1rem;
`

export const InputContainer = styled.input`
  background: ${(props) => props.theme.input};

  border: 1px solid ${(props) => props.theme.button};
  border-radius: 4px;
  color: ${(props) => props.theme.label};
  padding: 0.75rem;
`

export const CepInput = styled(InputContainer)`
  grid-column: 1 / span 2;
  width: 100%;
`

export const CEPContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`

export const StreetInput = styled(InputContainer)`
  width: 100%;
`

export const NumberAndUnitContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 0.75rem;
`

export const NumberInput = styled(InputContainer)`
  grid-column: 1;
  width: 100%;
`

export const UnitInput = styled(InputContainer)`
  grid-column: 2;
  width: 100%;
`

export const NeighborhoodCityAndStateContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr 1fr;
  gap: 0.75rem;
`

export const NeighborhoodInput = styled(InputContainer)`
  grid-column: 1;
  width: 100%;
`

export const CityInput = styled(InputContainer)`
  grid-column: 2;
  width: 100%;
`

export const StateInput = styled(InputContainer)`
  grid-column: 3;
  width: 100%;
`

export const SelectedCoffeesCard = styled.div`
  background: ${(props) => props.theme.card};
  margin-bottom: 0.75rem;
  padding: 2.5rem;
  border-radius: 6px 44px;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const SelectedCoffee = styled.div`
  padding: 0.5rem 0.25rem;

  display: flex;
  flex-direction: row;
  gap: 3.125rem;
`

export const CoffeeImageAndData = styled.div`
  display: flex;
  flex-direction: row;

  gap: 1.25rem;

  img {
    width: 4rem;
    height: 4rem;
  }
`

export const SelectedCoffeeDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  p {
    color: ${(props) => props.theme.subtitle};
  }
`

export const SelectedCoffeeActions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`
export const SelectedCoffeeCount = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background: ${(props) => props.theme.button};

  cursor: pointer;

  p {
    text-align: center;
  }
  span {
    color: ${(props) => props.theme.purple};
    padding: 0.5rem 0.5625rem;
    transition: color 0.3s;
    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`

export const RemoveButton = styled.div`
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  background: ${(props) => props.theme.button};
  color: ${(props) => props.theme.purple};
  border-radius: 6px;
  cursor: pointer;

  transition: 0.3s;

  p {
    font-size: 0.75rem;
    color: ${(props) => props.theme.text};
  }

  &:hover {
    color: ${(props) => props.theme['purple-dark']};
    background: ${(props) => props.theme.hover};

    p {
      color: ${(props) => props.theme.subtitle};
    }
  }
`

export const SelectedCoffeePrice = styled.div`
  font-weight: bold;
  white-space: nowrap;
`

export const Divider = styled.div`
  border-top: 1px solid ${(props) => props.theme.button};
`
