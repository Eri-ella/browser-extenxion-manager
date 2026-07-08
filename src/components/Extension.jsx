import { useState, useEffect } from "react";
import { Switch } from "./Switch";
import "../styles/Extension.css";
import { Button } from "./Button";

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
        <li key = {index + "-" + data.name} id = {data.name}>
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
                <Button 
                    name="Remove"
                    onClick={() => setDatas(datas.filter(donnee => donnee.name !== data.name ))}
                />          
                <Switch 
                    turnOn={data.isActive}
                />
            </span>
        </li>
    )

    return(
        <>
            {/*<Button 
                name="Bonjour"
                onClick={() => alert('Bonjour')} 
            />*/}
           <ul className="container">{listDatas}</ul>
        </>
    )
}