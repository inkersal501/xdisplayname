import React, {useState} from 'react';
import './App.css';

function App() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState(""); 
  const [fullname, setFullname] = useState("");
  
  const handleSubmit= (e)=>{
    e.preventDefault();
    if(firstname!=="" || lastname!==""){
      setFullname(`${firstname} ${lastname}`);
    }else{
      setFullname(``);
    }
  };

  return (
    <div className="App">
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <div>First Name:<input type="text" id="firstName" onInput={(e)=>setFirstname(e.target.value)} required value={firstname}/></div>
        <div>Last Name:<input type="text" id="lastName" onInput={(e)=>setLastname(e.target.value)} required value={lastname}/></div>
        <div><button type="submit">Submit</button></div>        
      </form>
      {fullname!=="" && <div>Full Name: {fullname}</div>}
    </div>
  );
}

export default App;
