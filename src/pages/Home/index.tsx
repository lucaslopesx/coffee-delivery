import { coffees } from '../../data/coffees'
import { CoffeeCard } from './components/CoffeeCard'
import { Intro } from './components/Intro'
import { Coffees, CoffeesTitle, CoffesList } from './styles'

export function Home() {
  return (
    <div>
      <Intro />
      <Coffees>
        <CoffeesTitle>Nossos cafés</CoffeesTitle>
        <CoffesList>
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee}></CoffeeCard>
          ))}
        </CoffesList>
      </Coffees>
    </div>
  )
}
