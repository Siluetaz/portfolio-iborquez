import { useEffect, useState } from 'react'
import '../sass/layouts/Card.scss'

const Card = ({ project }) => {
  const [imgUrl, setImgUrl] = useState()
  const screenSize = document.body.clientWidth.toFixed()

  const catchSize = () => {
    if (screenSize <= 767) {
      setImgUrl(new URL(project.imgDirection.mobile, import.meta.url).href)
    } else if (screenSize >= 768) {
      setImgUrl(new URL(project.imgDirection.default, import.meta.url).href)
    }
  }
  useEffect(() => {
    catchSize()
  }, [screenSize])

  return (
    <div className='card'>
      <div className='card__info'>
        <img className='card__image' src={imgUrl} alt="project-image" width="200px" height="100px" />
        {/* <p className='card__name'>{project.name}</p>
        <ul className='card__technologies'>
          {project.technologies.map((tech, i) => <li key={i}>{tech}</li>)}
        </ul> */}</div>
      {/* <div className='card__buttons'>
        <a className='button' href={project.siteUrl}>Ver Proyecto</a>
        <a className='button' href={project.codeUrl}>Ver código</a>
      </div> */}
    </div>
  )
}

export { Card }
