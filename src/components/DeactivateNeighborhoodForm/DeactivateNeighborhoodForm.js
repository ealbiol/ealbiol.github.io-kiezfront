import "./DeactivateNeighborhoodForm.scss"

import { useState, useEffect } from "react";
import { GlobalContext } from "../../Router";
import { useContext } from "react";

import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form'
import { useForm } from '../../hooks/useForm';
import { BASE_URL } from "../../config/config";


export default function DeactivateNeighborhoodForm() {

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




    const initialFormState = {
        neighborhoodName: ""
    };

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

        const params = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            },
            body: JSON.stringify({
                NeighborhoodDelete
            })
        };


        fetch(NEIGHBORHOODS, params)
            .then((response) => response.json())
            .then((data) => {
                setRefresh(true);
                setNeighborhoodDelete([])
            });


    }



    function changeElement(e) {
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
                            if (key <= 10) {
                                return (

                                    <Form.Check
                                        checked={NeighborhoodDelete.includes(neighborhood.name)}
                                        onChange={e => changeElement(e)}
                                        type="checkbox"
                                        label={neighborhood.name}
                                        id={neighborhood.name}
                                        className="checkbox-and-name"
                                    />


                                )
                            } else {
                                return (<></>)
                            }
                        })
                    )
                }
                <div className="list-to-delete-title" >NEIGHBORHOODS TO DELETE:</div>
                {
                    NeighborhoodDelete && (
                        NeighborhoodDelete.map(del => {
                            return (
                                <p>{del}</p>
                            )
                        }))}
                <Button onClick={(e) => (deleteNeighborhood(e))} variant="primary" type="submit" size="lg" block className="Delete-button" >
                    Delete
                </Button>
            </Form>

        </div>
    )
}


