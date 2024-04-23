import './header.css';
import { Link } from 'react-router-dom';

export function Header(){
    return(
        <header>
            <div className="container">
                <div className="header__inner">
                    <nav className="header__nav nav">
                        <Link to="/" className="nav__link">Главная</Link>
                        <Link to="/catalog" className="nav__link">Каталог</Link>
                        <Link to='/' className='header__logo'>FISHBAR</Link>
                        <Link to="/about" className="nav__link">О нас</Link>
                        <Link to='tel:89655949983' className="nav__link">+7(965)594-99-83</Link>
                    </nav>
                </div>
            </div>
        </header>
    )

}