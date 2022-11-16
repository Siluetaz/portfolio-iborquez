import '../sass/layouts/Content.scss'
import { Card } from './Card'
import { Knowledge } from './Knowledge'
import data from '../../data.json'
const Content = () => {
  return (
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
      <Knowledge />
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
  )
}

export { Content }
