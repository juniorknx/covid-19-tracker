import { lastUpdated } from "../../services/api";
import { useEffect, useState } from "react";

export function Updated () {

    const [updatedlast, setUpdatedlast] = useState([]);

    useEffect(()=>{
        async function loadUpdated () {
            const response = await lastUpdated.get('/prod/PortalGeralApi')
            setUpdatedlast(response.data)
        }

        loadUpdated();

    }, []);

    return(
        <div>
            <p>{updatedlast.dt_updated}</p>
        </div>
    );
}

