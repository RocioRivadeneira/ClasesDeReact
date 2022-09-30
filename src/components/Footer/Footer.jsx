import React from 'react'
import { Link } from "react-router-dom";
import "./footer.css"


function Footer(){
   
    return (
      <footer>
        <Link to="/" className='pie'>Sobre nosotros</Link>
        <Link to="/" className='pie'>Financiamiento</Link>
        <Link to="/" className='pie'>Contacto</Link>
        
      </footer>
    )
  }


export default Footer