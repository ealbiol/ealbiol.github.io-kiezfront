import './NeighborhoodProfile.scss'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropertiesGrid from "../components/PropertiesGrid/PropertiesGrid"

import { GlobalContext } from "../Router";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import checkIfLogged from "../Functions/Functions"
import { BASE_URL } from "../config/config";


export default function NeighborhoodProfile() {


    const [NeighborhoodInfo, setNeighborhoodInfo] = useState({})

    const { nombreBarrio } = useParams();


    const { setLoggedUser } = useContext(GlobalContext);

    const historyNoToken = useHistory();

    checkIfLogged(setLoggedUser, historyNoToken)



    useEffect(() => {
        const API_NEIGHBORHOODS = `${BASE_URL}neighborhoods/${nombreBarrio}`
        const token = localStorage.getItem("ACCESS_TOKEN")
        if (token) setLoggedUser(true);

        const params = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
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
                        <img className="main-profile-image__img" width="1400px" src={NeighborhoodInfo.photo} alt="" />
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
