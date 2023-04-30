import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { motion } from 'framer-motion';
import "./Trabajos.css"
import alfa from "../../Assets/alfa.png"
import js from "../../Assets/js.png"


const Trabajos = () => {


  return (
    <motion.div 
              initial={{width: 0}}
              animate={{width:"100%"}}
              exit={{x: window.innerWidth, transition :{duration:0.1}}}>
    <div className='trabajo1'>
    
      <Card className='trabajo2' >
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>EN CONSTRUCCIÓN</Card.Title>
        <Card.Text>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    
    </div>

<section className='trabajo5'>
    <div className='trabajo3'>
    
      <Card className='trabajo4' >
      <Card.Img variant="top " style={{ width: '50rem' }} src={alfa} />
      
    </Card>
    
    </div>

    <div className='trabajo3'>
    
    <Card className='trabajo4' >
      <Card.Img variant="top " style={{ width: '50rem' }} src={js} />
      
    </Card>
    
    </div>
    </section>

    <section className='trabajo5'>
    <div className='trabajo3'>
    
    <Card className='trabajo4' >
      <Card.Img variant="top " style={{ width: '50rem' }} src={alfa} />
      
    </Card>
    
    </div>

    <div className='trabajo3'>
    
    <Card className='trabajo4' >
      <Card.Img variant="top " style={{ width: '50rem' }} src={alfa} />
      
    </Card>
    
    </div>
    </section>
    </motion.div>
  )
}

export default Trabajos