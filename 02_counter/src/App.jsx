import { useState } from 'react'
import './App.css'

function App() {


const [counter, setCounter] =  useState(15)


// let counter = 0;
const  addValue = () => {
  console.log(counter);
// counter = counter+1;
if (counter < 20) {
setCounter(counter+1)
}
else (counter > 20)
  return 20;

}

const removeValue = () => {
  if (counter > 0) {
  setCounter(counter-1)
  }
  else return 0;
}
  return (
    <>
  <h1>chai aur react</h1>
  <h2> counter value:  {counter}</h2>

  <button onClick={addValue}>add value</button> <br/>
  <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
