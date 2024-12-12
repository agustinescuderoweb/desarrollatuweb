import React from 'react'
import Link from 'next/link';
import styles from "@/componentes/landing.module.css";
import x from "../../public/icon/x-circle-fill.svg";
import check from "../../public/icon/check-circle-fill.svg";
import como from "../../public/como.png";
import Image from 'next/image';

function landing() {
  return (
    <div className={styles.contenido} id="seccion">
      <div className={styles.guia}>
        <h1>Descarga la guía</h1>
        <h2>¿Cómo impulsar tu presencia en linea con una landing Page?</h2>
        <Image className={styles.imagen} src={como} width={400} alt="imag"></Image>
        <button className={styles.button}><Link href={"https://drive.google.com/file/d/1TiDH8ev3BzUUw1w-GCxVO2165fxM4CCV/view?usp=drive_link"}>Descargar la Guía!</Link></button>
      </div>
      <div className={styles.web}>
         <div className={styles.item}>
        <Image className={styles.check} src={check}  alt="check" />
        <span>Formulario de Contacto</span>
       </div>
    
      <div className={styles.item}>
        <Image className={styles.check} src={check}  alt="check" />
        <span>Responsive Design</span>
      </div>
  
  
      <div className={styles.item}>
        <Image className={styles.check} src={check}  alt="check" />
        <span>Dominio Personalizado</span>
      </div>

   
      <div className={styles.item}>
        <Image className={styles.check} src={check} alt="check" />
        <span>Contactos Redes Sociales</span>
      </div>
  
  
      <div className={styles.item}>
        <Image className={styles.check} src={check}  alt="check" />
        <span>Apartados y secciones</span>
      </div>
       </div>
    </div>
  )
}

export default landing