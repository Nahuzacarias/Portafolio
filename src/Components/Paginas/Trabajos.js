import React from 'react'
import { motion } from 'framer-motion';
import "./Trabajos.css"
import js from "../../Assets/js.png"
import alfa from "../../Assets/alfa.png"
import Button from 'react-bootstrap/Button';
import react from "../../Assets/react.png"
import backend from "../../Assets/backend.png"
import { useTranslation } from 'react-i18next';

const Trabajos = () => {

    const [t,i18n] = useTranslation("global");

    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>

            <section className='container grid'>
                <div class="contenedor">
                    <a href="http://alfafitness.netlify.app" target='blank'>
                        <figure>
                            <img src={alfa} alt="img" />
                            <div class="capa">
                                <h3>{t("desarrolloweb.desarrolloweb")}</h3>
                                <Button variant="secondary" disabled>HTML5</Button>{' '}
                                <Button variant="secondary" disabled>CSS3</Button>{' '}
                                <Button variant="secondary" disabled>SASS</Button>{' '}
                                <Button variant="secondary" disabled>RESPONSIVE</Button>{' '}
                                <Button variant="secondary" disabled>BOOTSTRAP</Button>{' '}
                            </div>
                        </figure>
                    </a>
                </div>
                <div class="contenedor">
                    <a href="https://tubular-kleicha-96bf74.netlify.app" target='blank'>
                        <figure>
                            <img src={js} alt="img" />
                            <div class="capa">
                                <h3>Javascript</h3>
                                <Button variant="secondary" disabled>JAVASCRIPT</Button>{' '}
                                <Button variant="secondary" disabled>{t("opp.opp")}</Button>{' '}
                            </div>
                        </figure>
                    </a>
                </div>

            </section>

            <section className='container grid'>
                <div class="contenedor">
                    <a href="https://cheerful-custard-4a0cff.netlify.app" target='blank'>
                        <figure>
                            <img src={react} alt="img" />
                            <div class="capa">
                                <h3>React Js</h3>
                                <Button variant="secondary" disabled>NODE JS</Button>{' '}
                                <Button variant="secondary" disabled>REACT JS</Button>{' '}
                                <Button variant="secondary" disabled>BOOTSTRAP REACT</Button>{' '}
                                <Button variant="secondary" disabled>FIREBASE</Button>{' '}
                            </div>
                        </figure>
                    </a>
                </div>
                <div class="contenedor">
                    <a href="https://nahuelzacarias.com" target='blank'>
                        <figure>
                            <img src={backend} alt="img" />
                            <div class="capa">
                                <h3>{t("backend.backend")}</h3>
                                <Button variant="secondary" disabled>NODE JS</Button>{' '}
                                <Button variant="secondary" disabled>POSTMAN</Button>{' '}
                                <Button variant="secondary" disabled>EXPRESS</Button>{' '}
                            </div>
                        </figure>
                    </a>
                </div>
            </section>
        </motion.div>
    )
}

export default Trabajos