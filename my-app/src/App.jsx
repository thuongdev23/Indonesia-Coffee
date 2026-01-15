import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Hero from './Hero'
import MapSection from './MapSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero/>
      {/* <MapSection/> */}
    </>
  )
}

export default App
