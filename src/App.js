import logo from './logo.svg';
import './App.css';
import Child from './Component/Child';
import { useState } from 'react';

function App() {

  const [position, setPosition] = useState("bottom");

  return (
    <div className="App">
      <Child position={position} />
    </div>
  );
}

export default App;
