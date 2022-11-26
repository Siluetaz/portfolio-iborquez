import '../sass/layouts/Footer.scss'
import { Social } from './Social'

const Footer = () => {
  return (
    <footer className='footer opacity'>
      <div className='footer__text'>Proyecto realizado con
        <a className='link' href='https://reactjs.org/'> React</a> +
        <a className='link' href='https://vitejs.dev/'> Vite</a>
      </div>
      <Social />
    </footer>
  )
}

export { Footer }
