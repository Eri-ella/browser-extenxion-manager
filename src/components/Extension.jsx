import { useState, useEffect } from "react";
import logo from "../assets/images/logo-devlens.svg";
import { Switch } from "./Switch";

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
            <span>
                <img 
                    src = {data.logo}
                />
                <span>
                    <p>{data.name}</p>
                    <p>{data.description}</p>
                </span>
            </span>
            <span>
                <Switch/>
            </span>
        </li>
    )

    return(
        <>
           <ul>{listDatas}</ul>
           <img src={logo} alt="le logo" />
        </>
    )
}