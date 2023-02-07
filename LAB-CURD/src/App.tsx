import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Effect from './component/Effect'
import LogIn from './component/LogIn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <LogIn/>      
    </div>
  )
}

export default App
