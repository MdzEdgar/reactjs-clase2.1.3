import { useEffect } from 'react'
import './App.css'

function App() {

  const getRandomUser = async () => {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json()
    console.log(data)
  }

  useEffect(() =>{
    getRandomUser()
  }, [])

  return (
    <div className="App">
      <h1>Hola Mundo</h1>
    </div>
  )
}

export default App
