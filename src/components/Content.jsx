import '../sass/layouts/Content.scss'
import { Card } from './Card'
import { Knowledge } from './Knowledge'
import { Skill } from './Skill'
import { Welcome } from './Welcome'
import data from '../../data.json'
import ScrollContainer from 'react-indiana-drag-scroll';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import '../../node_modules/pure-react-carousel/dist/react-carousel.es.css';
const Content = () => {


  return (
    <main className='container'>
      <Welcome />
      <hr className='line' />
      <CarouselProvider
        naturalSlideWidth={80}
        naturalSlideHeight={80}
        totalSlides={2}
        touchEnabled={true}
        dragEnabled={true}
        className="views">
        <Slider className='view'>
          <Slide index={0}>
            <Knowledge />
          </Slide>
          <Slide index={1}>
            <Skill />
          </Slide>
        </Slider>
        <ButtonBack className='navigation__circle'></ButtonBack>
        <ButtonNext className='navigation__circle'></ButtonNext></CarouselProvider>
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
