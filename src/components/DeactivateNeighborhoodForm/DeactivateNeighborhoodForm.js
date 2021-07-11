import "./DeactivateNeighborhoodForm.scss"

import { useState, useEffect } from "react";
import { GlobalContext } from "../../Router";
import { useContext } from "react";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import Form from 'react-bootstrap/Form'

import { useForm } from '../../hooks/useForm';

import NeighborhoodsDropDown from "./DropDowns/NeighborhoodsDropDown"

import {BASE_URL} from "../../config/config";


export default function DeactivateNeighborhoodForm() {

    const [NeighborhoodsName, setNeighborhoodsName] = useState("")

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
    }, [setLoggedUser]);




    const initialFormState = {
        neighborhoodName: ""
    };

    //useState Form
    const [form, handleInputChange] = useForm(initialFormState);




    return (
        <div className="main-DeactivateNeighborhoodForm" >

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
        </div>
    )
}


