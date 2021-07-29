import '../Footer/style.scss';
import logodatasus from '../../assets/logodatasus.png';
import monstgithub from '../../assets/monstgithub.svg';
import linkedin from '../../assets/linkedin.svg';

export function Footer(){
    return(
        <footer>
            <div className="footer-wrapper">
                <div>
                    <span>Desenvolvido por: Julio</span>
                    <div className="social-icons">
                        <a href="https://github.com/juniorknx" target="_blank">
                            <img src={monstgithub} alt="Github" title="github" to="https://github.com/juniorknx" />
                        </a>

                        <a href="https://www.linkedin.com/in/julio-junior-ba665015b/" target="_blank">
                            <img src={linkedin} alt="linkedin" title="linkedin" />
                        </a>
                    </div>
                </div>
                <div>
                    <span>Fonte de dados: API DataSus</span>
                    <div className="font-dados">
                        <a href="https://servicos-datasus.saude.gov.br/" target="_blank">
                            <img src={logodatasus} title="DataSus" alt="DataSus" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}