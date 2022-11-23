import '../sass/layouts/Welcome.scss'
import { useEffect, useState } from 'react';

const Welcome = () => {

  const [welChar, setWelChar] = useState('o')
  useEffect(() => {
    changeWelChar()
  }, [welChar])

  const changeWelChar = () => {
    setTimeout(() => {
      if (welChar === 'o') {
        setWelChar('')
        setTimeout(() => {
          setWelChar('a')
        }, 1000)
      } else if (welChar === 'a') {
        setWelChar('')
        setTimeout(() => {
          setWelChar('o')
        }, 1000)
      }
    }, 2000)
  }
  return (
    <section className='welcome-side'>
      <span className='welcome-side__wel-message'>{`Bienvenid${welChar}`}</span>
      <h1 className='welcome-side__title'>Soy <span className='under'>Ismael Borquez</span></h1>
      <p className='welcome-side__presentation'>Analista programador, apasionado por el desarrollo y el adquirir nuevas habilidades y conocimientos.</p>
    </section>
  )
}

export { Welcome }
