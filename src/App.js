import './App.css';
import Navbar from './component/Navbar'
import TextForm from './component/TextForm';
import About from './component/About';
import React, {useState} from 'react'
import Alert from './component/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {
  const[mode,setMode] = useState('light');
  const[alert,setAlert]=useState(null);
  const showAlert = (message,type) => {
    setAlert({
      msg : message,
      type : type
  })
  setTimeout(() => {
    setAlert(null);
  }, 1500);

  
  }
  const toggleMode = () => {
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode is enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode is enabled","success");
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" abouttext="About Us" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
        <Route exact path ="/about" element={<About mode={mode}/>}/>
          {/* <Route exact path="/about">
            <About />
          </Route> */}
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter ,Character Counter, Remove Extra Spaces" mode={mode}/>}/>
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
