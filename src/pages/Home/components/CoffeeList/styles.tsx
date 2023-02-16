import styled from 'styled-components'

export const CoffeeCard = styled.div`
  background: ${(props) => props.theme.card};
  position: relative;
  padding: 0 1.25rem;
  width: 16rem;
  height: 19.375rem;
  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.25rem;
  }
`

export const Coffees = styled.div`
  margin: 0 10rem;
`

export const CoffeesTitle = styled.p`
  margin-top: 2rem;
  margin-bottom: 3.375rem;

  font-family: 'Baloo 2', cursive;
  font-size: 2rem;
  font-weight: 800;

  color: ${(props) => props.theme.subtitle};
`

export const CoffeeTag = styled.p`
  background: ${(props) => props.theme['yellow-light']};
  padding: 0.25rem 0.5rem;
  border-radius: 100px;

  margin-top: 0.75rem;

  font-size: 0.625rem;
  font-weight: bold;
  color: ${(props) => props.theme['yellow-dark']};
`

export const CoffeeCardHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CoffeeCardFooter = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  margin-bottom: 1.25rem;

  gap: 1.4375rem;
`

export const CoffeCardTitle = styled.p`
  font-family: 'Baloo 2', cursive;
  font-size: 1.25rem;
  font-weight: bold;
  margin-top: 1rem;
  line-height: 1.3;
  color: ${(props) => props.theme.subtitle};
`

export const CoffeCardDescription = styled.p`
  color: ${(props) => props.theme.label};
  line-height: 1.3;
  text-align: center;
  margin-top: 0.5rem;

  font-size: 0.875rem;
`

export const CoffeePrice = styled.p`
  color: ${(props) => props.theme.text};
  font-family: 'Baloo 2', cursive;
  font-weight: 800;
  font-size: 1.5rem;
  span {
    font-size: 0.875rem;
  }
`

export const CoffeeQuantity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 0.5rem;
`

export const ActionButton = styled.button`
  cursor: pointer;
  display: flex;
  border: 0;
  background: transparent;
  align-items: center;
`

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.53125rem 0.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme.button};

  p {
    text-align: center;
    align-self: center;
    width: 1.25rem;
    height: 1.3125rem;
    margin-right: 0.25rem;
    margin-left: 0.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const ActionCart = styled.div`
  background: ${(props) => props.theme['purple-dark']};

  padding: 0.5rem;
  border-radius: 6px;

  display: flex;
  justify-content: center;
  align-items: center;
`