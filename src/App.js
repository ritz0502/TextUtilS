//import logo from './logo.svg';
import './App.css'; //importing css file
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {

  const[mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      // document.title = 'TextUtilS-Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      // document.title = 'TextUtilS-Light Mode';
    }
  }

  return (
    // this is jsx- modified html
    <>
    <Router>
    <Navbar title="TextUtilS" aboutText="About" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
      <Route path="/about" element={<About mode={mode} />} />
      <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyse" mode={mode} />} />
    </Routes>
    </div>
    </Router>

    
    </>
    
    
    
  );
}

export default App;