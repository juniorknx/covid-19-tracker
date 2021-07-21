import '../Header/style.scss';
import imglogo from '../../assets/imglogo.png'
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <header>
            <div className="menu">
                <div>
                    <h3>CORONAVÍRUS</h3>
                    <img src={imglogo} alt={imglogo} />
                    <span>BRASIL</span>
                </div>
                <nav>
                <Link to="/">
                    Início
                </Link>

                <Link to="/geral">
                    Geral
                </Link>

                <Link to="/sintomas">
                    Sintomas
                </Link>
                </nav>
            </div>
        </header>
    )
}