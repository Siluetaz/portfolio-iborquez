import '../sass/layouts/Content.scss'
import { Home } from './Home'
import 'glider-js/glider.min.css';
import { useEffect } from 'react'
import { About } from './About';
const Content = () => {
  useEffect(() => {
  })
  return (
    <main className='container'>
      <Home />
    </main>
  )
}

export { Content }
