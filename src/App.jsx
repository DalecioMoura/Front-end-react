import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './componentes/Footer'
import Header from './componentes/Header'
import Home from './rotas/Home'
import CadastrarItem from './rotas/CadastrarItem'
import ConsultarItem from './rotas/ConsultarItem'
import EditarItem from './rotas/EditarItem'
import ExcluirItem from './rotas/ExcluirItem'
import RetirarItem from './rotas/RetirarItem'
import DevolverItem from './rotas/DevolverItem'
import CadastrarUsuario from './rotas/CadastrarUsuario'
import ConsultarUsuario from './rotas/ConsultarUsuario'
import EditarUsuario from './rotas/EditarUsuario'
import ExcluirUsuario from './rotas/ExcluirUsuario'
import Menu from './componentes/Menu'
//import FormItens from './componentes/FormItens'

function App() {
//<Menu enviaMensagem={recebeMensagem}/>
//<FormItens />
  const recebeMensagem = (mensagem)=>{
    console.log(mensagem);
  }
 
  return (
    <BrowserRouter>
      <Header />
      <Menu />
      <Routes>
        <Route exact path='/'element={<Home/>}/>
        <Route path='/cadastrarmaterial'    element={<CadastrarItem/>}/>
        <Route path='/consultarmaterial'    element={<ConsultarItem/>}/>
        <Route path='/cadastarmaterial'     element={<CadastrarItem/>}/>
        <Route path='/editarmaterial'       element={<EditarItem/>}/>
        <Route path='/excluirmaterial'      element={<ExcluirItem/>}/>
        <Route path='/retirarmaterial'      element={<RetirarItem/>}/>
        <Route path='/devolvermaterial'     element={<DevolverItem/>}/>
        <Route path='/cadastrarusuario'     element={<CadastrarUsuario/>}/>
        <Route path='/consultarusuario'     element={<ConsultarUsuario/>}/>
        <Route path='/editarusuario'        element={<EditarUsuario/>}/>
        <Route path='/excluirusuario'       element={<ExcluirUsuario/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App
