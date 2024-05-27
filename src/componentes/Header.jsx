import '../styles/Header.css'
import ImgLogin from "../img/login3.jpg"
import { Link, NavLink } from 'react-router-dom';

function Header(){
    return (
        <header>
            <div id='div_h1'><h1>CONTROLE DE MATERIAL</h1></div>
            <div id='div_login'>
                <img src={ImgLogin} alt="login" />
                <NavLink to={'/login'}><div id='div_login2'>Entrar</div></NavLink>
            </div>
            
        </header>
    );
}

export default Header;