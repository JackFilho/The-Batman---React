import React from 'react'
import Header from '../../components/header/header'
import './style.css'
import Images from '../../assets/img-pages/images'
import Footer from '../../components/footer/footer'

function Fotos() {

    return (
        <>
        <Header/>
        <h1 id='h1-fotos'>Bastidores</h1>
        <div className="fotos-container">
            <div className="row" style={{ marginTop: "50px"}}>
              <div className="col">
                <img className="img-fotos" src={Images.bastidores1} alt="Imagem 1"/>
              </div>
              <div className="col">
                <img className="img-fotos" src={Images.bastidores2} alt="Imagem 2"/>
              </div>
              <div className="col">
                <img className="img-fotos" src={Images.bastidores3} alt="Imagem 3"/>
              </div>
            </div>
          
            <div className="row" style={{marginTop: "30px"}}>
              <div className="col">
                <img  className="img-fotos" src={Images.bastidores4} alt="Imagem 4"/>
              </div>
              <div className="col">
                <img className="img-fotos" src={Images.bastidores5} alt="Imagem 5"/>
              </div>
              <div className="col">
                <img className="img-fotos" src={Images.bastidores6}  alt="Imagem 6"/>
              </div>
            </div>
          </div>
          <Footer/>
        </>
    )
}

export default Fotos;