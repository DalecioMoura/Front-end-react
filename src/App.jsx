import { useState } from 'react'
import './App.css'
import Footer from './componentes/Footer'
import Header from './componentes/Header'
import Menu from './componentes/Menu'
import FormItens from './componentes/FormItens'

function App() {

  const recebeMensagem = (mensagem)=>{
    console.log(mensagem);
  }
 
  return (
    <>
      <Header />
      <Menu enviaMensagem={recebeMensagem}/>
      <FormItens />
      <Footer />
    </>
  )
}

export default App
