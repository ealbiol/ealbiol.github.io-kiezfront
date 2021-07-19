import "./UpdateNeighborhoodForm.scss"

import { useState, useEffect, } from "react";
import { GlobalContext } from "../../Router";
import { useContext } from "react";

import { useForm } from '../../hooks/useForm';
import { BASE_URL } from "../../config/config";
import { useHistory } from "react-router-dom";

import FormDropDown from "../FormDropDown/FormDropDown"



import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form'


export default function UpdateNeighborhoodForm() {


    const [NeighborhoodsName, setNeighborhoodsName] = useState("")

    const [NeighborhoodsNameDynamic, setNeighborhoodsNameDynamic] = useState("")
    const [NeighborhoodDelete, setNeighborhoodDelete] = useState([]);
    const [refresh, setRefresh] = useState(false);



    //////

    //History Button
    const historyGoToCreatedNeighborhood = useHistory();


    function addNeighborhood(e) {
        const API_NEIGHBORHOODS = `${BASE_URL}adminUsers`;
        const token = localStorage.getItem("ADMIN_TOKEN")
        let name = form.neighborhoodName;
        console.log("NOMBRE", form.neighborhoodName)
        e.preventDefault()
        console.log("FORM", form);
        const params = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token                          //Autorización con token para el acceso a la API 'coatsofarmsimages'
            },
            body: JSON.stringify(form)
        };
        if (form.distrcit === "" ||
            form.neighborhoodName === "" ||
            form.architecturePredominance?.name === "" ||
            form.internationality === "" ||
            form.partyWinner?.name === "" ||
            form.transportZone?.name === "" ||
            form.activityRate?.name === "" ||
            form.lifeCost?.name === "" ||
            form.inhabitantsDensity?.name === "" ||
            form.gymDensity?.name === "" ||
            form.restaurantsDensity?.name === "" ||
            form.cinemas?.name === "" ||
            form.museums?.name === "" ||
            form.nightLife?.name === "" ||
            form.airQuality?.name === "" ||
            form.cleanness?.name === "" ||
            form.greenAreasDensity?.name === "" ||
            form.noiseLevel?.name === "" ||
            form.noiseLevel?.name === "" ||
            form.safety?.name === "" ||
            form.privateParkingDensity?.name === "" ||
            form.photo === "" ||
            form.lng === "" ||
            form.lat === "" ||
            form.citizenAverageAge?.name === "" ||
            form.superMarketsDensity?.name === ""
        ) {

            alert("Properties Missing")
        } else {
            fetch(API_NEIGHBORHOODS, params)
                .then((response) => response.json())
                .then((data) => {
                    if (data.ok === true) {
                        alert("Neighborhood added successfully!")

                        historyGoToCreatedNeighborhood.push(`/neighborhoodprofile/${name}`)
                    } else {
                        alert("Properties missing.")
                    }
                });
        }

    }



    const [neighborhoodProperties, setNeighborhoodProperties] = useState({});

    const [DistrictName, setDistrictName] = useState([])

    const { setLoggedUser } = useContext(GlobalContext);


    // FETCH NEIGHBORHOOD PROPERTIES
    useEffect(() => {
        // Inicializando la const token
        const token = localStorage.getItem("ACCESS_TOKEN")
        if (token) setLoggedUser(true);
        const API_NEIGHBORHOODS_PROPERTIES = `${BASE_URL}neighborhoodsProperties/`;
        const params = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token                          //Autorización con token para el acceso a la API 'coatsofarmsimages'
            },
        };
        fetch(API_NEIGHBORHOODS_PROPERTIES, params)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setNeighborhoodProperties(data.neighborhoodsProperties);
            });
    }, [setLoggedUser]);

    // FETCH NEIGHBORHOODS
    useEffect(() => {
        // Inicializando la const token
        const token = localStorage.getItem("ACCESS_TOKEN")
        if (token) setLoggedUser(true);
        const NEIGHBORHOODS = `${BASE_URL}neighborhoods`;
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
                setNeighborhoodsNameDynamic(data.neighborhoods)
                setRefresh(false);
            });
    }, [setLoggedUser, refresh]);

    // FETCH DISTRICTS 
    useEffect(() => {
        // Inicializando la const token
        const token = localStorage.getItem("ACCESS_TOKEN")
        if (token) setLoggedUser(true);
        const API_COAT_OF_ARMS_IMAGES = `${BASE_URL}coatsofarmsimages/`;
        const params = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token                          //Autorización con token para el acceso a la API 'coatsofarmsimages'
            },
        };
        fetch(API_COAT_OF_ARMS_IMAGES, params)
            .then((response) => response.json())
            .then((data) => {
                setDistrictName(data.coatofarmsimages);
            });
    }, [setLoggedUser]);

    const [neighborhoodUpdate, setNeighborhoodUpdate] = useState("")



    const initialFormState = {
        neighborhoodDistrict: "",
        neighborhoodName: "",
        neighborhoodArchitecture: "",
        neighborhoodInternationality: "",
        neighborhoodPartyWinner: "",
        neighborhoodTransportZone: "",
        neighborhoodActivityRate: "",
        neighborhoodLifeCost: "",
        neighborhoodInhabitantsDensity: "",
        neighborhoodCitizenAverageAge: "",
        neighborhoodGymDensity: "",
        neighborhoodRestaurantsDensity: "",
        neighborhoodCinemas: "",
        neighborhoodMuseums: "",
        neighborhoodAirQuality: "",
        neighborhoodCleanness: "",
        neighborhoodGreenAreasDensity: "",
        neighborhoodNoiseLevel: "",
        neighborhoodSafety: "",
        neighborhoodPrivateParkingDensity: "",
        neighborhoodPhoto: "",
        neighborhoodLng: "",
        neighborhoodLat: "",
        neighborhoodsuperMarketsDensity: "",
        neighborhoodNightLife: ""
    };


    //useState Form
    const [form, handleInputChange] = useForm(initialFormState);


    function handleInputChangeRecord(e) {
        handleInputChange(e)
        setNeighborhoodsNameDynamic(NeighborhoodsName.filter((neighborhood) => {
            return neighborhood.name
                .toLowerCase()
                .includes(e.target.value.toLocaleLowerCase());
        }))

    }



    function deleteNeighborhood(e) {
        e.preventDefault()
        const token = localStorage.getItem("ACCESS_TOKEN")
        if (token) setLoggedUser(true);
        const NEIGHBORHOODS = `${BASE_URL}neighborhoods/deactivate`;

        // Objeto
        const params = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            },
            body: JSON.stringify({
                NeighborhoodDelete
            })
        }

        fetch(NEIGHBORHOODS, params)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setRefresh(true);
                setNeighborhoodDelete([])
            });
    }

    function selectElement(e) {

        const token = localStorage.getItem("ACCESS_TOKEN")
        if (token) setLoggedUser(true);
        const NEIGHBORHOODS = `${BASE_URL}neighborhoods/${e.target.id}`;
        const params = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            },
        };
        fetch(NEIGHBORHOODS, params)
            .then((response) => response.json())
            .then((data) => {
                setNeighborhoodUpdate(data);
            });

        console.log(e.target.id);
    }








    return (
        <div className="main-form"  >

            <div className="main-DeactivateNeighborhoodForm" >

                <Form onSubmit={(e) => deleteNeighborhood(e)} >

                    <Form.Group controlId="InputName">
                        <div className="form-input" >
                            <div  >
                                <Form.Label >


                                </Form.Label>
                            </div>

                            <div  >
                                <Form.Control

                                    onChange={(e) => handleInputChangeRecord(e)}
                                    value={form.neighborhoodName}
                                    name="neighborhoodName"
                                    className="create-button-input"
                                    type="text"
                                    placeholder="Enter the Neighborhood Name" />
                            </div>


                        </div>
                    </Form.Group>
                    {
                        NeighborhoodsNameDynamic &&
                        (
                            NeighborhoodsNameDynamic.map((neighborhood, key) => {
                                if (key <= 20) {
                                    return (

                                        <Button
                                            //checked={NeighborhoodDelete.includes(neighborhood.name)}
                                            onClick={e => selectElement(e)}
                                            variant="primary"
                                            type="button"

                                            id={neighborhood.name}

                                        >{neighborhood.name}</Button>


                                    )
                                }
                            })
                        )
                    }
                    <p>NEIGHBORHOODS TO DELETE:</p>
                    {
                        NeighborhoodDelete && (
                            NeighborhoodDelete.map(del => {
                                return (
                                    <p>{del}</p>
                                )
                            }))}
                    <Button onClick={(e) => (deleteNeighborhood(e))} variant="primary" type="submit" size="lg" block>
                        Borrar
                    </Button>
                </Form>

            </div>


            <FormDropDown neighborhoodUpdate={neighborhoodUpdate} />
        </div>
    )
}
