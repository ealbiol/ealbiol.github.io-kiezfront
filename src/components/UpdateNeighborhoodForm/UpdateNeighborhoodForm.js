import "./UpdateNeighborhoodForm.scss"
import { useState, useEffect, } from "react";
import { GlobalContext } from "../../Router";
import { useContext } from "react";
import { BASE_URL } from "../../config/config";
import FormDropDown from "../FormDropDown/FormDropDown"
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form'


export default function UpdateNeighborhoodForm() {


    const [NeighborhoodsName, setNeighborhoodsName] = useState("")

    const [NeighborhoodsNameDynamic, setNeighborhoodsNameDynamic] = useState("")
    const [NeighborhoodDelete, setNeighborhoodDelete] = useState([]);
    const [refresh, setRefresh] = useState(false);




    const { setLoggedUser } = useContext(GlobalContext);


    useEffect(() => {
        const token = localStorage.getItem("ACCESS_TOKEN")
        if (token) setLoggedUser(true);
        const NEIGHBORHOODS = `${BASE_URL}neighborhoods`;
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
                setNeighborhoodsName(data.neighborhoods);
                setNeighborhoodsNameDynamic(data.neighborhoods)
                setRefresh(false);
            });
    }, [setLoggedUser, refresh]);

    const [neighborhoodUpdate, setNeighborhoodUpdate] = useState("")
    const [searchUpdate, setSearchUpdate] = useState("")




    function handleInputChangeRecord(e) {
        setSearchUpdate(e.target.value)
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
                                    value={searchUpdate}
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
                                if (key <= 10) {
                                    return (

                                        <Button
                                            onClick={e => selectElement(e)}
                                            variant="primary"
                                            type="button"
                                            className="button-Neighborhood-name-update"
                                            id={neighborhood.name}

                                        >{neighborhood.name}</Button>


                                    )
                                } else {
                                    return (<></>)
                                }
                            })
                        )
                    }





                </Form>

            </div>


            <FormDropDown neighborhoodUpdate={neighborhoodUpdate} />
        </div>
    )
}
