
import './App.css';
import Child from './Child';
import { useState } from 'react';

function App() {
  const [childname,setChildname]=useState("Default");
  const receiveName=(name)=>{
    setChildname(name);
  }
  return (
    <div className="App">
      <h2>Hello React I'm Parent</h2>
      <Child setfun={receiveName}/>
      <p>Parent:My child said:{childname}</p>
    </div>
  );
}

export default App;
