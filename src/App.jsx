import { useState } from 'react'
import Header from './Header/Header'
import RandoButton from './Header/RandoButton'

import './css/App.css'

function App() {

  const [user, setUser] = useState({
    name: "Jon Bon Jovi",
    job: "Rock Star",
    age: 30
  })

  const handleUserChange = (key, value) => {
    setUser({ ...user, [key]: value });
};

  return (
    <div className="App">
     <Header me={user} editMe={handleUserChange}></Header>
     <RandoButton me={user}></RandoButton>
    </div>
  )
}

export default App
