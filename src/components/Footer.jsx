import '../sass/layouts/Footer.scss'

import { Social } from './Social'

import data from '../../data.json'

import githubLogo from '../assets/github-logo.png'
import linkedinLogo from '../assets/linkedin-logo.svg'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__text'>Proyecto realizado con
        <a className='link' href='https://reactjs.org/'> React</a> +
        <a className='link' href='https://vitejs.dev/'> Vite</a>
      </div>
      <Social />
    </footer>
  )
}

export { Footer }
