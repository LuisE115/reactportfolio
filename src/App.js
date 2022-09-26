import logo from './images/logo.png';
import './App.css';
import Container from './components/Container';
import cardimg from './images/pp.jpg';
import React, { useState } from 'react';


function App() {

  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <div className='hpmenu'>
        <img className="hplogo" src={logo} alt="homepage logo" />

        <div className="info">
          <h1>Luis Enriquez</h1>
          <h2>Full Stack Web Developer</h2>
        </div>
        <div className="navme" onClick={()=>{setOpen(!open)}}>
            <img src={cardimg}></img>
        </div>
        <div className={`navlist ${open? 'act' : 'inactive'}`}>
          <Container />
        </div>
      </div>
    </div>
  );
}

export default App;
