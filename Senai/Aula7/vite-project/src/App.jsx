import './App.css'
import BoschPrimary from './components/BoschPrimary/BoschPrimary'
import BoschSecondary from './components/BoschSecondary/BoschSecondary'
import BoschTertiary from './components/BoschTertiary/BoschTertiary'

function App() {
  return (
    <>
      <BoschPrimary text="Bosch Primary"/>
      <BoschSecondary text="Bosch Secondary"/>
      <BoschTertiary text="Bosch Tertiary"/>
    </>
  )
}

export default App