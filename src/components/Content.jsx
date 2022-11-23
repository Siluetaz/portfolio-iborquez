import '../sass/layouts/Content.scss'
import { Card } from './Card'
import { Knowledge } from './Knowledge'
import data from '../../data.json'
import ScrollContainer from 'react-indiana-drag-scroll';
import { useEffect, useState } from 'react';

const Content = () => {

  const [welChar, setWelChar] = useState('o')

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
      } else if (welChar === 'a') {
        setWelChar('')
        setTimeout(() => {
          setWelChar('o')
        }, 1000)
      }
    }, 2000)
  }
  return (
    <main className='container'>
      <section className='welcome-side'>
        <span className='welcome-side__wel-message'>{`Bienvenid${welChar}`}</span>
        <h1 className='welcome-side__title'>Soy <span className='under'>Ismael Borquez</span></h1>
        <p className='welcome-side__presentation'>Analista programador, apasionado por el desarrollo y el adquirir nuevas habilidades y conocimientos.</p>
      </section>
      <hr className='line' />
      <section>
        <div>
          
        </div>
      </section>
      <Knowledge />
      <section className='projects-side'>
        <h2 className='subtitle'>Proyectos</h2>
        <ScrollContainer className="projects-side__container" hideScrollbars={false} horizontal={true}>
          {data.map((project, i) => <Card className="carousel-cell" key={i}
            project={project}
          />)}</ScrollContainer>

      </section>
    </main>
  )
}

export { Content }
