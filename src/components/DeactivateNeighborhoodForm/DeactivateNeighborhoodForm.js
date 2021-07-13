import "./DeactivateNeighborhoodForm.scss"

import { useState, useEffect } from "react";
import { GlobalContext } from "../../Router";
import { useContext } from "react";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import Button from "react-bootstrap/Button";

import Form from 'react-bootstrap/Form'

import { useForm } from '../../hooks/useForm';

import NeighborhoodsDropDown from "./DropDowns/NeighborhoodsDropDown"

import { BASE_URL } from "../../config/config";


export default function DeactivateNeighborhoodForm() {

    const [NeighborhoodsName, setNeighborhoodsName] = useState("")

    const [NeighborhoodsNameDynamic, setNeighborhoodsNameDynamic] = useState("")
    const [NeighborhoodDelete, setNeighborhoodDelete] = useState([]);
    const { setLoggedUser } = useContext(GlobalContext);

    // FETCH NEIGHBORHOODS
    useEffect(() => {
        // Inicializando la const token
        const token = localStorage.getItem("ACCESS_TOKEN")
        if (token) setLoggedUser(true);
        const NEIGHBORHOODS = `${BASE_URL}neighborhoods?nombreBarrio`;
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
            });
    }, [setLoggedUser]);




    const initialFormState = {
        neighborhoodName: ""
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
        console.log("Delete")
    }
    function changeElement(e) {
        console.log("Evento e", e)
        if (e.target.checked) {
            setNeighborhoodDelete(

                (NeighborhoodDelete) => [
                    ...NeighborhoodDelete,
                    e.target.id
                ]

            )
        } else {
            setNeighborhoodDelete(

                NeighborhoodDelete.filter((neighborhood) => {
                    return neighborhood !== e.target.id
                })


            );
        }

    }

    return (
        <div className="main-DeactivateNeighborhoodForm" >

            <Form onSubmit={(e) => deleteNeighborhood(e)} >
                {/*
                {NeighborhoodsName &&
                    (

                        <div>
                            <Form.Group controlId="InputArchitecture">
                                <div className="form-input " >
                                    <div >
                                        <Form.Label >

                                            Neighborhoods:

                                        </Form.Label>
                                    </div>

                                  <div  >
                                        <Dropdown>

                                            <DropdownButton
                                                className="create-button-input"
                                                size="lg"
                                                variant="success"
                                                title={form.neighborhoodName ? form.neighborhoodName : "Neighborhood Name"}
                                                onSelect={(e) => handleInputChange({ target: { name: "neighborhoodName", value: e } })}
                                                value={form.neighborhoodName}
                                                name="neighborhoodName"
                                            >

                                                {NeighborhoodsName &&
                                                    (
                                                        <div className="districts-menu" >

                                                            <NeighborhoodsDropDown
                                                                NeighborhoodsName={NeighborhoodsName}
                                                            />
                                                        </div>

                                                    )}
                                            </DropdownButton>

                                        </Dropdown>
                                    </div>
                                                   
                                </div>

                            </Form.Group>

                        </div>

                    )}
                                                */}


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

                                    <Form.Check
                                        checked={NeighborhoodDelete.includes(neighborhood.name)}
                                        onChange={e => changeElement(e)}
                                        type="checkbox"
                                        label={neighborhood.name}
                                        id={neighborhood.name}

                                    />


                                )
                            }
                        })
                    )
                }
                <p>LOS QUE VAMOS A BORRAR</p>
                {
                    NeighborhoodDelete && (
                        NeighborhoodDelete.map(del => {
                            return (
                                <p>{del}</p>
                            )
                        }))}



                <Button onClick={() => (deleteNeighborhood())} variant="primary" type="submit" size="lg" block>
                    Borrar
                </Button>
            </Form>

        </div>
    )
}


