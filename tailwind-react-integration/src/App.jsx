import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css' // Tailwind styles

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800">
      <div className="flex gap-8 mb-6">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="w-16 h-16 hover:scale-110 transition-transform" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="w-16 h-16 hover:scale-110 transition-transform" alt="React logo" />
        </a>
      </div>

      <h1 className="text-3xl font-bold mb-4">Vite + React + Tailwind</h1>

      <div className="bg-white shadow-md rounded-lg p-6 text-center">
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600 transition-colors"
        >
          count is {count}
        </button>
        <p className="mt-3 text-sm text-gray-600">
          Edit <code className="bg-gray-100 px-1 rounded">src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="mt-6 text-gray-500 text-sm">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
