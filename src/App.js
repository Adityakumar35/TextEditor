// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
  }

  const toggleMode = ()=>{
    if(mode==='light'){
  setMode('dark');
  document.body.style.backgroundColor = '#06093b';
  showAlert("Dark mode has been enabled", "success")
  // document.body.style.color = 'white';
  
}else{
  setMode('light');
  document.body.style.backgroundColor = 'white';
  showAlert("Light mode has been enabled", "success")
    }
  }
  return (
  <>
{/* <Navbar title="Textutils"  aboutText="About us" mode={mode} toggleMode={toggleMode}/> */}
<Navbar title="Textutils"  mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
<div className="container my-3"/>
<TextForm heading="Enter the text to analyze below" mode={mode}/>
{/* <About/> */}
{/* </div> */}
  </>
  );
}

export default App;
