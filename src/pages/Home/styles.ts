import styled from 'styled-components'

export const Home = styled.div``

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

export const CoffesList = styled.div`
  display: flex;
  column-gap: 2rem;
  flex-wrap: wrap;
  justify-content: flex-start;
  flex-direction: row;
  row-gap: 2.5rem;

  margin-bottom: 10rem;
`
