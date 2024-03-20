import { useState, useEffect, useRef } from 'react';
// import './App.css';

function App() {

  const [username, setUsername]=useState("");
  let [nameNationality, setNameNationality]=useState('');
  const inputRef= useRef();

  useEffect(()=> {
    inputRef.current.focus();
    console.log(inputRef.current.focus());
  },[])
  
  useEffect(()=>{
    async function fetchData(username){
      let response = await fetch("https://api.nationalize.io/?name="+username);
      let data =await response.json();
      setNameNationality(data);
      console.log(setNameNationality(data));
    }
    fetchData();
    
  },[username])

  return (
    <div className="App">
    <input ref={inputRef} value={username} onChange={(e) => setUsername(e.target.value)}/>
    <button onClick={()=>}>Submit</button>
    {/* <p>{JSON.stringify(nameNationality)}</p> */}
    </div>
  );
}
export default App;