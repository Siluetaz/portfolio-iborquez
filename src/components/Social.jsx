import '../sass/layouts/Social.scss'
import { BsGithub, BsLinkedin } from "react-icons/bs";
const Social = () => {
  return (
    <ul className='social'>
      <li className='social__item'><a className='social__item__logo' href="https://github.com/Siluetaz" target="_blank" aria-label="My Github Page Link"><BsGithub className='social__item__logo' /></a></li>
      <li className='social__item'><a className='social__item__logo' href="https://www.linkedin.com/in/ismael-borquez-ba%C3%B1ados-7b57a114b/" target="_blank" aria-label="My Linkedin Page Link"><BsLinkedin /></a></li>
    </ul >
  )
}

export { Social }
