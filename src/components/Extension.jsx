import { useState, useEffect } from "react";
import { Switch } from "./Switch";
import "../styles/Extension.css";

export default function Extension () {
    const [datas, setDatas] = useState(null);

    useEffect(() => {
        fetch ('./data.json')
            .then(infos => infos.json())
            .then(datas => setDatas(datas))
            .catch(error => console.error("Erreur..."))
    }, []);

    if (!datas){
        return (<div>"En attente..."</div>)
    }

    const listDatas = datas.map((data, index) =>
        <li key = {index + "-" + data.name}>
            <span className="line1">
                <img 
                    src = {data.logo}
                    className="image"
                />
                <span>
                    <p className="name">{data.name}</p>
                    <p className="description">{data.description}</p>
                </span>
            </span>
            <span className="line2">
                <Switch className="switch"/>
            </span>
        </li>
    )

    return(
        <>
           <ul className="container">{listDatas}</ul>
        </>
    )
}