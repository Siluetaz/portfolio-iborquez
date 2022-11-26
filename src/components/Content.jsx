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
          draggable
          hasDots
          slidesToShow={1}
          scrollLock
          dragVelocity={3.8}
          scrollLockDelay={210}
          duration={0.2}
        >
          <div><Knowledge /></div>
          <div><Skill /></div>
        </Glider>
        <section className='projects-side'>
          <h2 className='subtitle'>Proyectos</h2>
          <ScrollContainer className="projects-side__container" hideScrollbars={false} horizontal={true}>
            {data.map((project, i) => <Card className="carousel-cell" key={i}
              project={project}
            />)}</ScrollContainer>

        </section>
      </section>
    </main>
  )
}

export { Content }
