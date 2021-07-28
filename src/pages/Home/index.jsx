import '../Home/style.scss';
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import charts from '../../assets/charts.png';
import setadown from '../../assets/setadown.svg';
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
                            <img src={setadown} title={setadown} alt={setadown} />
                        </div>
                        <div className="card-content">
                            <div>
                            <h4>Total Casos</h4>
                            <CountUp start={0} end={states.casosAcumulado} separator="." />
                            </div>
                            <div>
                            <h4>Total Óbitos</h4> 
                            <CountUp start={0} end={states.obitosAcumulado} separator="." />
                            </div>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}