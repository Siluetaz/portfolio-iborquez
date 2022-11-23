import '../sass/layouts/Skill.scss'
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3, IoLogoSass, } from "react-icons/io";
import { IoLogoJavascript, IoLogoReact, IoLogoVue } from "react-icons/io5";
import { SiPhp, SiLaravel, } from "react-icons/si";
import { DiMysql } from "react-icons/di";
const Skill = () => {
  return (
    <section className='skill-side'>
      <h2 className='subtitle'>Habilidades</h2>
      <div className='skills'>
        <div>

        <div className='skills__item'>Trabajo en equipo</div>
          <div className='skills__item'>Respeto</div>
          <div className='skills__item'>Rápido aprendizaje</div>
        </div>
        <div>
          <div className='skills__item'>Proactividad</div>
          <div className='skills__item'>Independencia</div>
          <div className='skills__item'>Comunicación</div></div>
      </div>
    </section>
  )
}

export { Skill }
