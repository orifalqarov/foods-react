import { Category, Food, HeadLineCards, Hero, Navbar } from "./components"

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <HeadLineCards/>
      <Food/>
      <Category/>
    </div>
  )
}

export default App