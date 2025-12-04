import { useState } from 'react'
import AppHeader from './components/AppHeader.jsx';
import AppMain from './components/AppMain.jsx';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <AppHeader />
        <AppMain />
    </>
  )
}

export default App
