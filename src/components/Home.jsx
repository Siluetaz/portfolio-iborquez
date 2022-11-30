import '../sass/layouts/Home.scss'
import { useEffect, useState } from 'react';
import { Section } from './Section';
import { BsPersonFill, } from "react-icons/bs";
import { AiOutlineCode, } from "react-icons/ai";
import { FaGraduationCap, } from "react-icons/fa";
import { MdWork, } from "react-icons/md";
import { BsChevronDoubleUp, } from "react-icons/bs";

const Home = () => {
  const [welChar, setWelChar] = useState('o')
  const sections = [{ icon: BsPersonFill, name: 'Sobre mí' }, { icon: AiOutlineCode, name: 'Proyectos' }, { icon: MdWork, name: 'Experiencia' }, { icon: FaGraduationCap, name: 'Educación' }]
  useEffect(() => {
    changeWelChar()
  }, [welChar])
  const changeWelChar = () => {
    setTimeout(() => {
      if (welChar === 'o') {
        setWelChar('')
        setTimeout(() => {
          setWelChar('a')
        }, 1000)
      } else {
        setWelChar('')
        setTimeout(() => {
          setWelChar('o')
        }, 1000)
      }
    }, 2000)
  }
  return (
    <section className='welcome-side'>
      <span className='welcome-side__wel-message'>Bienvenid<span className='welcome-side__wel-message__char'>{welChar}</span></span><h1 className='welcome-side__title'>Soy <span className='under'>Ismael Borquez</span></h1>
      <p className='welcome-side__presentation welcome-side__opacity'>Analista programador, apasionado por el desarrollo y el adquirir nuevas habilidades y conocimientos.</p>
      <hr className='welcome-side__line' />
      <div className='sections-container opacity'>
        {sections.map((section, index) => <Section section={section} key={index} />)}
      </div>
      <div className='welcome-side__sections-description'>
        Descubre más acerca de mí <BsChevronDoubleUp className='welcome-side__arrow-up' />
      </div>
    </section >
  )
}

export { Home }
