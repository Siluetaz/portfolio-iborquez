import '../sass/layouts/Home.scss'
import { useEffect, useState } from 'react';
import { BsChevronDoubleUp, } from "react-icons/bs";
import 'animate.css';
const Home = ({fadeOut}) => {
  const [welChar, setWelChar] = useState('o')
  const [loop, setLoop] = useState(true)

  useEffect(() => {
    changeWelChar()
  }, [loop])

  const changeWelChar = () => {
    setTimeout(() => {
      welChar === 'o' ?
        (setWelChar(''),
          setTimeout(() => {
            setWelChar('a')
            setLoop(!loop)
          }, 1000))
        :
        (setWelChar(''),
          setTimeout(() => {
            setWelChar('o')
            setLoop(!loop)
          }, 1000))
    }, 2000)
  }

  return (
    <div className={`home-container ${fadeOut}`}>
      <span className='home-container__wel-message'>Bienvenid<span className='home-container__wel-message__char'>{welChar}</span></span><h1 className='home-container__title'>Soy <span className='under'>Ismael Borquez</span></h1>
      <p className='home-container__presentation animate__animated animate__delay-1s animate__fadeIn'>Analista programador, apasionado por el desarrollo y el adquirir nuevas habilidades y conocimientos.</p>
      <hr className='home-container__line' />
      {/* <div className={bounce}>
        <div className={`home-container__sections-description opacity ${active}`} onClick={deployMenu}>
          <BsChevronDoubleUp className={`home-container__arrow-up ${active}`} /> Descubre más acerca de mí <BsChevronDoubleUp className={`home-container__arrow-up ${active}`} />
        </div>
      </div> */}
    </div>

  )
}

export { Home }
