import "./Modal.scss";

import { Modal, Button } from 'react-bootstrap'
import { useState } from "react";

export default function Example({ DistrictName, handleInputChange, form }) {
    const [show, setShow] = useState(false);
    const [eEvent, seteEvent] = useState("");
    const handleClose = () => setShow(false);
    function handleShow(e) {
        seteEvent(e)
        setShow(true)
    };

    return (
        <>
            <Button className="create-button-input" variant="primary" onClick={e => handleShow(e)} name="neighborhoodDistrict">
                {
                    form?.neighborhoodDistrict ? (
                        form.neighborhoodDistrict
                    ) :
                        ("Select a District")

                }
            </Button>

            <Modal className="main-modal" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title  >Berlin's District List</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className="modal-grid " >

                        {DistrictName &&


                            (
                                DistrictName.map((district, index) => {

                                    return (


                                        <div key={index} className="districts-menu " >




                                            <DistrictsElement
                                                DistrictName={district?.name?.toUpperCase()}
                                                DistrictCoat={district?.link}
                                                handleInputChange={handleInputChange}
                                                eEvent={eEvent}
                                                setShow={setShow}
                                            />



                                        </div>

                                    )
                                })

                            )}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    );
}

function DistrictsElement(props) {


    const {
        DistrictName,
        DistrictCoat,
        handleInputChange,
        eEvent,
        setShow
    } = props;
    function changeInput() {
        console.log(eEvent);
        handleInputChange({ target: { name: "neighborhoodDistrict", value: DistrictName } })
        setShow(false)
    }
    return (
        <div onClick={() => changeInput()} className="district-name-and-coat" >
            <div>{DistrictName}</div>
            <img width="50px" src={DistrictCoat} alt="" />
        </div>
    )
}