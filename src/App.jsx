import { useState, useEffect } from 'react'
import './App.css'
import ConsoleLayout from './Console.Layout'

const App = () => {
  const [input, setInput] = useState("")
  const [unit, setUnit] = useState("milesToKm")
  const [result, setResult] = useState("0")

  const Convertor = () => {
    const value = parseFloat(input)
    if (isNaN(value)) {
      setResult("0")
      return
    }
    if (unit === "milesToKm") {
      setResult((value * 1.60934).toFixed(2))
    } else {
      setResult((value / 1.60934).toFixed(2))
    }
  }

  useEffect(() => {
    Convertor()
  }, [input, unit])

  return (
    <ConsoleLayout>
      <div className='wrapper'>
        <h1>Unit Converter</h1>
        <input 
          type="number" 
          placeholder="Enter number..." 
          id="userInput"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <select id="unit" value={unit} onChange={(e) => setUnit(e.target.value)}>
          <option value="milesToKm">Miles to Kilometers</option>
          <option value="kmToMiles">Kilometers to Miles</option>
        </select>
        <p>Result: <span id="resultElement">{result}</span></p>
      </div>
    </ConsoleLayout>
  )
}

export default App

