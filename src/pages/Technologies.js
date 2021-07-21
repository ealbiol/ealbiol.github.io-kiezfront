import "./Technologies.scss"
import { useState, useEffect } from "react";
import { GlobalContext } from "../Router";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import checkIfLogged from "../Functions/Functions"
import { BASE_URL } from "../config/config";
import TechDescription from "../components/TechDescription/TechDescription";

export default function Technologies() {


    const [Technologies, setTechnologies] = useState([]);

    const { setLoggedUser } = useContext(GlobalContext);

    const historyLink = useHistory();

    useEffect(() => {
        const token = checkIfLogged(setLoggedUser, historyLink)

        const API_TECHNOLOGIES = `${BASE_URL}technologies/`;
        const params = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            },
        };
        fetch(API_TECHNOLOGIES, params)
            .then((response) => response.json())
            .then((data) => setTechnologies(data.technologies));
    }, [setLoggedUser, historyLink]);


    return (

        <div className="propertiesGrid-grandparent" >
            <div className="propertiesGrid-parent " >
                {
                    Technologies.map((technology, index) => {
                        return (
                            <div className="propertiesGrid-parent__proertiesGrid-child"  >

                                <TechnologyElement
                                    propertyName={technology?.name}
                                    subPropertyName={technology?.tool}
                                    src={technology.image}
                                    link={technology.link}
                                    key={index}
                                />

                            </div>
                        )
                    })
                }

            </div>

            <TechDescription />
        </div>
    )
}


function TechnologyElement(props) {



    const {
        src,
        subPropertyName,
        link
    } = props;



    function handleLink() {
        window.open(`${link}`);
    }

    return (
        <div className="main-technologies " >
            <div className="main-technologies__property-box " >

                <img onClick={handleLink} className="main-technologies__property-box__technology-image " width="250px" src={src} alt="Tech icon" />
                <div className="main-technologies__property-box__sub-techName " >{subPropertyName?.toUpperCase()}</div>
            </div>
        </div>
    )
}


