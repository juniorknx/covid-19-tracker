import { lastUpdated } from "../../services/api";
import { useEffect, useState } from "react";
import '../Updated/styles.scss';

export function Updated () {

    const [updatedlast, setUpdatedlast] = useState([]);

    useEffect(()=>{
        async function loadUpdated () {
            const response = await lastUpdated.get('/prod/PortalGeralApi')
            setUpdatedlast(response.data)
        }

        loadUpdated();

    }, []);

    function padTo2Digits(num) {
        return num.toString().padStart(2, '0');
      }

    function formatDate(date) {
        return [
          padTo2Digits(date.getDate()),
          padTo2Digits(date.getMonth() + 1),
          date.getFullYear(),
        ].join('/');
      }

    return(
        <div>
            <span className="dateUpdate">Ultima atualização em: {(formatDate(new Date(updatedlast.dt_updated || 'Carregando...')))}</span>
        </div>
    );
}

