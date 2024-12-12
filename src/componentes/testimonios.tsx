import React from 'react'
import Image from 'next/image'
import camila from '../../public/icon/camilaimg.jpg'
import aridna from '../../public/icon/ariadna.jpg'
import monica from '../../public/icon/Monica.jpg'
import styles from '@/componentes/testimonios.module.css'
import star from '../../public/icon/star.svg'

function testimonios() {
  return (
    <div className={styles.contenedor}>
        <div className={styles.testimonio}>Testimonios</div>
        <div className={styles.contenido}>
            <div className={styles.items}>
                <div className={styles.star}>
                <Image src={star} alt="start"></Image><Image src={star} alt="start"></Image><Image src={star} alt="start"></Image><Image src={star} alt="start"></Image><Image src={star} alt="start"></Image>
                </div>
                <h1>Realmente muy conforme, creo mi tienda de ropa conforme a mis gustos y preferecias, muy satisfecha</h1>
                <h2>Camila Escudero</h2>
                <Image className={styles.imagcam} src={camila} alt="cami"></Image>
            </div>
            <div className={styles.items}> 
            <div className={styles.star}>
            <Image src={star} alt="start"></Image><Image src={star} alt="start"></Image><Image src={star} alt="start"></Image><Image src={star} alt="start"></Image><Image src={star} alt="start"></Image>
                </div>
                <h1>Creo mi landing page de mi tienda de maquillaje, excelente trabajo mejoro mi performance</h1>
                <h2>Ariadna Escudero</h2>
                <Image className={styles.imagari}  src={aridna} alt="ari"></Image>
            </div>
            <div className={styles.items}>
            <div className={styles.star}>
            <Image src={star} alt="start"></Image><Image src={star} alt="start"></Image><Image src={star} alt="start"></Image><Image src={star} alt="start"></Image><Image src={star} alt="start"></Image>
                </div>
                <h1>Tengo mi negocio de arte, gracias a mi web puedo mostrar quien soy en linea y a que me dedico</h1>
                <h2>Mónica Miralles</h2>
                <Image className={styles.imagmoni} src={monica} alt="moni"></Image>
                
            </div>
        </div>
    </div>
  )
}

export default testimonios