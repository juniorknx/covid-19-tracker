import '../Home/style.scss';
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import covidao from '../../assets/covidao.png';
import { Updated } from '../../components/Updated';
import CountUp from 'react-countup';

export function Home() {

    const [estados, setEstados] = useState([]);

    useEffect(()=>{
        async function loadCovdata(){
            const response = await api.get('/prod/PortalEstado')
            console.log(response.data)
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
                            <h4>Estado: {states.nome}</h4>
                            <img src={covidao} title={covidao} />
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