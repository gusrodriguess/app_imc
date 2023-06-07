import Header from './components/header';
import Form from './components/form';
import Display from './components/display';
import './App.css';
import { useState } from 'react';

function App() {
  const [result, setResult] = useState(0);

  const updateResult = (e) => {
      setResult(e);
  } 

  return (
    <div className='App'>
      <Header title="Cálculo do IMC" />
      <div className='Body'>
        <Form handleResult={updateResult} />
        <Display imc={result} />
      </div>
      
    </div>
  );
}

export default App;