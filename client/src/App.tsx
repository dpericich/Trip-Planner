import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex">
        <div className="bg-red-800 w-24">
          {/* 1/8 left bar */}
        </div>
        <div className="bg-blue-800 w-full">
          {/* 7/8 main section */}
          <div className="">
            {/* 1/6 top tab */}
          </div>
          <div className="">
            {/* 5/6 main section */}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
