import React from "react";
import "./Components/Background/Background.css";
import NavBar from "./Components/NavBar/NavBar.js";
import Text from "./Components/Text/Text.js";
import {BrowserRouter,Routes,Route,useLocation} from "react-router-dom"
import Acercademi from "./Components/Paginas/Acercademi"

function App( ) {

  const location = useLocation()
  
  return (
    <BrowserRouter>

    <div className="App">
    
    <NavBar/>


    <Routes>
  
    <Route exact path="*" element={<Text/>}/>
    <Route exact path="/acercademi" element={<Acercademi/>}/>
    
    </Routes>
    </div>


    </BrowserRouter>
  );
}

export default App;
