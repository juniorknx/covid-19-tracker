import '../Header/style.scss';
import imglogo from '../../assets/imglogo.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faVirus } from '@fortawesome/free-solid-svg-icons';

export function Header() {
    return (
        <header>
            <div className="menu">
                <div>
                    <h3>CORONAVÍRUS</h3>
                    <img src={imglogo} />
                    <span>BRASIL</span>
                </div>
                <nav>
                <Link to="/">
                    Início
                </Link>

                <Link to="/local">
                    Sintomas
                </Link>

                <Link to="/">
                    Dicas
                </Link>

                <Link to="/">
                    Author
                </Link>
                </nav>
            </div>
        </header>
    )
}