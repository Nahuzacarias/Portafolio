
import linkedin from "../../Assets/linkedin.svg"
import github from "../../Assets/github.svg"
import "./Redes.css"
import gmail from "../../Assets/gmail.svg"


const Redes = () => {
  

  const icon = "icon"
  return (
    <>
    <a className={icon}href="https://github.com/Nahuzacarias" target='blank'><img className={`imagen1 github`} src={github} alt="github"/></a>
    <a className={icon} href="https://www.linkedin.com/in/zacarias-nahuel/" target='blank'><img className='imagen1' src={linkedin} alt="linkedin"/></a>
    <a className={icon}href="mailto:zacarias.nahu@gmail.com" target='blank'> <img className='imagen1 gmail' src={gmail} alt="gmail"/></a>
    </>

  )
}

export default Redes