import './assets/global.css'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex justify-center items-center h-screen'>
        Multi Step Form
      </div>
    </>
  )
}

export default App
