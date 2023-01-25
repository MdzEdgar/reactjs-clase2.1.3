import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import UserCard from './components/UserCard'

function App() {

  const [user, setUser] = useState()

  // Then y catch con fetch
  // const getRandomUser = async () => {
  //   fetch("https://randomuser.me/api/")
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((err) => console.log(err))
    
  // }

  const getRandomUser = () => {
    axios.get("https://randomuser.me/api/")
    .then((res) => setUser(res.data.results[0]))
    .catch((err) => console.log(err))
  }

  useEffect(() =>{
    getRandomUser()
  }, [])

  //Renderizar los siguientes datos del usuario aleatorio, nombre completo,edad, imagen, celular, email y localizacion

  return (
    <div className="App">
      {user ? (
      <>
        <UserCard user={user} getRandomUser={getRandomUser} />
      </>
      ) : <h1>Cargando...</h1>
      }
    </div>
  )
}

export default App
