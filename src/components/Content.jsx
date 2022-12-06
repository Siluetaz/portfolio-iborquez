import '../sass/layouts/Content.scss'
import { Home } from './Home'
import { About } from './About';
import { Project } from './Project';
import 'glider-js/glider.min.css';
import { Route, Routes } from 'react-router-dom'
const Content = () => {
  return (
    <main className='container'>
      <Routes>
        <Route path='/portfolio-iborquez/dist/' element={<Home />} />
        <Route path='/portfolio-iborquez/dist/about' element={<About />} />
      </Routes>
    </main>
  )
}

export { Content }
