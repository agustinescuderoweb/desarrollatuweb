import React from 'react'
import Image from 'next/image';
import whatsaap from '../../public/icon/whatsaap.svg';
import instagram from '../../public/icon/instagrams.svg';
import youtube from '../../public/icon/youtube.svg';
import styles from '@/componentes/contactos.module.css';

function contactos() {
  return (
    <div className={styles.contenedor}>
      <div className={styles.titulos}>
      <h1>¿Te gustaría llevar tu negocio al siguiente nivel?</h1>
      <h2>Enviáme un mensaje</h2>
      <h3>Seguí mis redes sociales</h3>
      </div>
      <div className={styles.contactos}>
      <a href='https://wa.link/elp2e3'><Image width={30} src={whatsaap} alt="what"></Image></a>
      <a href='https://www.instagram.com/agustinescuderoweb/?next=%2F'><Image width={30} src={instagram} alt="inst"></Image></a>
      <a href='https://www.youtube.com/@agustinescuderoweb'><Image width={30} src={youtube} alt="you"></Image></a>
      </div>
    </div>
  )
}

export default contactos