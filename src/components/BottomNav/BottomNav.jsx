import '../BottomNav/style.scss';
import { Link } from 'react-router-dom';
import tips from "../../assets/tips.svg"
import sintomas from "../../assets/sintomas.svg"
import graph from "../../assets/graph.svg"
import home from "../../assets/home.svg"

export function BottomNav(){
    return(
        <>
        <div class="navbar">
            <Link to="/">
                <img src={home} title={home} alt={home} />
                    <br></br>
                <span>Inicio</span>
            </Link>

            <Link to="/geral">
                <img src={graph} title={graph} alt={graph} />
                    <br></br>
                <span>Geral</span>
            </Link>

            <Link to="/">
                <img src={sintomas} title={sintomas} alt={sintomas} />
                    <br></br>
                <span>Sintomas</span>
            </Link>

            <Link to="/">
                <img src={tips} title={tips} alt={tips} />
                    <br></br>
                <span>Dicas</span>
            </Link>
        </div>
        </>
    )
}