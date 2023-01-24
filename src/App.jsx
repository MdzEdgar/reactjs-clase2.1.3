import axios from 'axios'
import { useEffect } from 'react'
import './App.css'

function App() {

  // Then y catch con fetch
  // const getRandomUser = async () => {
  //   fetch("https://randomuser.me/api/")
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((err) => console.log(err))
    
  // }

  const getRandomUser = () => {
    axios.get("https://randomuser.me/api/")
    .then((res) => console.log(res.data))
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
