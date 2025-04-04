import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'

function App() {


   const actors = ['flaming', 'afridi', 'ponting'];

   const singers = [
    {id: 1, name: 'Dr . Mahfuzur Rahman', age:68},
    { id:2, name: 'Eva Rahman', age:38},
    {id:3, name: 'Shuvro Dev',  age:58},
    {id:4, name: 'Pritom', age:28},

   ]

  return (
    <>
      <h1>Vite + React</h1>
      
      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }

      <Actor name={"mikel hug"}></Actor>

      {
        actors.map(actor =><Actor name={actor}></Actor>)
      }
      {/* <Todo task="Learn React" isDone={true} ></Todo>
      <Todo task="Explore Core Concept"  isDone={false}></Todo>
      <Todo task="Try JSX" isDone={true} ></Todo> */}
      {/* <Person></Person>
      <Device name = "Laptop" price = "55"></Device>
      <Device name = "mobile"></Device>
      <Device></Device>
      <Student grade={12} score={78}></Student>
      <Student grade = "7" score = "99"></Student>
      <Student></Student>
      <Developer></Developer> */}
    </>
  )
}



function Device(props){
  //console.log(props)
  return <h3>This is device:{props.name}  price:{props.price} </h3>
}

function Person(){
  const age =30;
  return  <h3>I am a reat developer. my age is : {age}</h3>
}


const {grade, score} = {grade: '7', score: '99'};
function Student({grade, score}){
  console.log(grade, score);
  return(
    <div className='student'>
      <h3>This is a student</h3>
      <p>Class: {grade}</p>
      <p>Score: {score}</p>
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
