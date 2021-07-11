import "./CreateNeighborhoodForm.scss";
// import { Form, Input, Button, notification } from "antd";
// import { LeftCircleOutlined, DollarOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import { GlobalContext } from "../../Router";
import { useContext } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import ArchitectureDropdown from "./Dropdowns/ArchitectureDropdown";
import PartyWinnerDropdown from "./Dropdowns/PartyWinnerDropDown";
import Modal from "./Modals/Modal"
import TransportZoneDropdown from "./Dropdowns/TransportZoneDropDown"
import LowHighDropDown from "./Dropdowns/LowHighDropDown";
import LifeCostDropDown from "./Dropdowns/LifeCostDropDown";
import CitizenAverageAgeDropDown from "./Dropdowns/CitizenAverageAgeDropDown";
import CinemasAndMuseumsDropDown from "./Dropdowns/CinemasAndMuseumsDropDown"

import { useForm } from '../../hooks/useForm';

export default function CreateNeighborhoodForm() {




    function addNeighborhood(e) {
        const API_NEIGHBORHOODS = "http://localhost:3000/adminUsers";
        const token = localStorage.getItem("ADMIN_TOKEN")
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
        fetch(API_NEIGHBORHOODS, params)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if (data.ok === true) {
                    alert("Neighborhood added successfully!")
                } else {
                    alert("Properties missing.")
                }
            });
    }



    const [neighborhoodProperties, setNeighborhoodProperties] = useState({});

    const [DistrictName, setDistrictName] = useState([])

    const { setLoggedUser } = useContext(GlobalContext);


    // FETCH NEIGHBORHOOD PROPERTIES
    useEffect(() => {
        // Inicializando la const token
        const token = localStorage.getItem("ACCESS_TOKEN")
        if (token) setLoggedUser(true);
        const API_NEIGHBORHOODS_PROPERTIES = "http://localhost:3000/neighborhoodsProperties/";
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



    // FETCH DISTRICTS 
    useEffect(() => {
        // Inicializando la const token
        const token = localStorage.getItem("ACCESS_TOKEN")
        if (token) setLoggedUser(true);
        const API_COAT_OF_ARMS_IMAGES = "http://localhost:3000/coatsofarmsimages/";
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



    return (

        <div className="main-form"  >


            {neighborhoodProperties &&
                (
                    <div  >

                        <Form onSubmit={(e) => addNeighborhood(e)} >

                            {/* __________________1/20 NEIGHBORHOOD DISTRICT__________________ */}

                            <Form.Group controlId="InputDistrict">
                                <div className="form-input" >
                                    <div  >
                                        <Form.Label                                        >
                                            <div>{neighborhoodProperties.district}:</div>

                                        </Form.Label>
                                    </div>

                                    <div  >
                                        <Modal DistrictName={DistrictName} handleInputChange={handleInputChange} form={form} />
                                    </div>
                                </div>
                            </Form.Group>




                            {/* __________________2/20 NEIGHBORHOOD NAME DONE__________________ */}

                            <Form.Group controlId="InputName">
                                <div className="form-input" >
                                    <div  >
                                        <Form.Label >

                                            {`${neighborhoodProperties?.name}:`}

                                        </Form.Label>
                                    </div>

                                    <div  >
                                        <Form.Control
                                            onChange={(e) => handleInputChange(e)}
                                            value={form.neighborhoodName}
                                            name="neighborhoodName"
                                            className="create-button-input"
                                            type="text"
                                            placeholder="Enter the Neighborhood Name" />
                                    </div>


                                </div>
                            </Form.Group>




                            {/* __________________3/20 NEIGHBORHOOD ARCHITECTURE DONE__________________ */}

                            <Form.Group controlId="InputArchitecture">
                                <div className="form-input " >
                                    <div >
                                        <Form.Label >

                                            {`${neighborhoodProperties?.architecturePredominance?.name}:`}

                                        </Form.Label>
                                    </div>

                                    <div  >
                                        <Dropdown>


                                            <DropdownButton
                                                className="create-button-input"
                                                size="lg"
                                                variant="success"
                                                title={form.neighborhoodArchitecture ? form.neighborhoodArchitecture : "Architecture Styles"}
                                                onSelect={(e) => handleInputChange({ target: { name: "neighborhoodArchitecture", value: e } })}
                                                value={form.neighborhoodArchitecture}
                                                name="neighborhoodArchitecture"

                                            >

                                                {neighborhoodProperties &&
                                                    (
                                                        <div className="districts-menu" >

                                                            <ArchitectureDropdown
                                                                neighborhoodProperties={neighborhoodProperties}
                                                            />
                                                        </div>

                                                    )}
                                            </DropdownButton>


                                        </Dropdown>
                                    </div>

                                </div>


                            </Form.Group>





                            {/* __________________4/20 NEIGHBORHOOD INTERNATIONALITY DONE__________________ */}

                            <Form.Group controlId="InputInternationality">
                                <div className="form-input" >
                                    <div  >
                                        <Form.Label >

                                            {`${neighborhoodProperties?.internationality}:`}

                                        </Form.Label>
                                    </div>

                                    <div  >
                                        <Form.Control
                                            onChange={(e) => handleInputChange(e)}
                                            value={form.neighborhoodInternationality}
                                            name="neighborhoodInternationality"
                                            className="create-button-input"
                                            type="text"
                                            placeholder="Enter a Number"

                                        />
                                    </div>
                                </div>

                            </Form.Group>







                            {/* __________________5/20 NEIGHBORHOOD PARTY WINNER DONE__________________ */}

                            <Form.Group controlId="InputPartyWinner">
                                <div className="form-input" >
                                    <div  >
                                        <Form.Label >
                                            {`${neighborhoodProperties?.partyWinner?.name}:`}

                                        </Form.Label>
                                    </div>

                                    <div  >
                                        <Dropdown>


                                            <DropdownButton
                                                className="create-button-input"
                                                size="lg" variant="success"
                                                title={form.neighborhoodPartyWinner ? form.neighborhoodPartyWinner : "Parties"}
                                                onSelect={(e) => handleInputChange({ target: { name: "neighborhoodPartyWinner", value: e } })}
                                                value={form.neighborhoodPartyWinner}
                                                name="neighborhoodPartyWinner"
                                            >

                                                {neighborhoodProperties &&
                                                    (
                                                        <div className="districts-menu" >

                                                            <PartyWinnerDropdown
                                                                neighborhoodProperties={neighborhoodProperties}
                                                            />
                                                        </div>
                                                    )}
                                            </DropdownButton>

                                        </Dropdown>
                                    </div>
                                </div>

                            </Form.Group>




                            {/* __________________6/20 NEIGHBORHOOD TRANSPORT ZONE DONE__________________ */}

                            <Form.Group controlId="InputTransportZone">
                                <div className="form-input" >
                                    <div  >
                                        <Form.Label >
                                            {`${neighborhoodProperties?.transportZone?.name}:`}

                                        </Form.Label>
                                    </div>

                                    <div  >
                                        <Dropdown>


                                            <DropdownButton
                                                className="create-button-input"
                                                size="lg" variant="success"
                                                title={form.neighborhoodTransportZone ? form.neighborhoodTransportZone : "Zones"}
                                                onSelect={(e) => handleInputChange({ target: { name: "neighborhoodTransportZone", value: e } })}
                                                value={form.neighborhoodTransportZone}
                                                name="neighborhoodTransportZone"
                                            >

                                                {neighborhoodProperties &&
                                                    (
                                                        <div className="districts-menu" >

                                                            <TransportZoneDropdown
                                                                neighborhoodProperties={neighborhoodProperties}
                                                            />
                                                        </div>
                                                    )}
                                            </DropdownButton>

                                        </Dropdown>
                                    </div>
                                </div>

                            </Form.Group>


                            {/* __________________7/20 NEIGHBORHOOD ACTIVITY RATE DONE__________________ */}


                            <Form.Group controlId="InputActivityRate">
                                <div className="form-input" >
                                    <div  >
                                        <Form.Label >
                                            {`${neighborhoodProperties?.activityRate?.name}:`}

                                        </Form.Label>
                                    </div>

                                    <div  >
                                        <Dropdown>

                                            <DropdownButton
                                                className="create-button-input"
                                                size="lg" variant="success"
                                                title={form.neighborhoodActivityRate ? form.neighborhoodActivityRate : "Ranges"}
                                                onSelect={(e) => handleInputChange({ target: { name: "neighborhoodActivityRate", value: e } })}
                                                value={form.neighborhoodActivityRate}
                                                name="neighborhoodActivityRate"
                                            >

                                                {neighborhoodProperties &&
                                                    (
                                                        <div className="districts-menu" >

                                                            <LowHighDropDown
                                                                neighborhoodProperties={neighborhoodProperties}
                                                            />
                                                        </div>
                                                    )}
                                            </DropdownButton>

                                        </Dropdown>
                                    </div>
                                </div>

                            </Form.Group>




                            {/* __________________8/20 NEIGHBORHOOD LIFE COST DONE__________________ */}


                            <Form.Group controlId="InputLifeCost">
                                <div className="form-input" >
                                    <div  >
                                        <Form.Label >
                                            {`${neighborhoodProperties?.lifeCost?.name}:`}

                                        </Form.Label>
                                    </div>

                                    <div  >
                                        <Dropdown>

                                            <DropdownButton
                                                className="create-button-input"
                                                size="lg" variant="success"
                                                title={form.neighborhoodLifeCost ? form.neighborhoodLifeCost : "Ranges"}
                                                onSelect={(e) => handleInputChange({ target: { name: "neighborhoodLifeCost", value: e } })}
                                                value={form.neighborhoodLifeCost}
                                                name="neighborhoodLifeCost"
                                            >

                                                {neighborhoodProperties &&
                                                    (
                                                        <div className="districts-menu" >

                                                            <LifeCostDropDown
                                                                neighborhoodProperties={neighborhoodProperties}
                                                            />
                                                        </div>
                                                    )}
                                            </DropdownButton>

                                        </Dropdown>
                                    </div>
                                </div>

                            </Form.Group>







                            {/* __________________9/20 NEIGHBORHOOD INHABITANTS DENSITY DONE__________________ */}

                            <Form.Group controlId="InputInhabitantsDensity">
                                <div className="form-input" >
                                    <div  >
                                        <Form.Label >
                                            {`${neighborhoodProperties?.inhabitantsDensity?.name}:`}

                                        </Form.Label>
                                    </div>

                                    <div  >
                                        <Dropdown>

                                            <DropdownButton
                                                className="create-button-input"
                                                size="lg" variant="success"
                                                title={form.neighborhoodInhabitantsDensity ? form.neighborhoodInhabitantsDensity : "Ranges"}
                                                onSelect={(e) => handleInputChange({ target: { name: "neighborhoodInhabitantsDensity", value: e } })}
                                                value={form.neighborhoodInhabitantsDensity}
                                                name="neighborhoodInhabitantsDensity"
                                            >

                                                {neighborhoodProperties &&
                                                    (
                                                        <div className="districts-menu" >

                                                            <LowHighDropDown
                                                                neighborhoodProperties={neighborhoodProperties}
                                                            />
                                                        </div>
                                                    )}
                                            </DropdownButton>

                                        </Dropdown>
                                    </div>
                                </div>

                            </Form.Group>



                            {/* __________________10/20 NEIGHBORHOOD CITIZENS AVERAGE AGE DONE__________________ */}

                            <Form.Group controlId="InputCitizenAverageAge">
                                <div className="form-input" >
                                    <div  >
                                        <Form.Label >
                                            {`${neighborhoodProperties?.citizenAverageAge?.name}:`}

                                        </Form.Label>
                                    </div>

                                    <div  >
                                        <Dropdown>

                                            <DropdownButton
                                                className="create-button-input"
                                                size="lg" variant="success"
                                                title={form.neighborhoodCitizenAverageAge ? form.neighborhoodCitizenAverageAge : "Ranges"}
                                                onSelect={(e) => handleInputChange({ target: { name: "neighborhoodCitizenAverageAge", value: e } })}
                                                value={form.neighborhoodCitizenAverageAge}
                                                name="neighborhoodCitizesAverageAge"
                                            >

                                                {neighborhoodProperties &&
                                                    (
                                                        <div className="districts-menu" >

                                                            <CitizenAverageAgeDropDown
                                                                neighborhoodProperties={neighborhoodProperties}
                                                            />
                                                        </div>
                                                    )}
                                            </DropdownButton>

                                        </Dropdown>
                                    </div>
                                </div>

                            </Form.Group>


                            {/* __________________11/20 NEIGHBORHOOD GYM DENSITY DONE__________________ */}

                            <Form.Group controlId="InputGymDensity">
                                <div className="form-input" >
                                    <div  >
                                        <Form.Label >
                                            {`${neighborhoodProperties?.gymDensity?.name}:`}

                                        </Form.Label>
                                    </div>

                                    <div  >
                                        <Dropdown>

                                            <DropdownButton
                                                className="create-button-input"
                                                size="lg" variant="success"
                                                title={form.neighborhoodGymDensity ? form.neighborhoodGymDensity : "Ranges"}
                                                onSelect={(e) => handleInputChange({ target: { name: "neighborhoodGymDensity", value: e } })}
                                                value={form.neighborhoodGymDensity}
                                                name="neighborhoodGymDensity"
                                            >

                                                {neighborhoodProperties &&
                                                    (
                                                        <div className="districts-menu" >

                                                            <LowHighDropDown
                                                                neighborhoodProperties={neighborhoodProperties}
                                                            />
                                                        </div>
                                                    )}
                                            </DropdownButton>

                                        </Dropdown>
                                    </div>
                                </div>

                            </Form.Group>



                            {/* __________________12/20 NEIGHBORHOOD RESTAURANTS DENSITY__________________ */}

                            <Form.Group controlId="InputRestaurantsDensity">
                                <div className="form-input" >
                                    <div  >
                                        <Form.Label >
                                            {`${neighborhoodProperties?.restaurantsDensity?.name}:`}

                                        </Form.Label>
                                    </div>

                                    <div  >
                                        <Dropdown>

                                            <DropdownButton
                                                className="create-button-input"
                                                size="lg" variant="success"
                                                title={form.neighborhoodRestaurantsDensity ? form.neighborhoodRestaurantsDensity : "Ranges"}
                                                onSelect={(e) => handleInputChange({ target: { name: "neighborhoodRestaurantsDensity", value: e } })}
                                                value={form.neighborhoodRestaurantsDensity}
                                                name="neighborhoodRestaurantsDensity"
                                            >

                                                {neighborhoodProperties &&
                                                    (
                                                        <div className="districts-menu" >

                                                            <LowHighDropDown
                                                                neighborhoodProperties={neighborhoodProperties}
                                                            />
                                                        </div>
                                                    )}
                                            </DropdownButton>

                                        </Dropdown>
                                    </div>
                                </div>

                            </Form.Group>



                            {/* __________________13/20 NEIGHBORHOOD CINEMAS__________________ */}

                            <Form.Group controlId="InputCinemas">
                                <div className="form-input" >
                                    <div  >
                                        <Form.Label >
                                            {`${neighborhoodProperties?.cinemas?.name}:`}

                                        </Form.Label>
                                    </div>

                                    <div  >
                                        <Dropdown>

                                            <DropdownButton
                                                className="create-button-input"
                                                size="lg" variant="success"
                                                title={form.neighborhoodCinemas ? form.neighborhoodCinemas : "Ranges"}
                                                onSelect={(e) => handleInputChange({ target: { name: "neighborhoodCinemas", value: e } })}
                                                value={form.neighborhoodCinemas}
                                                name="neighborhoodCinemas"
                                            >

                                                {neighborhoodProperties &&
                                                    (
                                                        <div className="districts-menu" >

                                                            <CinemasAndMuseumsDropDown
                                                                neighborhoodProperties={neighborhoodProperties}
                                                            />
                                                        </div>
                                                    )}
                                            </DropdownButton>

                                        </Dropdown>
                                    </div>
                                </div>

                            </Form.Group>


                            {/* __________________14/20 NEIGHBORHOOD MUSEUMS__________________ */}

                            <Form.Group controlId="InputMuseums">
                                <div className="form-input" >
                                    <div  >
                                        <Form.Label >
                                            {`${neighborhoodProperties?.museums?.name}:`}

                                        </Form.Label>
                                    </div>

                                    <div  >
                                        <Dropdown>

                                            <DropdownButton
                                                className="create-button-input"
                                                size="lg" variant="success"
                                                title={form.neighborhoodMuseums ? form.neighborhoodMuseums : "Ranges"}
                                                onSelect={(e) => handleInputChange({ target: { name: "neighborhoodMuseums", value: e } })}
                                                value={form.neighborhoodMuseums}
                                                name="neighborhoodMuseums"
                                            >

                                                {neighborhoodProperties &&
                                                    (
                                                        <div className="districts-menu" >

                                                            <CinemasAndMuseumsDropDown
                                                                neighborhoodProperties={neighborhoodProperties}
                                                            />
                                                        </div>
                                                    )}
                                            </DropdownButton>

                                        </Dropdown>
                                    </div>
                                </div>

                            </Form.Group>



                            {/* __________________15/20 NEIGHBORHOOD AIR QUALITY__________________ */}

                            <Form.Group controlId="InputAirQuality">
                                <div className="form-input" >
                                    <div  >
                                        <Form.Label >
                                            {`${neighborhoodProperties?.airQuality?.name}:`}

                                        </Form.Label>
                                    </div>

                                    <div  >
                                        <Dropdown>

                                            <DropdownButton
                                                className="create-button-input"
                                                size="lg" variant="success"
                                                title={form.neighborhoodAirQuality ? form.neighborhoodAirQuality : "Ranges"}
                                                onSelect={(e) => handleInputChange({ target: { name: "neighborhoodAirQuality", value: e } })}
                                                value={form.neighborhoodAirQuality}
                                                name="neighborhoodAirQuality"
                                            >

                                                {neighborhoodProperties &&
                                                    (
                                                        <div className="districts-menu" >

                                                            <LowHighDropDown
                                                                neighborhoodProperties={neighborhoodProperties}
                                                            />
                                                        </div>
                                                    )}
                                            </DropdownButton>

                                        </Dropdown>
                                    </div>
                                </div>

                            </Form.Group>



                            {/* __________________16/20 NEIGHBORHOOD CLEANNESS__________________ */}

                            <Form.Group controlId="InputCleanness">
                                <div className="form-input" >
                                    <div  >
                                        <Form.Label >
                                            {`${neighborhoodProperties?.cleanness?.name}:`}

                                        </Form.Label>
                                    </div>

                                    <div  >
                                        <Dropdown>

                                            <DropdownButton
                                                className="create-button-input"
                                                size="lg" variant="success"
                                                title={form.neighborhoodCleanness ? form.neighborhoodCleanness : "Ranges"}
                                                onSelect={(e) => handleInputChange({ target: { name: "neighborhoodCleanness", value: e } })}
                                                value={form.neighborhoodCleanness}
                                                name="neighborhoodCleanness"
                                            >

                                                {neighborhoodProperties &&
                                                    (
                                                        <div className="districts-menu" >

                                                            <LowHighDropDown
                                                                neighborhoodProperties={neighborhoodProperties}
                                                            />
                                                        </div>
                                                    )}
                                            </DropdownButton>

                                        </Dropdown>
                                    </div>
                                </div>

                            </Form.Group>



                            {/* __________________17/20 NEIGHBORHOOD GREEN AREA DENSITY__________________ */}

                            <Form.Group controlId="InputGreenAreasDensity">
                                <div className="form-input" >
                                    <div  >
                                        <Form.Label >
                                            {`${neighborhoodProperties?.greenAreasDensity?.name}:`}

                                        </Form.Label>
                                    </div>

                                    <div  >
                                        <Dropdown>

                                            <DropdownButton
                                                className="create-button-input"
                                                size="lg" variant="success"
                                                title={form.neighborhoodGreenAreasDensity ? form.neighborhoodGreenAreasDensity : "Ranges"}
                                                onSelect={(e) => handleInputChange({ target: { name: "neighborhoodGreenAreasDensity", value: e } })}
                                                value={form.neighborhoodGreenAreasDensity}
                                                name="neighborhoodGreenAreasDensity"
                                            >

                                                {neighborhoodProperties &&
                                                    (
                                                        <div className="districts-menu" >

                                                            <LowHighDropDown
                                                                neighborhoodProperties={neighborhoodProperties}
                                                            />
                                                        </div>
                                                    )}
                                            </DropdownButton>

                                        </Dropdown>
                                    </div>
                                </div>

                            </Form.Group>



                            {/* __________________18/20 NEIGHBORHOOD NOISE LEVEL__________________ */}

                            <Form.Group controlId="InputNoiseLevel">
                                <div className="form-input" >
                                    <div  >
                                        <Form.Label >
                                            {`${neighborhoodProperties?.noiseLevel?.name}:`}

                                        </Form.Label>
                                    </div>

                                    <div  >
                                        <Dropdown>

                                            <DropdownButton
                                                className="create-button-input"
                                                size="lg" variant="success"
                                                title={form.neighborhoodNoiseLevel ? form.neighborhoodNoiseLevel : "Ranges"}
                                                onSelect={(e) => handleInputChange({ target: { name: "neighborhoodNoiseLevel", value: e } })}
                                                value={form.neighborhoodNoiseLevel}
                                                name="neighborhoodNoiseLevel"
                                            >

                                                {neighborhoodProperties &&
                                                    (
                                                        <div className="districts-menu" >

                                                            <LowHighDropDown
                                                                neighborhoodProperties={neighborhoodProperties}
                                                            />
                                                        </div>
                                                    )}
                                            </DropdownButton>

                                        </Dropdown>
                                    </div>
                                </div>

                            </Form.Group>


                            {/* __________________19/20 NEIGHBORHOOD SAFETY__________________ */}

                            <Form.Group controlId="InputSafety">
                                <div className="form-input" >
                                    <div  >
                                        <Form.Label >
                                            {`${neighborhoodProperties?.safety?.name}:`}

                                        </Form.Label>
                                    </div>

                                    <div  >
                                        <Dropdown>

                                            <DropdownButton
                                                className="create-button-input"
                                                size="lg" variant="success"
                                                title={form.neighborhoodSafety ? form.neighborhoodSafety : "Ranges"}
                                                onSelect={(e) => handleInputChange({ target: { name: "neighborhoodSafety", value: e } })}
                                                value={form.neighborhoodSafety}
                                                name="neighborhoodSafety"
                                            >

                                                {neighborhoodProperties &&
                                                    (
                                                        <div className="districts-menu" >

                                                            <LowHighDropDown
                                                                neighborhoodProperties={neighborhoodProperties}
                                                            />
                                                        </div>
                                                    )}
                                            </DropdownButton>

                                        </Dropdown>
                                    </div>
                                </div>

                            </Form.Group>



                            {/* __________________20/20 PRIVATE PARKING DENSITY SAFETY__________________ */}

                            <Form.Group controlId="InputPrivateParkingDensity">
                                <div className="form-input" >
                                    <div  >
                                        <Form.Label >
                                            {`${neighborhoodProperties?.privateParkingDensity?.name}:`}

                                        </Form.Label>
                                    </div>

                                    <div  >
                                        <Dropdown>

                                            <DropdownButton
                                                className="create-button-input"
                                                size="lg" variant="success"
                                                title={form.neighborhoodPrivateParkingDensity ? form.neighborhoodPrivateParkingDensity : "Ranges"}
                                                onSelect={(e) => handleInputChange({ target: { name: "neighborhoodPrivateParkingDensity", value: e } })}
                                                value={form.neighborhoodPrivateParkingDensity}
                                                name="neighborhoodPrivateParkingDensity"

                                            >

                                                {neighborhoodProperties &&
                                                    (
                                                        <div className="districts-menu" >

                                                            <LowHighDropDown
                                                                neighborhoodProperties={neighborhoodProperties}
                                                            />
                                                        </div>
                                                    )}
                                            </DropdownButton>

                                        </Dropdown>
                                    </div>
                                </div>

                            </Form.Group>



                            {/* __________________21/21 NEIGHBORHOOD PHOTO__________________ */}

                            <Form.Group controlId="InputPhoto">
                                <div className="form-input" >
                                    <div  >
                                        <Form.Label >

                                            {`${neighborhoodProperties?.photo}:`}

                                        </Form.Label>
                                    </div>

                                    <div  >
                                        <Form.Control
                                            onChange={(e) => handleInputChange(e)}
                                            value={form.neighborhoodPhoto}
                                            name="neighborhoodPhoto"
                                            className="create-button-input"
                                            type="text"
                                            placeholder="Paste the URL" />
                                    </div>


                                </div>
                            </Form.Group>


                            {/* __________________21/21 NEIGHBORHOOD LNG__________________ */}

                            <Form.Group controlId="InputLng">
                                <div className="form-input" >
                                    <div  >
                                        <Form.Label >

                                            {`${neighborhoodProperties?.lng}:`}

                                        </Form.Label>
                                    </div>

                                    <div  >
                                        <Form.Control
                                            onChange={(e) => handleInputChange(e)}
                                            value={form.neighborhoodLng}
                                            name="neighborhoodLng"
                                            className="create-button-input"
                                            type="text"
                                            placeholder="Add Longitude" />
                                    </div>


                                </div>
                            </Form.Group>


                            {/* __________________22/22 NEIGHBORHOOD LNG__________________ */}

                            <Form.Group controlId="InputLat">
                                <div className="form-input" >
                                    <div  >
                                        <Form.Label >

                                            {`${neighborhoodProperties?.lat}:`}

                                        </Form.Label>
                                    </div>

                                    <div  >
                                        <Form.Control
                                            onChange={(e) => handleInputChange(e)}
                                            value={form.neighborhoodLat}
                                            name="neighborhoodLat"
                                            className="create-button-input"
                                            type="text"
                                            placeholder="Add Latitude" />
                                    </div>


                                </div>
                            </Form.Group>



                            {/* __________________7/20 NEIGHBORHOOD SUPERMARKETS DENSITY__________________ */}


                            <Form.Group controlId="superMarketsDensity">
                                <div className="form-input" >
                                    <div  >
                                        <Form.Label >
                                            {`${neighborhoodProperties?.superMarketsDensity?.name}:`}

                                        </Form.Label>
                                    </div>

                                    <div  >
                                        <Dropdown>

                                            <DropdownButton
                                                className="create-button-input"
                                                size="lg" variant="success"
                                                title={form.neighborhoodsuperMarketsDensity ? form.neighborhoodsuperMarketsDensity : "Ranges"}
                                                onSelect={(e) => handleInputChange({ target: { name: "neighborhoodsuperMarketsDensity", value: e } })}
                                                value={form.neighborhoodsuperMarketsDensity}
                                                name="neighborhoodsuperMarketsDensity"
                                            >

                                                {neighborhoodProperties &&
                                                    (
                                                        <div className="districts-menu" >

                                                            <LowHighDropDown
                                                                neighborhoodProperties={neighborhoodProperties}
                                                            />
                                                        </div>
                                                    )}
                                            </DropdownButton>

                                        </Dropdown>
                                    </div>
                                </div>

                            </Form.Group>



                            {/* __________________7/20 NEIGHBORHOOD NIGHT LIFE__________________ */}


                            <Form.Group controlId="nightLife">
                                <div className="form-input" >
                                    <div  >
                                        <Form.Label >
                                            {`${neighborhoodProperties?.nightLife?.name}:`}

                                        </Form.Label>
                                    </div>

                                    <div  >
                                        <Dropdown>

                                            <DropdownButton
                                                className="create-button-input"
                                                size="lg" variant="success"
                                                title={form.neighborhoodNightLife ? form.neighborhoodNightLife : "Ranges"}
                                                onSelect={(e) => handleInputChange({ target: { name: "neighborhoodNightLife", value: e } })}
                                                value={form.neighborhoodNightLife}
                                                name="neighborhoodNightLife"
                                            >

                                                {neighborhoodProperties &&
                                                    (
                                                        <div className="districts-menu" >

                                                            <LowHighDropDown
                                                                neighborhoodProperties={neighborhoodProperties}
                                                            />
                                                        </div>
                                                    )}
                                            </DropdownButton>

                                        </Dropdown>
                                    </div>
                                </div>

                            </Form.Group>







                            {/* TOOLTIP */}
                            {/* <>
                                {['top', 'right', 'bottom', 'left'].map((placement) => (
                                    <OverlayTrigger
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Tooltip id={`tooltip-${neighborhoodProperties?.name}`}>
                                                Tooltip on <strong>{neighborhoodProperties?.name}</strong>.
                                            </Tooltip>
                                        }
                                    >
                                        <Button variant="secondary">Tooltip on {placement}</Button>
                                    </OverlayTrigger>
                                ))}
                            </> */}



                            <Button variant="primary" type="submit" size="lg" block>
                                Submit
                            </Button>

                        </Form>



                    </div>
                )
            }

        </div >

    )
}





