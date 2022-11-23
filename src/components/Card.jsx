import '../sass/layouts/Card.scss'

const Card = ({ project }) => {
  const imgUrl = new URL(project.imgDirection, import.meta.url).href
  return (
    <div className='card'>
      <div className='card__info'>
        <img className='card__image' src={imgUrl} alt="project-image" width="200px" height="100px" />
        <p className='card__name'>{project.name}</p>
        <ul className='card__technologies'>
          {project.technologies.map((tech, i) => <li key={i}>{tech}</li>)}
        </ul></div>
      <div className='card__buttons'>
        <a className='button' href={project.siteUrl}>Ver Proyecto</a>
        <a className='button' href={project.codeUrl}>Ver código</a>
      </div>
    </div>
  )
}

export { Card }
