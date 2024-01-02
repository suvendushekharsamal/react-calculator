import { useState } from 'react'

import './App.css'

function App() {
  const [result, setresult] = useState("")

  const clickHandler=(e)=>{
    setresult(result.concat(e.target.value))
  }

  const clear=()=>{
    setresult("")
  }
  const calculate=()=>{
    setresult(eval(result).toString())
  }

  return (
    <>
       <div className='clac'>
        <input type='text' placeholder='0' id='Answer' value={result}></input>
        <input type='button' value="9" className='button' onClick={clickHandler}></input>
        <input type='button' value={8} className='button' onClick={clickHandler}></input>
        <input type='button' value={7} className='button' onClick={clickHandler}></input>
        <input type='button' value={6} className='button' onClick={clickHandler} id='mar'></input>
        <input type='button' value={5} className='button' onClick={clickHandler}></input>
        <input type='button' value={4} className='button' onClick={clickHandler}></input>
        <input type='button' value={3} className='button' onClick={clickHandler}></input>
        <input type='button' value={2} className='button' id='mar' onClick={clickHandler}></input>
        <input type='button' value={1} className='button' onClick={clickHandler}></input>
        <input type='button' value={0} className='button' onClick={clickHandler}></input>
        <input type='button' value="." className='button' onClick={clickHandler}></input>
        <input type='button' value="+" className='button' id='mar' onClick={clickHandler}></input>
        <input type='button' value="-" className='button' onClick={clickHandler}></input>
        <input type='button' value="*" className='button' onClick={clickHandler}></input>
        <input type='button' value="/" className='button' onClick={clickHandler}></input>
        <input type='button' value="%" className='button' id='mar' onClick={clickHandler}></input>
        <input type='button' value="cls" className='button' id='btn2s' onClick={clear}></input>
        <input type='button' value="=" className='button' id='btn2s' onClick={calculate}></input>

        

       </div>
    </>
  )
}

export default App
