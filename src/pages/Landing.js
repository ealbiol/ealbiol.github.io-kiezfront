import "./Landing.scss";
import MottoNavbar from "../components/MottoNavbar/MottoNavbar";
import Map from "../components/Map/Map"
import MottoLanding from "../components/MottoLanding/MottoLanding"
import Description from "../components/Description/Description"
import { useState, useEffect, useContext } from "react";
import YoutubeBackground from 'react-youtube-background'
import BoxNeighborhoods from "../components/BoxNeighborhoods/BoxNeighborhoods";
import { GlobalContext } from "../Router";

import { useHistory } from "react-router-dom";
import { BASE_URL } from "../config/config";



export default function Landing() {

    const [Neighborhoods, setNeighborhoods] = useState([])

    const { loggedUser, setLoggedUser } = useContext(GlobalContext);


    useEffect(() => {
        const token = localStorage.getItem("ACCESS_TOKEN")
        if (token) setLoggedUser(true);
        const API_NEIGHBORHOODS = `${BASE_URL}neighborhoods/`;
        const params = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            },
        };
        fetch(API_NEIGHBORHOODS, params)
            .then((response) => response.json())
            .then((data) => {
                setNeighborhoods(data.neighborhoods);
                setNeighborhoodsDynamic(data.neighborhoods);
            });
    }, [setLoggedUser]);



    const [activateBox, setActivateBox] = useState(false)


    const [youtubeID] = useState('sf7Z4HNq-4s')


    const [NeighborhoodsDynamic, setNeighborhoodsDynamic] = useState([])

    const [Typed, setTyped] = useState("")


    useEffect(() => {
        if (Neighborhoods !== "") {
            setNeighborhoodsDynamic(
                Neighborhoods.filter((neighborhood) => {
                    return neighborhood.name
                        .toLowerCase()
                        .includes(Typed.toLocaleLowerCase());
                })
            );
        }
    }, [Typed, Neighborhoods]);

    const historyGoToLogin = useHistory();


    function goToLogin() {
        historyGoToLogin.push(`/login`);
    }


    return (

        <div className="landing-main ">


            {loggedUser &&
                (<div>



                    <YoutubeBackground
                        videoId={youtubeID}
                        className="landing-main__video-landing"
                    >


                        <MottoLanding />

                    </YoutubeBackground>

                    <Description />

                    <MottoNavbar activateBox={activateBox} setActivateBox={setActivateBox} setTyped={setTyped} />


                    <BoxNeighborhoods NeighborhoodsDynamic={NeighborhoodsDynamic} activateBox={activateBox} />


                    <div className="landing-main__content">
                        <Map NeighborhoodsDynamic={NeighborhoodsDynamic} />
                    </div>

                </div>

                )}
            {!loggedUser &&
                goToLogin()}

        </div >

    )
}






