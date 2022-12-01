import '../sass/layouts/Content.scss'
import { Home } from './Home'
import { useEffect, useRef, useState } from 'react'
import { About } from './About';
import { Project } from './Project';
import 'glider-js/glider.min.css';
import { HomeNavigation } from './HomeNavigation';
const Content = () => {

  const [goSection, setGoSection] = useState(' animate__fadeIn animate__delay-3s')
  const [fadeOut, setFadeOut] = useState('presentation-fade')
  const [sectionSelected, setSectionSelected] = useState('')

  useEffect(() => {

  }, [sectionSelected])

  const openSection = (sectionName) => {
    setGoSection('animate__backOutUp')
    setFadeOut('animate__animated animate__fadeOut animate__faster')
    setTimeout(() => {
      setSectionSelected(sectionName)
    }, 750)
  }

  const SectionActive = () => {
    if (sectionSelected === 'about') {
      return <About />
    }
    else if (sectionSelected === 'project') {
      return <Project />
    }
    else if (sectionSelected === 'work') {
      return <Work />
    }
    else if (sectionSelected === 'Education') {
      return <Education />
    }
  }

  return (
    <main className='container'>
      {sectionSelected === '' ? <section className='home'><Home fadeOut={fadeOut} />  <HomeNavigation handleClick={openSection} goSection={goSection} /></section> :
        <SectionActive />
      }
    </main>
  )
}

export { Content }
