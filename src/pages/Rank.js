import MottoRank from "../components/MottoRank/MottoRank"
import TableRank from "../components/TableRank/TableRank"
import "./Rank.scss"
import { useState } from 'react';

import checkIfLogged from "../Functions/Functions"
import { useHistory } from "react-router-dom";
import { GlobalContext } from "../Router";
import { useContext } from "react";


export default function Rank() {

    const { setLoggedUser } = useContext(GlobalContext);

    const historyNoToken = useHistory();

    checkIfLogged(setLoggedUser, historyNoToken)

    function rankActive() {


        setTableVisibilityEstado(!tableVisibilityEstado)

    }

    const [tableVisibilityEstado, setTableVisibilityEstado] = useState(false)

    return (
        <div className="main-rank">

            <MottoRank />
            <div className="main-rank__div-buttonRank" >
                <button type="button" onClick={rankActive} className="main-rank__div-buttonRank__buttonRank"> RANK </button>
            </div>
            <TableRank useHeader={true} tableVisibility={true} />
            <TableRank useHeader={false} tableVisibility={tableVisibilityEstado} />



        </div>
    )
}