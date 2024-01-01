import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {

  return (
    <>
      <h1 className = 'bg-yellow-500 mb-4 text-black p-4 rounded-xl'> tailwind test</h1>
      <Card channelName = "abcd"/>
      <Card channelName = "abc"/>
      <Card channelName = "abcd"/>
      <Card />

    </>
  )
}

export default App
