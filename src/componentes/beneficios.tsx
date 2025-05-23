import React from 'react'
import style from '@/componentes/beneficios.module.css'

function beneficios() {
  return (
    <div className={style.contenedor}>
      <div className={style.titulo}><h1>✅ Ventajas reales de contar con tu propia web</h1></div>
      <div className={style.filas}>
      <div className={style.cajas}>
        <div className={style.number}><h1>01</h1></div>
        <div className={style.textos}><h1>Disponibilidad 24/7</h1>
        <h2>Tu negocio no duerme. Una web está activa todo el día, todos los días, sin importar feriados o domingos.</h2></div>
        
      </div>
      <div className={style.cajas}>
        <div className={style.number}><h1>02</h1></div>
        <div className={style.textos}>
        <h1>Imagen profesional</h1>
        <h2>Tener una web transmite seriedad y confianza. Da una mejor primera impresión que solo tener redes sociales.</h2></div>
      </div>
      <div className={style.cajas}>
        <div className={style.number}><h1>03</h1></div>
        <div className={style.textos}><h1>Control total del contenido</h1>
        <h2>No dependés de algoritmos ni de cambios en redes sociales. Podés mostrar tu marca como querés.</h2></div>
        
      </div>
      </div>
      <div className={style.filas}>
      <div className={style.cajas}>
        <div className={style.number}><h1>04</h1></div>
        <div className={style.textos}><h1>Mejor posicionamiento en Google (SEO)</h1>
        <h2>Una web bien hecha puede aparecer en buscadores y atraer personas interesadas sin pagar publicidad.</h2></div>
       
      </div>
      <div className={style.cajas}>
        <div className={style.number}><h1>05</h1></div>
        <div className={style.textos}><h1>Conversión optimizada</h1>
        <h2>Está pensada para que las personas hagan una acción: te compren, te escriban, se registren, etc.</h2></div>
       
      </div>
      <div className={style.cajas}>
        <div className={style.number}><h1>06</h1></div>
        <div className={style.textos}><h1>Velocidad y experiencia de usuario</h1>
        <h2>Una web rápida y clara mejora la experiencia y hace que las personas se queden más tiempo.</h2></div>
        
      </div>
      </div>
      <div className={style.filas}>
      <div className={style.cajas}>
        <div className={style.number}><h1>07</h1></div>
        <div className={style.textos}><h1>Adaptación a dispositivos móviles</h1>
         <h2>El 90% entra desde el celular. Si tu web no está adaptada, perdés oportunidades.</h2></div>
        
      </div>
      <div className={style.cajas}>
        <div className={style.number}><h1>08</h1></div>
        <div className={style.textos}><h1>Escalabilidad</h1>
        <h2>Podés empezar con algo básico y luego sumar tienda online, blog, reservas, etc.</h2></div>
      </div>
      <div className={style.cajas}>
      <div className={style.number}><h1>09</h1></div>
      <div className={style.textos}>
        <h1>Medición y análisis de resultados</h1>
        <h2>Con herramientas como Google Analytics podés saber cuántas personas te visitan, desde dónde llegan y qué les interesa.</h2>
      </div>
      </div>
    </div>
    </div>
  )
}

export default beneficios
