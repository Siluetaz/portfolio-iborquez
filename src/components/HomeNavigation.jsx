
import { useEffect, useState } from 'react';
import { Section } from './Section';
import { BsPersonFill, } from "react-icons/bs";
import { AiOutlineCode, } from "react-icons/ai";
import { FaGraduationCap, } from "react-icons/fa";
import { MdWork, } from "react-icons/md";
import 'animate.css';
import { About } from './About';
import { Home } from './Home'
import { Route, Routes, Link } from 'react-router-dom'
const HomeNavigation = ({ }) => {
  const sections = [{ icon: BsPersonFill, name: 'Sobre mí', sectionName: 'about' }, { icon: AiOutlineCode, name: 'Proyectos', sectionName: 'project' }, { icon: MdWork, name: 'Experiencia', sectionName: 'work' }, { icon: FaGraduationCap, name: 'Educación', sectionName: 'education' }]

  return (
    <div className={`sections-container animate__animated animate__fadeIn animate__delay-3s user-none`}>
      {sections.map((section, index) => <Link to={`/portfolio-iborquez/dist/${section.sectionName}`} className='section-mask' key={index} ><Section section={section} /></Link>)}
    </div>


  )
}

export { HomeNavigation }