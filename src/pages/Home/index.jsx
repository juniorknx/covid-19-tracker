import '../Home/style.scss';
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import covidao from '../../assets/covidao.png';
import CountUp from 'react-countup';

export function Home() {

    const [estados, setEstados] = useState([]);

    useEffect(()=>{
        async function loadCovdata(){
            const response = await api.get('/prod/PortalEstado')
            setEstados(response.data)
        }

        loadCovdata();

    }, []);

    return(
        <section id="cov-stats">
            {estados.map((states)=>{
                return(
                    <div className="card">
                        <div className="card-header">
                            <h4>ESTADO: {states.nome}</h4>
                            <img src={covidao} title={covidao} alt={covidao} />
                        </div>
                        <div className="card-content">
                            <div>
                            <h4>Total de Casos:</h4>
                            <CountUp start={0} end={states.casosAcumulado} separator="." />
                            </div>
                            <div>
                            <h4>Total de Óbitos:</h4> 
                            <CountUp start={0} end={states.obitosAcumulado} separator="." />
                            </div>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}