import React from 'react'
import Header from '../../components/header/header'
import Trailer from '../../components/trailer/trailer';
import Cards from '../../components/cards/cards';
import './style.css'
import Footer from '../../components/footer/footer';

function Home() {
    return (
        <>
        <Header currentPage={'home'}/>
        <div id='banner'></div>
        <Trailer/>
        <Cards/>
        <Footer/>
         </>
    )
}

export default Home;