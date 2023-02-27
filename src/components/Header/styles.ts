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

  position: relative;
  cursor: pointer;
`

export const Quantity = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  right: 0;
  top: 0;
  transform: translate3d(50%, -50%, 0);

  border-radius: 9999px;

  background-color: ${(props) => props.theme['yellow-dark']};

  text-align: center;

  font-size: 0.75rem;

  color: ${(props) => props.theme.white};

  width: 1.25rem;
  height: 1.25rem;
`
