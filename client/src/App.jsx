import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [message, setmessage] = useState("");
  useEffect(() => {
fetch("http://72.61.114.23:4000/api/message").then((res)=>res.json())
.then((data)=>setmessage(data)).catch((err)=> console.log(err))
  }, [])
  

  return (
    <>
      <h1>Welcome from client</h1>
      <h2>
      data {message.message}
      </h2>
    </>
  )
}

export default App
