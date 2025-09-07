import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   const [counter, setCounter] = useState(15)

  const addValue = () => {
    if(counter < 20){
    console.log(`value added : ${counter}` ,Math.random())
    setCounter(counter+1)
    }
  }

  const removeValue = () => {
    if(counter > 0){
    console.log(`value added : ${counter}` ,Math.random())
    setCounter(counter-1)
    }
  }

  return (
    <>
      <h2> hello Love </h2>
      <h3> counter : {counter}</h3>

      <button onClick={addValue}> Add count</button>
      
      <button onClick={removeValue}> remove count</button>
      
    </>
  )
}

export default App
