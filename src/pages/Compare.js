import MottoCompare from "../components/MottoCompare/MottoCompare"
import TableCompare from "../components/TableCompare/TableCompare"
import "./Compare.scss"
import { useState } from 'react';
import checkIfLogged from "../Functions/Functions"
import { GlobalContext } from "../Router";
import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function Compare() {

    const { setLoggedUser } = useContext(GlobalContext);

    const historyNoToken = useHistory();

    useEffect(() => {
        checkIfLogged(setLoggedUser, historyNoToken)
    }, [setLoggedUser, historyNoToken])


    function compareActive() {


        setTableVisibilityEstado(!tableVisibilityEstado)

    }

    const [tableVisibilityEstado, setTableVisibilityEstado] = useState(false)

    return (
        <div className="main-compare">

            <MottoCompare />


            <div className="main-compare__div-buttonCompare" >
                {tableVisibilityEstado && (
                    <button type="button" onClick={compareActive} className="main-compare__div-buttonCompare__buttonCompare"> HIDE </button>)}
                {tableVisibilityEstado || (
                    <button type="button" onClick={compareActive} className="main-compare__div-buttonCompare__buttonCompare"> COMPARE </button>)}
            </div>

            <TableCompare useHeader={true} tableVisibility={true} />
            <TableCompare useHeader={false} tableVisibility={tableVisibilityEstado} />



        </div>
    )
}





