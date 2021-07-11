import { useState, useEffect } from "react";
import "./TableCompare.scss";
import TableProperties from "../TableProperties/TableProperties";
import { useHistory } from "react-router-dom";

import { GlobalContext } from "../../Router";
import { useContext } from "react";


export default function TableCompare(props) {

  //useContext: Recibiendo desde Router 'setFilteredResultGlobal': (ATERRIZAJE de set para recoger datos)
  const { setLoggedUser } = useContext(GlobalContext);


  useEffect(() => {
    const API_NEIGHBORHOODS = "http://localhost:3000/neighborhoods/";
    // Inicializando la const token
    const token = localStorage.getItem("ACCESS_TOKEN")
    if (token) setLoggedUser(true);

    const params = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token                          //Autorización con token para el acceso a la API 'coatsofarmsimages'
      },
    };
    fetch(API_NEIGHBORHOODS, params)
      .then((response) => response.json())
      .then((data) => {
        setNeighborhoods(data.neighborhoods);
        setNeighborhoodsDynamic(data.neighborhoods);
      });
  }, [setLoggedUser]);


  // Neighborhoods Static State
  const [neighborhoods, setNeighborhoods] = useState("");


  // Neighborhoods Dynamic State
  const [neighborhoodsDynamic, setNeighborhoodsDynamic] = useState("");


  // Input value
  const [Typed, setTyped] = useState("");



  function handleInputFind(e) {
    setTyped(e.target.value);
  }




  useEffect(() => {
    if (neighborhoods !== "") {
      setNeighborhoodsDynamic(
        neighborhoods.filter((neighborhood) => {
          return neighborhood.name
            .toLowerCase()
            .includes(Typed.toLocaleLowerCase());
        })
      );
    }
  }, [Typed, neighborhoods]);

  /*Explicación:
  1. if: Si neighborhoods no está vacío se ejecturará.
  2. Rellenamos el estado de NeighborhoodsDynamic con su función set.
  3. Lo llenamos del estado neighborhoods PERO con las siguientes condiciones:
  3.1. Filtramos por el neighborhood.name
  3.2. Que nos devuelva el .name a LoweCase y solo los .name que estén incluidos en lo que vale el estado Typed.
  3.4 Recordemos que el estado Typed es donde guardamos el e.target.value en la función handleInputFind.
  */

  //History Button
  const historyGoToProfile = useHistory();

  //History Function
  function goToProfile(e) {
    historyGoToProfile.push(`/neighborhoodprofile/${e.target.textContent.toLowerCase()}`);
  }


  return (
    <div className="main-TableCompare ">

      {/* props.tableVisibility && === if true */}
      {props.tableVisibility && (
        <div>
          <div className="main-TableCompare__inputCompareBox ">

            <input
              onChange={handleInputFind}
              className="main-TableCompare__inputCompareBox__inputCompare "
              type="text"
              placeholder="Find..."
            />
          </div>

          <div className="main-TableCompare__fulltable">

            <table>
              {/* THEAD */}
              {props.useHeader && <TableProperties />}

              {/* TBODY */}
              {neighborhoodsDynamic && (
                <tbody className="main-TableCompare__fulltable__tbody ">

                  {neighborhoodsDynamic.map((neighborhood, index) => {
                    return (
                      <tr key={index}>
                        <th onClick={(e) => goToProfile(e)} >{neighborhood.name.toUpperCase()}</th>
                        <td>{neighborhood.district?.name}</td>
                        <td>{neighborhood.architecturePredominance?.name}</td>
                        <td>{neighborhood.internationality}%</td>
                        <td style={{ backgroundColor: neighborhood.partyWinner.color, }}>{neighborhood.partyWinner.name.toUpperCase()}</td>
                        <td>{neighborhood.transportZone?.name}</td>
                        <td>{neighborhood.activityRate?.name}</td>
                        <td>{neighborhood.lifeCost?.name}</td>
                        <td>{neighborhood.inhabitantsDensity}</td>
                        <td>{neighborhood.citizenAverageAge}</td>
                        <td>{neighborhood.gymDensity}</td>
                        <td>{neighborhood.restaurantsDensity?.name}</td>
                        <td>{neighborhood.supermarketsDensity?.name}</td>
                        <td>{neighborhood.cinemas?.name}</td>
                        <td>{neighborhood.museums?.name}</td>
                        <td>{neighborhood.nightLife?.name}</td>
                        <td>{neighborhood.airQuality}</td>
                        <td>{neighborhood.cleanness?.name}</td>
                        <td>{neighborhood.greenAreasDensity}</td>
                        <td>{neighborhood.noiseLevel?.name}</td>
                        <td>{neighborhood.safety}</td>
                        <td>{neighborhood.privateParkingDensity}</td>
                        <td>{neighborhood.busLines}</td>
                        <td>{neighborhood.ubahnLines?.name}</td>
                        <td>{neighborhood.sbahnLines?.name}</td>
                        <td>{neighborhood.parkingStreetSlots}</td>
                      </tr>
                    );
                  })}
                </tbody>
              )}
            </table>
          </div>
        </div>
      )}
    </div>
  );
}



/*
EXPLICACIÓN Evento onChange() para page TableCompare

an
Además del estado que ya teníamos, vamos a crear 2 estados más:

Actual:
const [neighborhoods, setNeighborhoods] = useState(initialState);

Nuevos:
const [neighborhoodsDynamic, setNeighborhoodsDynamic] = useState(initialState);
Vale inicialmente lo mismo que neighborhoods

const [Typed, setTyped] = useState("")


En el input creamos el evento onChange que tendrá dentro la función handleInput para que podamos llamarla fuera.
La función handleInput recibe el evento (e).
Dentro de la función actualizaremos el estado de Typed con setTyped. Se actualizará con el valor del input ---> e.target.value
E.target.value son propiedades del objeto onChange. La (e) representa el objeto onChange. En la consola del navegador podemos ver todas las propiedades de onChange. Usaremos “target” y dentro de target “value” ya que ahí es donde se almacena el contenido del input.
Creamos el useEffect
Dentro actualizamos el estado de NeighborhoodsDynamic que recibe dentro neighborhoods. Si lo dejasemos así no sucedería nada nuevo ya que en este momento ambos estados neighborhoods y neighborhoods Dynamic valen lo mismo.
El motivo por el que creamos el estado neighborhoodsDynamic es para que usando la función setNeighborhoodsDynamic podemos pasarle el estado neighborhoods y aplicarle un .filter a este último:


    setNeighborhoodsDynamic(neighborhoods.filter(neighborhood => {
        return (
            neighborhood.name.toLowerCase().includes(Typed.toLocaleLowerCase())
        )}

Hacemos el .filter que nos devolverá lo que sea true de la condición que pasamos. Aquí marcamos que nos devuelva lo siguiente:

    Devolverá los objetos cuya propiedad neighborhood.name incluyan las letras metidas en el input, en este caso eso lo hemos guardado en el estado Typed.




useEffect tiene un scope de todo el componente y en este caso hemos marcado que actualize los estados cada vez que cambie de estado Typed. Eso se hace poniendo el estado Typed al final del useEffect entre llaves [Typed]. Si esas llaves las dejamos vacías useEffect actualizará siempre que cambie de estado cualquier estado.

useEffect(() => {

    setNeighborhoodsDynamic(neighborhoods.filter(neighborhood => {
        return (
            neighborhood.name.toLowerCase().includes(Typed.toLocaleLowerCase())
        )}

))
}, [Typed])


Recordamos que Tpyed esta cambiando de estado cada vez que entran strings por el input ya que lo hemos decidido así:

function handleInputFind(e){
    setTyped(e.target.value)
    console.log(Typed)
}

*/
