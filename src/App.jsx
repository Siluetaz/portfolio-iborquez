import { useState } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Content } from './components/Content'

import './sass/layouts/App.scss'

const App = () => {
  return (
    <>
      <Header/>
      <Content/>
      <Footer/>
    </>
  )
}

export { App }
