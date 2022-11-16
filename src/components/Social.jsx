import '../sass/layouts/Social.scss'
import { BsGithub, BsLinkedin } from "react-icons/bs";
const Social = () => {
  return (
    <ul className='social'>
      <li className='social__logo'><a href="https://github.com/Siluetaz"><BsGithub /></a></li>
      <li className='social__logo'><a href="https://www.linkedin.com/in/ismael-borquez-ba%C3%B1ados-7b57a114b/"><BsLinkedin /></a></li>
    </ul >
  )
}

export { Social }
