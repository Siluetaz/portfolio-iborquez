import '../sass/layouts/Social.scss'

import githubLogo from '../assets/github-logo.png'
import linkedinLogo from '../assets/linkedin-logo.svg'

const Social = () => {
  return (
    <ul className='social'>
      <li className='social__logo'><a href="https://github.com/Siluetaz"><img src={githubLogo} alt="" /></a></li>
      <li className='social__logo'><a href="https://www.linkedin.com/in/ismael-borquez-ba%C3%B1ados-7b57a114b/"><img src={linkedinLogo} alt="" /></a></li>
    </ul >
  )
}

export { Social }
