
import './App.css';
import React from 'react';
import Home from './pages/home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Fotos from './pages/fotos/fotos.js'
import Contatos from './pages/contatos/contatos.js';
import Comentarios from './pages/comentarios/comentarios.js';


function App() {
  
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contato' element={<Contatos/>}/>
        <Route path='/fotos' element={<Fotos/>}/>
        <Route path='/comentarios' element={<Comentarios/>}/>
      </Routes>
      </BrowserRouter>
  );

}

export default App;
