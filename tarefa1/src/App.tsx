import { useState } from 'react';
import './App.css';


function App() {
  const [count, setCount] = useState(0)
  
  const clickCount = () => {
    setCount(count + 1)
  }

  return (
    <div style={{backgroundColor: 'black',
     display: 'flex',
      flexDirection: 'column',
       color: 'white',
        alignItems: 'center',
         height: '100vh',
          justifyContent: 'center'}}>

      <h2>Esta é a quantidade de vezes que o botão abaixo foi clicado</h2>
      <h1>{count}</h1>
  
      <button onClick={clickCount}>Contador</button>
    </div>
  );
}

export default App;
