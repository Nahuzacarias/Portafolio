import React from 'react'
import Text from '../Text/Text'
import {Routes,Route,useLocation} from "react-router-dom"
import Acercademi from '../Paginas/Acercademi'
import {AnimatePresence} from "framer-motion"
import Trabajos from '../Paginas/Trabajos'

const AnimatedRoutes = ({posicion}) => {

    const location = useLocation();

  return (
<AnimatePresence>
    <Routes location={location} key={location.pathname}>

    <Route exact path="*" element={<Text/>}/>
    <Route exact path="/acercademi" posicion= {posicion} element={<Acercademi/>}/>
    <Route exact path="/trabajos" element={<Trabajos/>}/>
    
  

    </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes