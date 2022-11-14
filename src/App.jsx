import { useState } from 'react'
import { Card } from './components/Card'

import './sass/layouts/App.scss'

import githubLogo from './assets/github-logo.png'
import linkedinLogo from './assets/linkedin-logo.svg'

import data from '../data.json'


const App = () => {
  return (
    <>
      <header>
        <nav className='navbar'>
          <ul className='name-side'>
            <li className='name-side__name'>
              IBorquez
            </li>
          </ul>
          <ul className='sites-side'>
            <li className='sites-side__logo'><img src={githubLogo} alt="" /></li>
            <li className='sites-side__logo'><img src={linkedinLogo} alt="" /></li>
          </ul>
        </nav>
      </header>
      <main className='container'>
        <section className='welcome-side'>
          {/* <div className='welcome-side__my-logo'><img src="" alt="" /></div> */}
          <h1 className='welcome-side__title'>¡Bienvenido/a!<br></br> Soy <span className='under'>Ismael Borquez</span></h1>
          <p className='welcome-side__presentation'>Analista programador, apasionado por el desarrollo y el adquirir nuevas habilidades y conocimientos.</p>
          {/* <button className='button'>
            CONTACTO
          </button> */}
        </section>
        <hr className='line' />
        <section className='knowledge-side'>
          <h2 className='subtitle'>Conocimientos</h2>
          <div className='knowledges'>
            <div className='knowledges__frontend-side'>
              <div className='title'>Frontend</div>
              <div className='item'>HTML</div>
              <div className='item'>CSS</div>
              <div className='item'>SASS</div>
              <div className='item'>Javascript</div>
              <div className='item'>React</div>
              <div className='item'>Vue</div>
            </div>
            <div className='knowledges__backend-side'>
              <div className='title'>Backend</div>
              <div className='item'>PHP</div>
              <div className='item'>Laravel</div>
              <div className='item'>MySQL</div>
            </div>
          </div>
        </section>
        <section className='projects-side'>
          <h2 className='subtitle'>Proyectos</h2>
          <div className='projects-side__card-container'>
            {data.map((project, i) => <Card key={i}
              project={project}
            />)}
          </div>
        </section>
        {/* <section className='contact'>
            <h2 className='contact__title'>Contact</h2>
            <p className='contact__description'></p>
        </section> */}
      </main>
      <footer className='footer'>
        <div className='footer__text'>Proyecto realizado con <a className='link' href='https://reactjs.org/'>React</a> + <a className='link' href='https://vitejs.dev/'>Vite</a></div> <ul className='sites'>
          <li className='sites__logo'><img src={githubLogo} alt="" /></li>
          <li className='sites__logo'><img src={linkedinLogo} alt="" /></li>
        </ul>
      </footer>
    </>
  )
}

export { App }
