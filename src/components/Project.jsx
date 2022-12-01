import '../sass/layouts/Project.scss'
import { Card } from './Card'
import data from '../../data.json'
import Glider from 'react-glider';
import 'glider-js/glider.min.css';
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { useRef, useState } from 'react'
import { HiCode } from "react-icons/hi";
import { TbExternalLink } from "react-icons/tb";

const Project = () => {
  const gliderRef = useRef();
  const [project, setProject] = useState(data[0])
  const prev = () => {
    gliderRef.current.scrollItem("prev");
  };
  const next = () => {
    gliderRef.current.scrollItem("next");
  };
  const changeProject = () => {
    setProject(data[gliderRef.current.slide])
  }
  return (
    <section className='projects-side'>
      <h2 className='subtitle'>Proyectos</h2>
      <div className='card-container'>
        <div className='slider'><button className='slider__arrow slider__arrow__prev' onClick={prev}><MdNavigateBefore />
        </button>
          <Glider
            className="glider-container projects-glider"
            draggable
            hasDots
            slidesToShow={1}
            scrollLock
            ref={gliderRef}
            onSlideVisible={() => changeProject()}
          >
            {data.map((project, i) => <div
              key={i}>
              <Card
                project={project}
              />
            </div>)}
          </Glider><button className='slider__arrow slider__arrow__next' onClick={next}>
            <MdNavigateNext /></button>
        </div>
        <div className='card-container__info'>
          <div className='card-container__info__center'>
            <div className='card__buttons'>
              <a className='button button__page' href={project.siteUrl} target="_blank"><TbExternalLink /></a>
              <a className='button button__code' href={project.codeUrl} target="_blank"><HiCode /></a>
            </div>
            <div>
              <p className='card__name'>{project.name}</p>

              <hr className='line line-tiny' />
              <ul className='card__technologies'>
                {project.technologies.map((tech, i) => <li key={i}>{tech}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Project }
