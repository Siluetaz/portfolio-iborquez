import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Content } from './components/Content'

import './sass/layouts/App.scss'

const App = () => {
  window.onunload = function () {
    window.scrollTo(0, 0);
  }
  return (
    <>
      <Header />
      <Content />
    </>
  )
}

export { App }