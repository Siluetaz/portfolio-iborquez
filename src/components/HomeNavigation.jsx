import '../sass/layouts/Navigation.scss'
import { useEffect, useState } from 'react';
import { Section } from './Section';
import { BsPersonFill, } from "react-icons/bs";
import { AiOutlineCode, } from "react-icons/ai";
import { FaGraduationCap, } from "react-icons/fa";
import { MdWork, } from "react-icons/md";
import 'animate.css';
const HomeNavigation = ({ handleClick, goSection, }) => {
  const sections = [{ icon: BsPersonFill, name: 'Sobre mí', sectionName: 'about' }, { icon: AiOutlineCode, name: 'Proyectos', sectionName: 'project' }, { icon: MdWork, name: 'experiencia', sectionName: 'work' }, { icon: FaGraduationCap, name: 'Educación', sectionName: 'education' }]

  return (
    <div className={`sections-container animate__animated ${goSection}`} >
      {sections.map((section, index) => <div className='section' key={index} onClick={() => handleClick(section.sectionName)}><Section section={section} /></div>)}
    </div >
  )
}

export { HomeNavigation }