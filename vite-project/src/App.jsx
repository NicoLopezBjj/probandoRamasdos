import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {

  console.log('hola buen dia')
   const [personajes,setPersonajes]=useState([])
   const [page,setPage]=useState(1)

let URLBASE=`https://rickandmortyapi.com/api/character`

useEffect(()=>{

  const getPersonajes= async()=>{

       let response= await axios.get(`${URLBASE}/?${page}`)
      //  console.log(response.data.results)
       setPersonajes(response.data.results)
    }
    getPersonajes()
},[page])
  console.log(personajes)

function nuevapagina(){
setPage(page+1)
}

console.log('hola buenas noches')
  return (
    <>
    <button>Anterior</button>
    <button onClick={nuevapagina}>Siguiente</button>
     {personajes.map((personaje)=>(
      <div key={personaje.id}>

        <h2 className='nombre'>Nombre: {personaje.name}</h2>
        <img src={personaje.image} />
      </div>
     ))}
    </>
  )
}

export default App
