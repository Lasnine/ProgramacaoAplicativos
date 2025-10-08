import './App.css'
import Square from './components/Square'
import Counter from './components/Counter'
import Visible from './components/Visible'
import Welcome from './components/Welcome'

function App() {
  return (
    <>
    <div className="center">
      <Square></Square>

      <Visible text="lele te amo diva"></Visible>

      <Counter></Counter>

      <Welcome></Welcome>
    </div>
    </>
  )
}

export default App