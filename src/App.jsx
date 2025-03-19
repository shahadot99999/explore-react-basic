import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <Person></Person>
      <Device name = "Laptop" price = "55"></Device>
      <Device name = "mobile"></Device>
      <Device></Device>
      <Student></Student>
      <Student grade = "7" score = "99"></Student>
      <Student></Student>
      <Developer></Developer>
    </>
  )
}


const {grade, score} = {grade: '7', score: '99'};
function Device(props){
  //console.log(props)
  return <h3>This is device:{props.name}  price:{props.price} </h3>
}

function Person(){
  const age =30;
  return  <h3>I am a reat developer. my age is : {age}</h3>
}

function Student(props){
  console.log(props);
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
