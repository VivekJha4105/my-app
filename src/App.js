// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const [btnColor, setBtnColor] = useState({
    backgroundColor: 'blue'
  });

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#191e3a';
      showAlert('Dark Mode Disabled.', 'success');
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode Disabled.', 'success');
    }
  }

  const toggleModeRed = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#3a0909';
      showAlert('RedDark Mode Disabled.', 'success');
      setBtnColor({
        backgroundColor: '#48010c'
      });
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode Disabled.', 'success');
      setBtnColor({
        backgroundColor: 'blue'
      });
    }
  }

  return (
    <>
    <BrowserRouter>
    <Navbar title="TextUtility" aboutText="About Us" mode={mode} toggleMode={toggleMode} toggleModeRed={toggleModeRed} />
    <Alert alert={alert} />
    <Routes>
        <Route exact path="/about" element={<About />}/>
        <Route exact path="/" element={<TextForm heading="Enter the text to Analyze" mode={mode} showAlert={showAlert} />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
