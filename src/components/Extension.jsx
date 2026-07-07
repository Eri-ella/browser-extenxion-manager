import { useState, useEffect } from "react";
export default function Extension () {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch ('./data.json')
            .then(infos => infos.text())
            .then(data => setData(data))
            .catch(error => console.error("Erreur..."))
    }, []);

    if (!data){
        return (<div>"En attente..."</div>)
    }



    return(
        <>
            <h2>Hello</h2>
        </>
    )
}