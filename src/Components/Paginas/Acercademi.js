import React from 'react'
import "./Acercademi.css"
import { motion } from 'framer-motion';


const Acercademi = () => {

const posicion = "posicion"

       return(
              
              <motion.div 

              initial={{width: 0}}
              animate={{width:"100%"}}
              exit={{x: window.innerWidth, transition :{duration:0.1}}}>
                     <section className='pos3'>
                  <div>
              <p className={posicion}>Soy un desarrollador Full-Stack con sede en Buenos Aires. Desde mi infancia, me han apasionado las ciencias exactas, lo que me ha permitido desarrollar una mentalidad analítica y un profundo interés por entender cómo funcionan las cosas.
      
              Soy una persona comprometida, bien organizada y un resolvedor de problemas, lo que me permite enfrentar desafíos con la confianza necesaria para superar cualquier obstáculo que se presente.</p>
              
             <p className={posicion}> Me interesa todo el proceso de desarrollo web, desde el front-end hasta el back-end, y cuento con sólidos conocimientos en lenguajes y herramientas como HTML, CSS, SASS, React, Node.js y otros.
      
              Como desarrollador Full-Stack, me aseguro de entender completamente los objetivos y necesidades de cada proyecto para poder crear soluciones a medida y de alta calidad. Me gusta trabajar en equipo y colaborar con otros profesionales para lograr resultados excepcionales.
      
              Soy un ser humano que sigue aprendiendo y siempre estoy en busca de nuevos desafíos que me permitan seguir creciendo profesionalmente.</p>
              </div>

              </section>
      
       
              </motion.div>
              )
      };

export default Acercademi

