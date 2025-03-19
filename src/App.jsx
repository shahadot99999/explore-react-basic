import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <Person></Person>
      <Student></Student>
      <Developer></Developer>
    </>
  )
}

function Person(){
  const age =30;
  return  <h3>I am a reat developer. my age is : {age}</h3>
}

function Student(){
  return(
    <div className='student'>
      <h3>This is a student</h3>
      <p>Name:</p>
      <p>Age:</p>
    </div>
  )
}

function Developer(){

  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple'
  }

  return(
    <div style={developerStyle} >
      <h5>Dev</h5>
      <p>Coding</p>
    </div>
  )
}

export default App
