import React from 'react'
import Header from '@/componentes/header';
import Programas from '@/componentes/programas';
import Landing from '@/componentes/landing';
import Testimonios from '@/componentes/testimonios';
import Contactos from '@/componentes/contactos';


function page() {
  return (
    <div>
        <Header />
        <Programas />
        <Landing />
        <Testimonios />
        <Contactos />
    
    </div>
   
  )
}

export default page