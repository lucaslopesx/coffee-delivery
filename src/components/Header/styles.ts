import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 6.5rem;
  padding: 2rem 10rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
`

export const Location = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  background: ${(props) => props.theme['purple-light']};
  padding: 0.5rem;
  border-radius: 6px;

  color: ${(props) => props.theme['purple-dark']};
`

export const Cart = styled.div`
  background: ${(props) => props.theme['yellow-light']};
  padding: 0.5rem;
  border-radius: 6px;

  display: flex;
  justify-content: center;
  align-items: center;
`
