import styled from 'styled-components'
import backgroundIntro from '../../../../assets/background-intro.svg'

export const IntroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5.75rem 10rem;

  background: url(${backgroundIntro}) center no-repeat;
  background-size: cover;
`

export const Title = styled.p`
  font-family: 'Baloo 2', cursive;
  color: ${(props) => props.theme['gray-700']};
  font-weight: 800;
  font-size: 3rem;
`

export const Subtitle = styled.p`
  font-size: 1.25rem;
`

export const Items = styled.div`
  margin-top: 4.125rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  grid-column-gap: 2.5rem;
  grid-row-gap: 1.25rem;
  width: 37.5rem;
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1rem;
`

const ITEM_COLORS = {
  dark_yellow: 'yellow-800',
  gray: 'gray-400',
  yellow: 'yellow-500',
  purple: 'purple-500',
} as const

interface ItemProps {
  itemColor: keyof typeof ITEM_COLORS
}

export const ItemIcon = styled.div<ItemProps>`
  background: ${(props) => props.theme[ITEM_COLORS[props.itemColor]]};
  border-radius: 9999px;
  height: 2rem;
  width: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
`
