import '../Header/style.scss';
import imglogo from '../../assets/imglogo.png'

export function Header() {
    return (
        <header>
            <div className="menu">
                    <h3>CORONAVÍRUS</h3>
                    <img src={imglogo} />
                    <span>BRASIL</span>
            </div>
        </header>
    )
}