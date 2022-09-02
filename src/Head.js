import { useEffect } from "react";

export function Head({title}){
    useEffect(()=>{
        document.title = 'Covid-19 Brazil Tracker | ' + title;
    },[title])

    return <></>
}