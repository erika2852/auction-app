import "./App.css";
import { Route,Routes} from "react-router-dom";
import React , { useState } from 'react';
import First from "./path//First";
import Second from "./path/chat";
import Third from "./path/Third";
import Regisgter from "./path/Register";
import Login from "./path/Login";
import Validation from "./validation";


function App() {
  
  const [auth, setValue] = useState(true);
  const handleChangeValue = () => {
    setValue(true);
    console.log(auth);
  };

  return (
    <div className="App">
      <Routes>
      <Route exact path='/' element={<Validation auth = {auth}/>}>
            <Route exact path='/' element={<Second/>}/>
      </Route>
      <Route exact path="/first" element={<First/>}/>
        <Route exact path="/second" element={<Second/>}/>
        <Route path="/third" element={<Third/>} />
        <Route path="/login" element={<Login  handleButtonClick = {handleChangeValue}/>} />
        <Route path="/register" element={<Regisgter/>} />
      </Routes>
    </div>
  );
}

export default App;
