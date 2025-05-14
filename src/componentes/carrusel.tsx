'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import maquillaje from '../../public/maquillaje.webp';
import montañas from '../../public/montaña.jpg';
import antenas from '../../public/antena.jpg';
import styles from '@/componentes/carrousel.module.css'
import Link from 'next/link';

const Carousel = () => {
  const images = [ 
   { src: maquillaje, link: 'https://ariadnaeventmakeupp.netlify.app/', text: 'Sitio Web creado para una maquilladora'},
   { src: montañas,  link: 'https://www.huellasandinasmountainshop.com.ar/', text: 'Sitio Web creado para un tienda de ropa'},
   { src: antenas, link: 'http://www.rytel.net/', text: 'Sitio Web creado para una empresa de Telecomunicaciones'}
  
  
  ];

  const [currentIndex, setCurrentIndex] = useState(0);



  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambia de imagen cada 3 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, [images.length]);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };


  return (
    <div className={styles.caroul}>
      <div className={styles.check}>
        <span className={styles.span}>Proyectos Realizados</span>
      </div>
    <div className={styles.carousel}>
      <button className={styles.navButton} onClick={handlePrevClick}>‹</button>
      <div className={styles.imagText}>
      <Image className={styles.carouselimag} src={images[currentIndex].src} alt={`Slide ${currentIndex}`} />
      <span className={styles.textOverlay}>{images[currentIndex].text}</span>
      </div>
      <button className={styles.navButton} onClick={handleNextClick}>›</button>
      </div>
      <div className={styles.link}>
      <Link href={images[currentIndex].link} target="_blank" rel="noopener noreferrer">
          <button className={styles.button}>Ir a la Web</button>
        </Link>
      </div>
    </div>
  );
};

export default Carousel;