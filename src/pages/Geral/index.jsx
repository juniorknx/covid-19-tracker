import "../Geral/styles.scss";
import { useEffect, useState } from "react";
import setadown from "../../assets/setadown.svg"
import CountUp from "react-countup";
import Lottie from "react-lottie"
import dashboard from '../../animations/dashboard.json';

export function Geral() {

    const [general, setGeneral] = useState({confirmados:[], obitos:[]}); //< Quando o retorno é objeto, nome da chave e seguido de um array vazio.

    useEffect(()=>{
        fetch('https://xx9p7hp1p7.execute-api.us-east-1.amazonaws.com/prod/PortalGeralApi')
        .then((response) => response.json())
        .then((data) => setGeneral(data));
    }, []);

    return(
        <section id="cov-geral">
            <div className="all-stats">
                <div className="confirmed">
                    <div className="panel">
                        <div className="panel-stats">
                            <div className="panel-header">
                                <h1>Casos Confirmados</h1>
                                <img src={setadown} alt={setadown} />
                            </div>
                            <div className="panel-body">
                                <div>
                                    <CountUp end={[general.confirmados.total]} separator="." />
                                    <br></br>
                                    <h4>Acumulado</h4>
                                </div>
                                <div>
                                    <CountUp end={[general.confirmados.novos]} separator="." />
                                    <br></br>
                                    <h4>Novos Casos</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="deaths">
                    <div className="panel">
                        <div className="panel-stats">
                            <div className="panel-header">
                                <h1>Óbitos Confirmados</h1>
                                <img src={setadown} alt={setadown} />
                            </div>
                            <div className="panel-body">
                                <div>
                                    <CountUp end={[general.obitos.total]} separator="." />
                                    <br></br>
                                    <h4>Acumulados</h4>
                                </div>
                                <div>
                                    <CountUp end={[general.obitos.novos]} separator="." />
                                    <br></br>
                                    <h4>Casos novos</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bar-animate">
                <Lottie options={{
                    animationData:dashboard,
                    autoplay:true,
                    loop:true,
                }}
                width={700}
                height={400}
                />
            </div>
        </section>
    )
}