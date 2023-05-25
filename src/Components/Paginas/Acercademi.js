import React from 'react'
import "./Acercademi.css"
import { motion } from 'framer-motion';
import Redes from '../Redes/Redes';
import { useTranslation } from 'react-i18next';


const Acercademi = () => {

const posicion = "posicion"
const [t,i18n] = useTranslation("global");

       return(
              
              <motion.div 

              initial={{width: 0}}
              animate={{width:"100%"}}
              exit={{x: window.innerWidth, transition :{duration:0.1}}}>
                     <section className='pos3'>
                  <div>
              <p className={posicion}>{t("acercademi2.acercademi2")}
              <div>
              <Redes />
              </div></p>
              
              
             <p className={posicion}> {t("acercademi3.acercademi3")}</p>
              </div>

              
              </section>
              </motion.div>
              )
      };

export default Acercademi

