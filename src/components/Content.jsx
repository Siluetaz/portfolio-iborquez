import '../sass/layouts/Content.scss'
import { Card } from './Card'
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
      <section className='knowledge-side'>
        <h2 className='subtitle'>Conocimientos</h2>
        <div className='knowledges'>
          <div>
            <div className='knowledges__title'>Frontend</div>
            <div className='knowledges__item'>HTML</div>
            <div className='knowledges__item'>CSS</div>
            <div className='knowledges__item'>SASS</div>
            <div className='knowledges__item'>Javascript</div>
            <div className='knowledges__item'>React</div>
            <div className='knowledges__item'>Vue</div>
          </div>
          <div>
            <div className='knowledges__title'>Backend</div>
            <div className='knowledges__item'>PHP</div>
            <div className='knowledges__item'>Laravel</div>
            <div className='knowledges__item'>MySQL</div>
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
  )
}

export { Content }
