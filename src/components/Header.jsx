import '../sass/layouts/Header.scss'
import { Social } from './Social'
import myLogo from '../assets/IB.svg'

const Header = () => {
  return (
    <header>
      <nav className='navbar'>
        <ul className='nav'>
          <li className='nav__left'>
            <img className='nav__left__my-logo' src={myLogo} alt="my-logo" width="5rem" height="5rem" />
            <div className='nav__left__name'>
              IBorquez
            </div>
          </li>
          <li>
            <Social />
          </li>

        </ul>
      </nav>
    </header>
  )
}

export { Header }
