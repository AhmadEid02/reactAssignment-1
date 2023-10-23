import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
function App() {
  const [counter, setcounter] = useState(0);
  let decs=()=>{
    setcounter(counter-1);
  }
  let incer=()=>{
    setcounter(counter+1);
  }
  let setToZero=()=>{
    setcounter(0);
  }
  return (
    <>
      <div className='d-flex flex-column justify-content-center align-items-center'>
      <p>{counter}</p>
      <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-secondary" onClick={decs}>-1</button>
        <button type="button" className="btn btn-secondary" onClick={incer}>+1</button>
        <button type="button" className="btn btn-secondary" onClick={setToZero}>set to zero</button>
      </div>
      </div>
    </>
  )
}

export default App
