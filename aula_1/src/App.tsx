import { useState } from 'react';
import './App.css'

function App() {
  const [numero, setNumero] = useState<number>(0);

  function acrescimo() {
    setNumero(numero + 1);
  }

  function decrescimo(){
    setNumero(numero - 1)
  }

  return (
    <div className='content'>
      <button onClick={decrescimo}>-</button>
      <p>{numero}</p>
      <button onClick={acrescimo}>+</button>
    </div>
  )
}

export default App
