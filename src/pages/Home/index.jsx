import '../Home/style.scss';
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import setadown from '../../assets/setadown.svg';
import GeralCard from '../../components/GeralCard';
import Loader from '../../components/Loader';
import { Head } from '../../Head';

export function Home() {

    const [estados, setEstados] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadCovdata() {
            const response = await api.get('/prod/PortalEstado')
            setEstados(response.data)
            setLoading(false)
        }
        loadCovdata();
    }, []);

    if (loading == true) {
        return <Loader />
    }

    return (
        <>
            <Head title="Geral" />
            <section id="cov-stats">
                {estados.map(({ nome, casosAcumulado, obitosAcumulado }) => {
                    return (
                        <>
                            <GeralCard
                                stateName={nome}
                                icon={setadown}
                                totalCases={casosAcumulado}
                                totalDeaths={obitosAcumulado}
                            />
                        </>
                    )
                })}
            </section>
        </>
    )
}