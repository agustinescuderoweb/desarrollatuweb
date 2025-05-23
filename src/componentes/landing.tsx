import React from 'react'
import Link from 'next/link';
import styles from "@/componentes/landing.module.css";
import check from "../../public/icon/check-circle-fill.svg";
import como from "../../public/como.png";
import Image from 'next/image';

function landing() {
  return (
    <div className={styles.contenido} id="seccion">
      <div className={styles.guia}>
        <h1>Descarga la guía</h1>
        <h2>3 <strong>Propuestas Webs</strong> para conectar con tu servicio</h2>
        <Image className={styles.imagen} src={como} width={400} alt="imag"></Image>
        <button className={styles.button}><Link href={"https://drive.google.com/file/d/1gCLkq6olBTBvsrMM0iNBFUDO0fiy8HOY/view?usp=drive_link"}>Descargar la Guía!</Link></button>
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
