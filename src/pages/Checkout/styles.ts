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

export const AddressContainer = styled.div`
  background: ${props => props.theme.card};
  margin-bottom: 0.75rem;
  padding: 2.5rem;
`

export const PaymentContainer = styled.div`
  background: ${props => props.theme.card};
`

export const AddressSelection = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const AddressText = styled.div`
  p:first-of-type {
    font-size: 1rem;
    color: ${props => props.theme.subtitle};
  }
  p:last-of-type {
    font-size: 0.875rem;
    color: ${props => props.theme.text};
  }
`