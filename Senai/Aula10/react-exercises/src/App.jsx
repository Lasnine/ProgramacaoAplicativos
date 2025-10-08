import { useState } from 'react'
import './App.css'
import Clock from './components/Clock'
import Timer from './components/Timer'
import FlashingLights from './components/Flashing Lights'
import TrafficLights from './components/TrafficLights'
import AlterTitle from './components/AlterTitle'
import EvenOrOdd from './components/EvenOrOdd'
import CounterColateral from './components/CounterColateral'
import Inactivity from './components/Inactivity'
import Stopwatch from './components/Stopwatch'
import FastClick from './components/FastClick'
import ProgressBar from './components/ProgressBar'

function App() {
  return (
    <>
      <div className="center">
        <Clock></Clock> {/* exercício 1 */}
        <br/>
        <Timer></Timer> {/* exercício 2 */}
        <br/>
        <CounterColateral></CounterColateral> {/* exercício 3 */}
        <br/>
        <AlterTitle></AlterTitle> {/* exercício 4 */}
        <br/>
        <FlashingLights></FlashingLights> {/* exercício 5 */}
        <br/>
        <TrafficLights></TrafficLights> {/* exercício 6 */}
        <br/>
        <EvenOrOdd></EvenOrOdd> {/* exercício 7 */}
        <br/>
        <Inactivity></Inactivity> {/* exercício 8 */}
        <br/>
        <Stopwatch></Stopwatch> {/* exercício 9 */}
        <br/>
        <FastClick></FastClick> {/* exercício 10 */}
        <br/>
        <ProgressBar></ProgressBar>{/* exercício 11 */}
      </div>
    </>
  )
}

export default App