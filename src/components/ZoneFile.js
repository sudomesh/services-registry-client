import React, { useState, useEffect } from "react";
import API from '../utils/API';


export const ZoneFile = () => {
    const [zone, setZone] = useState({});
    useEffect(()=>{
        const fetch = async ()=>{
            const zonefile = await API.get('/zonefile');
            setZone(zonefile);
        }
        fetch();
    })
    return(
        <pre>
            {JSON.stringify(zone, null, 4)}
        </pre>
    )
}