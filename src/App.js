import Input from './components/Users/input';
import './App.css';
import ItemList from './components/ItemList'
import { useState } from 'react';
function App() {
  const [enterArray,setArray]=useState([])
  const renderUser=(uname,uage)=>{
    setArray((prevState)=>{
      return [...prevState,{name:uname , age:uage}]
    })
  }
  return (
    <div className="App">
      <h1>Lets get started</h1>
      <Input adduser={renderUser}/>
      <ItemList user={enterArray} />
    </div>
  );
}

export default App;
