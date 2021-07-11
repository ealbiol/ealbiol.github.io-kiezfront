import "./UpdateNeighborhoodForm.scss"

import { useState, useEffect } from "react";
import { GlobalContext } from "../../Router";
import { useContext } from "react";

import {BASE_URL} from "../../config/config";


export default function UpdateNeighborhoodForm() {

    // const [NeighborhoodsName, setNeighborhoodsName] = useState({}) ACTIVAR

    const [setNeighborhoodsName] = useState({})

    const { setLoggedUser } = useContext(GlobalContext);

    // FETCH NEIGHBORHOODS
    useEffect(() => {
        // Inicializando la const token
        const token = localStorage.getItem("ACCESS_TOKEN")
        if (token) setLoggedUser(true);
        const NEIGHBORHOODS = `${BASE_URL}neighborhoods/`;
        const params = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token                          //Autorización con token para el acceso a la API 'coatsofarmsimages'
            },
        };
        fetch(NEIGHBORHOODS, params)
            .then((response) => response.json())
            .then((data) => {
                setNeighborhoodsName(data.neighborhoods);
            });
    }, [setLoggedUser, setNeighborhoodsName]);


    return (
        <div className="main-updateNeighborhoodForm" >
            Hola desde Update.js
        </div>
    )
}
