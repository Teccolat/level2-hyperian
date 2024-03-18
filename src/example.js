import { useState, useEffect, useRef } from 'react';
// import './App.css';

function App() {

  const [username, setUsername]=useState("");
  const inputRef= useRef();

  useEffect(()=> {
    inputRef.current.focus();
  },[])

  return (
    <div className="App">
    <input ref={inputRef} value={username} onChange={(e) => setUsername(e.target.value)}/>
    <button></>
    </div>
  );
}
export default App;



