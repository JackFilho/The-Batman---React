import React from 'react'
import './comentarios.css'
import Images from '../../assets/img-pages/images'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer';

function Comentarios() {
    return (
        <>
        <Header/>
        <h1 id='h1-comentarios'>Comentários</h1>
        <div className="card-container">
        <div className="card-row">
        <div className="card-item">
                    <div className="card-comments">
                        <img className="card-image" src={Images.batman} alt="Christian Bale" />
                        <h3 className="card-title">Christian Bale</h3>
                        <p className="card-subtitle">Artista</p>
                        <p className="card-description">"É emocionante ver uma nova interpretação do Batman. Desejo ao Robert Pattinson todo o sucesso nesse papel icônico. Estou ansioso para ver a abordagem única que ele trará para o Cavaleiro das Trevas." </p>
                    </div>
                </div>
                <div className="card-item">
                    <div className="card-comments">
                        <img className="card-image" src={Images.mulher} alt="Gal Gadot" />
                        <h3 className="card-title">Gal Gadot</h3>
                        <p className="card-subtitle">Artista</p>
                        <p className="card-description">"O universo DC continua a se expandir, e estou empolgada em ver como o Batman se encaixa nessa visão inovadora. Boa sorte a toda a equipe e ao Robert Pattinson. Mal posso esperar para assistir!"</p>
                    </div>
                </div>
                <div className="card-item">
                    <div className="card-comments">
                        <img className="card-image" src={Images.alfred} alt="Michael Caine" />
                        <h3 className="card-title">Michael Caine</h3>
                        <p className="card-subtitle">Artista</p>
                        <p className="card-description">"O Comissário Gordon é uma peça fundamental no universo, estou curioso para ver como o novo filme explora essa dinâmica. Gary Oldman fez um trabalho excepcional no papel,tenho certeza de que trará uma abordagem única para o personagem."</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default Comentarios;