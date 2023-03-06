import styled from "styled-components";

export const CheckoutContainer = styled.div`
  margin: 0 10rem;
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

export const AddressAndPayment = styled.div`
  border-radius: 6px;
`

export const CardContainer = styled.div`
  background: ${props => props.theme.card};
  margin-bottom: 0.75rem;
  padding: 2.5rem;
`

export const PaymentContainer = styled.div`
  background: ${props => props.theme.card};
`

export const CardHeader = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const CardHeaderText = styled.div`
  p:first-of-type {
    font-size: 1rem;
    color: ${props => props.theme.subtitle};
  }
  p:last-of-type {
    font-size: 0.875rem;
    color: ${props => props.theme.text};
  }
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 2rem;

  row-gap: 1rem;
`

export const InputContainer = styled.input`
  background: ${props => props.theme.input};

  border: 1px solid ${props => props.theme.button};
  border-radius: 4px;
  color: ${props => props.theme.label};
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