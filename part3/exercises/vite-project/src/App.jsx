import { useState } from 'react'
import './App.css'
import ShoeButton from './components/ShoeButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ShoeButton />
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
    </>
  )
}

export default App
