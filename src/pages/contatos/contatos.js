import React from 'react'
import './style.css'
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';


function Contatos() {

    return (
        <>
        <Header/>
        <div className='contatos-container'>
            <div id='Tittle'>
                <h1 id='my-h1'>Fale Conosco</h1>
            </div>
            <form action='Formulario'>
                <input type='text' name='seunome'  placeholder='Nome' />
                <input type='text' name='email' placeholder='Email' />
                <input type='tel' name='telefone' placeholder='Telefone' />
                <textarea type='text' name='assunto' placeholder='Escreva sua Mensagem'></textarea> 
                <button id='button-contact'>ENVIAR</button>
            </form>
        </div>
        <Footer/>
        </>
    )
}

export default Contatos;