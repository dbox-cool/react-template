import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <img src="./logo.png" className="w-48 h-auto"/>
        <h1 className="text-2xl">
          get ready you fucker
        </h1>
      </div>
    </>
  )
}

export default App
