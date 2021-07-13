import './NeighborhoodProfile.scss'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropertiesGrid from "../components/PropertiesGrid/PropertiesGrid"

import { GlobalContext } from "../Router";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import checkIfLogged from "../Functions/Functions"
import {BASE_URL} from "../config/config";


export default function NeighborhoodProfile() {


    const [NeighborhoodInfo, setNeighborhoodInfo] = useState({})

    const { nombreBarrio } = useParams(); //Devuelve un objeto con sus parametros recibidos por URL.


    //useContext: Recibiendo desde Router 'setFilteredResultGlobal': (ATERRIZAJE de set para recoger datos)
    const { setLoggedUser } = useContext(GlobalContext);

    //Push called in Functions.js
    const historyNoToken = useHistory();

    //Called Function from Functions.js
    checkIfLogged(setLoggedUser, historyNoToken)



    useEffect(() => {
        const API_NEIGHBORHOODS = `${BASE_URL}neighborhoods/${nombreBarrio}`
        // Inicializando la const token
        const token = localStorage.getItem("ACCESS_TOKEN")
        if (token) setLoggedUser(true);

        const params = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token                          //Autorización con token para el acceso a la API 'coatsofarmsimages'
            },
        };
        fetch(API_NEIGHBORHOODS, params)

            .then(response => response.json())
            .then(data => {
                if (data.ok === false) {
                    historyNoToken.push("/error")
                } else {
                    setNeighborhoodInfo(data.result)
                }
            })
    }, [historyNoToken, setLoggedUser, nombreBarrio])

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [])





    return (

        <div className="main-neghborhoodProfile" >
            {NeighborhoodInfo &&
                <div>
                    <div className="main-profile-image " >
                        <img className="main-profile-image__img" width="1200px" src={NeighborhoodInfo.photo} alt="" />
                        <div className="main-profile-image__centered" >{NeighborhoodInfo.name?.toUpperCase()}</div>
                    </div>

                    <div className="kiez-properties-title" >KIEZ PROPERTIES</div>

                    <div className="history" >{NeighborhoodInfo?.history}</div>

                    <PropertiesGrid NeighborhoodInfo={NeighborhoodInfo} />
                </div>

            }




        </div>
    )
}
