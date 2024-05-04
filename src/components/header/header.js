import React from 'react'
import './style.css'
import { Link } from 'react-router-dom';
import Logo from '../../assets/logobatman.jpg';
import Logo2 from '../../assets/logobatman2.png';
import SideBar from '../menu/menu'

function Header({ currentPage }) {

const logo = currentPage === 'home' ? Logo : Logo2;

    return (
        <>
        <SideBar/>
        <header>
        <img id='logo' src={logo} alt ='logobatman'/>
            <nav className='nav-web'>  
                <ul>
                    <Link style={{textDecoration: 'none'}} to='/'>
                    <li>Home</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to='/contato'>
                    <li>Contato</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to='/fotos'>
                    <li>Fotos</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to='/comentarios'>
                    <li>Comentários</li>
                    </Link>
                </ul>
            </nav>
        </header> 
        </>
    )
} 



export default Header;