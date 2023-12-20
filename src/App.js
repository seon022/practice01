import './App.css';
import Viewer from './component/Viewer';
import Controller from './component/Controller';
import { useState } from 'react';

function App() {
    const [result, setResult] = useState(0);
    const handleClick = (i) => {
        setResult(result + i);
    };

  return (
    <div className="App">
        <Viewer result={result}/>
        <Controller handleClick={handleClick}/>
    </div>
  );
}

export default App;
