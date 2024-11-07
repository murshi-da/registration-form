import { useState } from 'react'

import './App.css'
import RegisterationForm from './componets/RegisterationForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <RegisterationForm/>
     
    </>
  )
}

export default App
