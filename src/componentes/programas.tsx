'use client'

import React from 'react'
import Image from 'next/image'
import bull from "../../public/icon/bullseye.svg"
import rain from "../../public/icon/rainbow.svg"
import book from "../../public/icon/bookmark-check.svg"
import styles from "@/componentes/programas.module.css"


function planes() {
  return (
    <div className={styles.programas}>
      <div className={styles.contenido}>
        <div className={styles.cardone}> 
          <div className={styles.content}>
            <Image className={styles.svg} src={bull} alt="bull"></Image>
            <h1 className={styles.titulo}>Diseños Web Personalizados</h1>
            <p className={styles.parrafos}>Diseños de web que destacan la identidad de tu marca</p>
            <a href='https://wa.link/elp2e3'><button className={styles.mas}>Más Info</button></a>
          </div>
        </div>
        <div className={styles.cardtwo}>
          <div className={styles.content}>
            <Image className={styles.svg} src={rain} alt="rain"></Image>
            <h1 className={styles.titulo}>Responsive <br></br> Desing</h1>
            <p className={styles.parrafos}>Sitios Web con adaptabilidad a distintos dispositivos</p>
             <a href='https://wa.link/elp2e3'><button className={styles.mas}>Más Info</button></a>
          </div>
        </div>
        <div className={styles.cardthree}>
          <div className={styles.content}>
            <Image className={styles.svg} src={book} alt="book"></Image>
            <h1 className={styles.titulo}>Marketing Digital</h1>
            <p className={styles.parrafos}>Diseños de web con atractivo e interes comercial adaptable</p>
             <a href='https://wa.link/elp2e3'><button className={styles.mas}>Más Info</button></a>
          </div>
        </div>
        </div>
    </div>
  )
}

export default planes
