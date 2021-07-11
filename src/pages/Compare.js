import MottoCompare from "../components/MottoCompare/MottoCompare"
import TableCompare from "../components/TableCompare/TableCompare"
import "./Compare.scss"
import { useState } from 'react';
import checkIfLogged from "../Functions/Functions"
import { GlobalContext } from "../Router";
import { useContext } from "react";
import { useHistory } from "react-router-dom";

export default function Compare() {

    const { setLoggedUser } = useContext(GlobalContext);

    //History Button
    const historyNoToken = useHistory();

    //Called Function from Functions.js
    checkIfLogged(setLoggedUser, historyNoToken)


    function compareActive() {

        /*if (tableVisibilityEstado === true){
            setTableVisibilityEstado(false)
        } else {
            setTableVisibilityEstado(true)
        }*/
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





/*
1. Crear prop tableVisibility para ponerle un booleano para si es true aparezca y si es false no aparezca ( {props.tableVisibility && (en TableCompar.js) )
2. En el segundo componente de TableCompare añadimos al prop tableVisibility un estado (tableVisibilityEstado) que su estado su estado inicial es vacío ("") tambien podemos
poner false que significará vacío también.
3. Añadimos un botón con evento onClick que llame a la función compareActive.
4. Dentro de la función compareActive el estado de tableVisibilityEstado pasa de false a true. Recordando que en TableCompare su
{props.tableVisibility && estaba a true. Y True significaba que se visualizaba todo el contenido.

5. El botón lo hemos cambiado a unSwitch falso-verdadero. (contenido del punto 4 modificado).
Al inicio tableVisibility está a false y el switch cambia al estado booleano contrario (recordando que en true hemos
    definido que siginifique que aparezca la tabla)
*/