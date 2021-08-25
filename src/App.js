import './App.css';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from './components/About';
import React, {useState} from 'react'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

// import About from "./components/About";
export default App;

function App() {

  const [mode, setMode] = useState('light')

  const toggleMode = () => {
      if(mode==='light'){
        setMode('dark');
        document.body.style.backgroundColor = '#042743';
      }
      else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
      }
  }

  return (
    <>
    {/* <Router> */}
      <Navbar title = "TextUtils" 
              component1 = "Home"
              component2 = "About"
              mode = {mode}
              toggleMode = {toggleMode}/>
      <div className="container my-3"></div>
        {/* <Switch> */}
            {/* <Route exact path="/about"> */}
              {/* <About /> */}
            {/* </Route>  */}
            {/* <Route exact path="/"> */}
              <div className="container my-4">
                <TextForm heading = "Enter Your Text Below" mode = {mode}/>
              </div>
            {/* </Route> */}
        {/* </Switch> */}
    {/* </Router> */}

      {/* when we forgot to use any name for props item */}
      {/* <Navbar/> */}
    </>
  );
}
