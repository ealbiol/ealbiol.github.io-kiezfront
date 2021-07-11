import "./BackOffice.scss"
import checkIfLogged from "../Functions/Functions"
import { useHistory } from "react-router-dom";
import { GlobalContext } from "../Router";
import { useState, useContext } from "react";
import CreateNeighborhoodForm from "../components/CreateNeighborhoodForm/CreateNeighborhoodForm"
import DeactivateNeighborhoodForm from "../components/DeactivateNeighborhoodForm/DeactivateNeighborhoodForm"
import UpdateNeighborhoodForm from "../components/UpdateNeighborhoodForm/UpdateNeighborhoodForm"

export default function BackOffice() {




    const { setLoggedUser } = useContext(GlobalContext);

    const historyNoToken = useHistory();

    //Called Function from Functions.js
    checkIfLogged(setLoggedUser, historyNoToken)

    //Estado mostrar componente CreateNeighborhoodForm
    const [ActivateCreateNgBox, setActivateCreateNgBox] = useState(false)
    const [ActivateDeactivateNgBox, setActivateDeactivateNgBox] = useState(false)
    const [ActivateUpdateNgBox, setActivateUpdateNgBox] = useState(false)


    return (
        <div className="main-backoffice" >

            {/* <div className="main-backoffice__welcome" >
                <div> Welcome, {localStorage.getItem("USER_NAME")} ! </div>
            </div> */}

            <div className="main-backoffice__bo-navbar" >


                {/* <div onClick={() => setActivateCreateNgBox(!ActivateCreateNgBox)} >
                    {ActivateCreateNgBox && (<div  >▼</div>)}
                    {ActivateCreateNgBox || (<div  >▲</div>)}
                </div> */}
                <div onClick={() => setActivateCreateNgBox(!ActivateCreateNgBox)} className="main-backoffice__bo-navbar__unit" >{ActivateCreateNgBox && (<div className="testS"  >Hide</div>)}
                    {ActivateCreateNgBox || (<div  >Add a New Neighborhood</div>)}</div>


                <div onClick={() => setActivateUpdateNgBox(!ActivateUpdateNgBox)} className="main-backoffice__bo-navbar__unit" >{ActivateUpdateNgBox && (<div className="testS"  >Hide</div>)}
                    {ActivateUpdateNgBox || (<div  >Update Existing Neighborhood</div>)}</div>


                <div onClick={() => setActivateDeactivateNgBox(!ActivateDeactivateNgBox)} className="main-backoffice__bo-navbar__unit" >{ActivateDeactivateNgBox && (<div className="testS"  >Hide</div>)}
                    {ActivateDeactivateNgBox || (<div  >Deactivate a Neighborhood</div>)}</div>

            </div>

            {ActivateCreateNgBox &&

                (
                    <CreateNeighborhoodForm />
                )}

            {ActivateDeactivateNgBox &&

                (
                    <DeactivateNeighborhoodForm />
                )}

            {ActivateUpdateNgBox &&

                (
                    <UpdateNeighborhoodForm />
                )}

        </div>
    )
}
