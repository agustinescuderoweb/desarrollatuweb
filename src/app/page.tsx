import React from 'react'
import Header from '@/componentes/header';
import Programas from '@/componentes/programas';
import Landing from '@/componentes/landing';
import Carousel from '@/componentes/carrusel';
import Beneficios from '@/componentes/beneficios';
import Testimonios from '@/componentes/testimonios';
import Contactos from '@/componentes/contactos';


function page() {
  return (
    <div>
        <Header />
        <Programas />
        <Landing />
        <Carousel />
        <Beneficios />
        <Testimonios />
        <Contactos />
    
    </div>
   
  )
}

export default page