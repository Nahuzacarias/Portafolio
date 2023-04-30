
import "./Text.css"
import {useTranslation} from "react-i18next"
import { motion } from 'framer-motion';
import Redes from "../Redes/Redes";

const Text = () => {

  
  const [t,i18n] = useTranslation("global");
  

  return (

    <motion.div 
    initial={{width: 0}}
    animate={{width:"100%"}}
    exit={{x: window.innerWidth, transition :{duration:0.1}}}>
      <Redes />
    <div><h1 className="section_main_h1">{t("main.main")}</h1></div>
    
    </motion.div>
    
    )
}

export default Text