import '../sass/layouts/Content.scss'
import { Card } from './Card'
import { Knowledge } from './Knowledge'
import { Skill } from './Skill'
import { Welcome } from './Welcome'
import data from '../../data.json'
import ScrollContainer from 'react-indiana-drag-scroll';
import Glider from 'react-glider';
import 'glider-js/glider.min.css';

const Content = () => {

  return (
    <main className='container'>
      <Welcome />
      <section className='opacity'>
        <hr className='line' />
        <Glider
          className="glider-container"
          draggable
          hasDots
          slidesToShow={1}
          scrollLock
        >
          <div><Knowledge /></div>
          <div><Skill /></div>
        </Glider>
        <section className='projects-side'>
          <h2 className='subtitle'>Proyectos</h2>
          <div className='card-container'>
            <Glider
              className="glider-container projects-glider"
              draggable
              hasDots
              slidesToShow={1}
              scrollLock>
              {data.map((project, i) => <div>
                <Card key={i}
                  project={project}
                />
              </div>)}
            </Glider>
            <div className='card-container__info'>
              <div className='card-container__info__center'>
                <div>
                  <p className='card__name'>Example</p>
                  <ul className='card__technologies'>
                    <li>HTML</li>
                    <li>Sass</li>
                    <li>Vue</li>
                  </ul>
                </div>
                <div className='card__buttons'>
                  <a className='button' >Proyecto</a>
                  <a className='button' >código</a>
                </div>
              </div>

            </div>
          </div>
          {/* <ScrollContainer className="projects-side__container" hideScrollbars={false} horizontal={true}>
            {data.map((project, i) => <Card className="carousel-cell" key={i}
              project={project}
            />)}</ScrollContainer> */}

        </section>
      </section>
    </main>
  )
}

export { Content }
