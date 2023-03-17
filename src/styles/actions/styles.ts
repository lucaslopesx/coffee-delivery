import styled from 'styled-components'

export const ActionButton = styled.button`
  cursor: pointer;
  display: flex;
  border: 0;
  background: transparent;
  align-items: center;
  padding: 0.75rem 0.5rem;

  color: ${(props) => props.theme.purple};

  transition: color 0.3s;

  &:hover {
    color: ${(props) => props.theme['purple-dark']};
  }
`

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  /* padding: 0.53125rem 0.5rem; */
  border-radius: 6px;
  background: ${(props) => props.theme.button};

  p {
    text-align: center;
    align-self: center;
    width: 1.25rem;
    color: ${(props) => props.theme.title};
    height: 1.3125rem;
    margin-right: 0.25rem;
    margin-left: 0.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
