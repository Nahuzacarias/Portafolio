import React from "react";
import "./Components/Background/Background.css";
import NavBar from "./Components/NavBar/NavBar.js";
import {BrowserRouter} from "react-router-dom"
import AnimatedRoutes from "./Components/AnimatedRoutes/AnimatedRoutes";

function App( ) {


  return (
    <BrowserRouter>

    <div className="App">
    
    <NavBar/>
<AnimatedRoutes/>


    </div>
   

    </BrowserRouter>
  );
}

export default App;
