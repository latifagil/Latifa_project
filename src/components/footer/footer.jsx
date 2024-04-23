import './footer.css';
import { Link } from 'react-router-dom';

export function Footer(){
    return(
        <footer>
            <div className="container">
                <div className="footer__inner">
                    <div className="footer_elem">
                        <div className="rights">
                            <div className="rights_logo">
                                <img src='/rights.svg'></img>
                                <Link to="/" className='footer__logo'>FISHBAR</Link>
                            </div>
                            <a className='nav__link'>Все права защищены.</a>
                        </div>
                        <div className="company">
                            <a className='company_name'>LatifaGroups</a>
                            <a className='company_discription'>restaurants - entertainment</a>
                        </div>
                    </div>
                    <nav className="footer__nav nav">
                        <Link to="/" className="nav__link">Главная</Link>
                        <Link to="/catalog" className="nav__link">Каталог</Link>
                        <Link to="/about" className="nav__link">О нас</Link>
                    </nav>
                </div>
            </div>
        </footer>
    )

}