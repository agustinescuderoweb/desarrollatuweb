'use client' // si usás App Router en Next.js 13+

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import camila from '../../public/icon/camilaimg.jpg'
import aridna from '../../public/icon/ariadna.jpg'
import monica from '../../public/icon/Monica.jpg'
import styles from '@/componentes/testimonios.module.css'
import star from '../../public/icon/star.svg'

const testimoniosData = [
  {
    texto: '"Realmente muy conforme, creo mi tienda de ropa conforme a mis gustos y preferecias, muy satisfecha"',
    nombre: 'Camila Escudero',
    imagen: camila,
  },
  {
    texto: '"Creo mi landing page de mi tienda de maquillaje, excelente trabajo mejoro mi performance"',
    nombre: 'Ariadna Escudero',
    imagen: aridna,
  },
  {
    texto: '"Tengo mi negocio de arte, gracias a mi web puedo mostrar quien soy en linea y a que me dedico"',
    nombre: 'Mónica Miralles',
    imagen: monica,
  },
]

function Testimonios() {
  const [index, setIndex] = useState(0)

  const siguiente = () => {
    setIndex((prev) => (prev + 1) % testimoniosData.length)
  }

  const anterior = () => {
    setIndex((prev) => (prev - 1 + testimoniosData.length) % testimoniosData.length)
  }

  useEffect(() => {
    const intervalo = setInterval(() => {
      siguiente()
    }, 5000) // cada 5 segundos

    return () => clearInterval(intervalo) // limpieza
  }, []) // se ejecuta solo una vez al montar

  const { texto, nombre, imagen } = testimoniosData[index]

  return (
    <div className={styles.contenedor}>
      <div className={styles.testimonio}>Testimonios</div>

      <div className={styles.items}>
        <div className={styles.content}>
        <div className={styles.star}>
          {[...Array(5)].map((_, i) => (
            <Image key={i} src={star} alt="star" />
          ))}
        </div>
        <h1 className={styles.texto}>{texto}</h1>
        <Image className={styles.imagen} src={imagen} alt={nombre} />
         <h2 className={styles.nombre}>{nombre}</h2>
        </div>
      </div>
    </div>
  )
}

export default Testimonios
