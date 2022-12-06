import '../sass/layouts/NavigationBar.scss'
import { useEffect, useState } from 'react';
import { Section } from './Section';
import { BsPersonFill, } from "react-icons/bs";
import { AiOutlineCode, } from "react-icons/ai";
import { FaGraduationCap, } from "react-icons/fa";
import { MdWork, } from "react-icons/md";
import { TiHome } from "react-icons/ti";
import { Link } from 'react-router-dom';
import { MdOutlineDoubleArrow } from 'react-icons/md'
import 'animate.css';
const NavigationBar = ({ }) => {
  const sections = [{ icon: TiHome, name: "Inicio", sectionName: '' }, { icon: BsPersonFill, name: 'Sobre mí', sectionName: 'about' }, { icon: AiOutlineCode, name: 'Proyectos', sectionName: 'project' }, { icon: MdWork, name: 'experiencia', sectionName: 'work' }, { icon: FaGraduationCap, name: 'Educación', sectionName: 'education' }]
  const [active, setActive] = useState(false)
  return (
    <div className='navigation-container'>

      {!active ? '' :
        <div className={'navigation-bar animate__animated animate__fadeIn'}>
          {sections.map((section, index) => <Link className='navigation-bar__item' to={`/portfolio-iborquez/dist/${section.sectionName}`}><Section section={section} key={index} />
          </Link>)}
        </div>} 
        <div className='open-navigation'>
        <button className='open-navigation__button' onClick={() => setActive(!active)}>< MdOutlineDoubleArrow className="open-navigation__icon" /></button>
      </div>
    </div>
  )
}
export { NavigationBar }