import '../sass/layouts/Content.scss'
import { Card } from './Card'
import { Knowledge } from './Knowledge'
import data from '../../data.json'
import ScrollContainer from 'react-indiana-drag-scroll';

const Content = () => {
  return (
    <main className='container'>
      <section className='welcome-side'>
        <h1 className='welcome-side__title'>¡Bienvenido/a!<br></br> Soy <span className='under'>Ismael Borquez</span></h1>
        <p className='welcome-side__presentation'>Analista programador, apasionado por el desarrollo y el adquirir nuevas habilidades y conocimientos.</p>
      </section>
      <hr className='line' />
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
