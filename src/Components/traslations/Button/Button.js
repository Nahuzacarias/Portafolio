import Dropdown from 'react-bootstrap/Dropdown';
import {useTranslation} from "react-i18next";
import "./Button.css";
import arg from "../../../Assets/argentina.png"
import eeuu from "../../../Assets/eeuu.png"


function Button() {

    const [t,i18n] = useTranslation("global");
  return (
    <Dropdown>
      <Dropdown.Toggle className='color1' id="dropdown-basic" variant="outline-light">
       <img className="arg"src={arg} alt="arg"/>/<img className="eeuu"src={eeuu} alt="eeuu"/>
      </Dropdown.Toggle>

      <Dropdown.Menu className='color1'>
        <Dropdown.Item  className='tamaño' href="#/action-1"  onClick={()=>i18n.changeLanguage("es")}><img className='arg' src={arg} alt="arg"/></Dropdown.Item>
        <Dropdown.Item className='tamaño' href="#/action-2" onClick={()=>i18n.changeLanguage("en")}><img className='eeuu' src={eeuu} alt="eeuu"/></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Button;





