import { useEffect } from 'react'
import './App.css'

function App() {

  const getRandomUser = async () => {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err))
    
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
