import CountUp from "react-countup"

export default function GeralCard({stateName, totalCases, totalDeaths, icon}) {
    return (
        <div className="card">
            <div className="card-header">
                <h4>ESTADO: {stateName}</h4>
                <img src={icon} title="icon" alt="icon" />
            </div>
            <div className="card-content">
                <div>
                    <h4>Total Casos</h4>
                    <CountUp start={0} end={totalCases} separator="." />
                </div>
                <div>
                    <h4>Total Óbitos</h4>
                    <CountUp start={0} end={totalDeaths} separator="." />
                </div>
            </div>
        </div>
    )
}