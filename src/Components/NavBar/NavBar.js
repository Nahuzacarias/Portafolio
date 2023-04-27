import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";
import { useState } from "react";
import DarkMode from "../DarkMode/DarkMode";
import { useTranslation } from "react-i18next";
import Button from "../traslations/Button/Button.js"
import { Link } from "react-router-dom";

function NavBar({ subrayado, onsetUnderline }) {
    const [t, i18n] = useTranslation("global");

    const [Underline, setUnderline] = useState(false);
    const [Underline2, setUnderline2] = useState(false);
    const [Underline3, setUnderline3] = useState(false);
    const [Underline4, setUnderline4] = useState(false);


    const subr = Underline ? "subrayado" : "";
    const subr2 = Underline2 ? "subrayado" : "";
    const subr3 = Underline3 ? "subrayado" : "";
    const subr4 = Underline4 ? "subrayado" : "";

    return (
        <>
            <header className="clase_header">
                <div className="">
                    <DarkMode />
                </div>
                <div className="nav3">
                    <container>
                        <ul className="nav hola 2">
                            <Nav className="me-auto">


                            <li clasName="nav-item">
                                    <Nav.Link
                                    as={Link}
                                    to="/*"
                                        className={`nav-link Link clase_header__1 ${subr4}`}
                                        onMouseOver={() => setUnderline4(!subrayado)}
                                        onMouseOut={() => setUnderline4(subrayado)}
                                        href="#"
                                    >
                                        {t("home.home")}
                                    </Nav.Link>
                                </li>

                                <li className="nav-item">
                                    <Nav.Link
                                        as={Link}
                                        to="/acercademi"
                                        className={`nav-link active clase_header__1 ${subr2}`}
                                        onMouseOver={() => setUnderline2(!subrayado)}
                                        onMouseOut={() => setUnderline2(subrayado)}
                                        aria-current="page"
                                    >
                                        {t("acercademi.acercademi")}
                                    </Nav.Link>
                                </li>


                                <li className="nav-item clase_header__1">
                                    <Nav.Link
                                        as={Link}
                                        to="/acercademi"
                                        className={`nav-link  ${subr}`}
                                        onMouseOver={() => setUnderline(!subrayado)}
                                        onMouseOut={() => setUnderline(subrayado)}
                                    >
                                        {t("projects.projects")}{" "}
                                    </Nav.Link>
                                </li>
                                <li clasName="nav-item clase_header__1">
                                    <Nav.Link
                                        className={`nav-link Link ${subr3}`}
                                        onMouseOver={() => setUnderline3(!subrayado)}
                                        onMouseOut={() => setUnderline3(subrayado)}
                                        href="#"
                                    >
                                        {t("contacto.contacto")}
                                    </Nav.Link>
                                </li>
                            </Nav>
                        </ul>
                    </container>
                </div>
                <div>
                    <Button />
                </div>
            </header>
        </>
    );
}

export default NavBar;
