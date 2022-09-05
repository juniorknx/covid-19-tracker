import { api } from "../../services/api";
import { useEffect, useState } from "react";
import '../Updated/styles.scss';

export function Updated () {

    const [updatedlast, setUpdatedlast] = useState([]);
    const [Loading, setLoading ] = useState(true)

    useEffect(()=>{
        async function loadUpdated () {
            const response = await api.get('/prod/PortalGeralApi')
            setUpdatedlast(response.data)
            setLoading(false)
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
            <span className="dateUpdate">Atualizado em: {Loading === false ? (formatDate(new Date(updatedlast.dt_updated))) : 'Carregando...'}</span>
        </div>
    );
}

