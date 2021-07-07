import { lastUpdated } from "../../services/api";
import { useEffect, useState } from "react";
import { format } from 'date-fns';

export function Updated () {

    const [updatedlast, setUpdatedlast] = useState([]);

    useEffect(()=>{
        async function loadUpdated () {
            const response = await lastUpdated.get('/prod/PortalGeralApi')
            console.log(response.data)
            setUpdatedlast(response.data)
        }

        loadUpdated();

    }, []);

    return(
        <div>
            <p>{updatedlast.dt_updated}</p>
            <p>Ultima atualização:{datelocal}</p>
        </div>
    );
}

const datelocal = format(new Date(), 'dd/MM/yyyy' );

console.log(datelocal);
