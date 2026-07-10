import { useState, useEffect } from "react";
import { Switch } from "./Switch";
import "../styles/Extension.css";
import { Button } from "./Button";

export default function Extension ({appear, setAppear}) {
    const [datas, setDatas] = useState(null);
    const [switchCkecked, setSwitchCkecked] = useState();

    // import extensions's datas
    useEffect(() => {
        fetch ('./data.json')
            .then(infos => infos.json())
            .then(datas => setDatas(datas))
            .catch(error => console.error("Erreur..."))
    }, []);

    if (!datas){
        return (<div>"En attente..."</div>)
    }

    // extensions when "all" option is selected
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
                {/*function for removing extension*/}
                <Button 
                    name="Remove"
                    onClick={() => setDatas(datas.filter(donnee => donnee.name !== data.name ))}
                />          
                <Switch 
                    turnOn={data.isActive}
                    switchCkecked={switchCkecked}
                    setSwitchCkecked={setSwitchCkecked}
                />
            </span>
        </li>
    )

    // filter active and inactive extensions
    const activeDatas = datas.filter(data => data.isActive == true)
    const inactiveDatas = datas.filter(data => data.isActive == false)

    // extensions when "active" option is selected
    const listActiveDatas = activeDatas.map((data, index) =>
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
                    switchCkecked={switchCkecked}
                    setSwitchCkecked={setSwitchCkecked}
                />
                
            </span>
        </li>
    )

    // extensions when "inactive" option is selected
    const listInactiveDatas = inactiveDatas.map((data, index) =>
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
                    switchCkecked={switchCkecked}
                    setSwitchCkecked={setSwitchCkecked}
                />
                
            </span>
        </li>
    )


    // return conditions depending on the selected option
    return appear === "all" ? (
        <>
           <ul className="container">{listDatas}</ul>
        </>
    ) : ( appear === "active" ? (
        <>
           <ul className="container">{listActiveDatas}</ul>
        </>
    ) : (
        <>
           <ul className="container">{listInactiveDatas}</ul>
        </>
    )
    )
}