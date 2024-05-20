import { useState } from 'react'
import './App.css'
import Footer from './componentes/Footer'
import Header from './componentes/Header'
import Menu from './componentes/Menu'
import FormItens from './componentes/FormItens'

function App() {
 
  return (
    <>
      <Header />
      <Menu />
      <FormItens />
      <Footer />
    </>
  )
}

export default App
