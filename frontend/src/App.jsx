import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(()=>{
    axios.get("/api/jokes")
    .then((response)=>{
      setJokes(response.data)
    })
    .catch((error)=>{
      console.log(error);
    })
  }, [])
      

  return (
  <>
    <h1>FULL STACK LEARNING</h1>
    <p>JOKES: {jokes.length}</p>

    {
      jokes.map((joke)=>(
        <div key={joke.id}>
          <h3>TITLE: {joke.Title}</h3>
          <p>CONTENT: {joke.Content}</p>
        </div>
      ))
    }
  </>
  )
}

export default App
