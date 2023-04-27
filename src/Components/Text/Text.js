
import "./Text.css"
import {useTranslation} from "react-i18next"

const Text = () => {

  
  const [t,i18n] = useTranslation("global");

  return (
    <div><h1 className="section_main_h1">{t("main.main")}</h1></div>
  )
}

export default Text