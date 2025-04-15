import Image from "next/image";
import logo from "../../public/logo.png";
import style from "@/componentes/header.module.css";
import pc from "../../public/pc.png";

export default function Home() {
  return (
    <div className={style.espacio}>
    <div className={style.logos}>
      <Image className={style.logo} src={logo} width={100} alt="logo"></Image>
    </div>
    <div className={style.contenedor}>
      <div className={style.text}>
      <h1>Desarrolla tu <u>Sitio Web</u><br></br>
      desde cero</h1>
      <h2>Muestra tus proyectos, habilidades o productos</h2>
      <button className={style.button}><a href="#seccion">Empieza Ahora!</a></button>
      </div>
      <div className={style.imagen}><Image src={pc} alt="imagen"></Image></div>
      </div>
    </div>

  );
}
