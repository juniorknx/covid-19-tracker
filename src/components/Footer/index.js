import '../Footer/style.scss';
import logodatasus from '../../assets/logodatasus.png';
import monstgithub from '../../assets/monstgithub.svg';
import linkedin from '../../assets/linkedin.svg';
import { Updated } from '../Updated';

export function Footer(){
    return(
        <footer>
            <div className="footer-wrapper">
                <div>
                <div className="social-icons">
                    <a href="https://github.com/juniorknx" target="_blank" rel="Github">
                        <img src={monstgithub} alt="Github" title="github" to="https://github.com/juniorknx" />
                    </a>

                    <a href="https://www.linkedin.com/in/julio-junior-ba665015b/" target="_blank" rel="Linkedin">
                        <img src={linkedin} alt="linkedin" title="linkedin" />
                    </a>
                </div>
                    <span>Desenvolvido por: Julio</span>
                </div>

                <div>
                <div className="font-dados">
                    <a href="https://servicos-datasus.saude.gov.br/" target="_blank" rel="Datasus">
                        <img src={logodatasus} title="DataSus" alt="DataSus" />
                        
                    </a>
                </div>
                    <span>Fonte de dados: API DataSus</span>
                    <Updated />
                </div>
            </div>
        </footer>
    )
}