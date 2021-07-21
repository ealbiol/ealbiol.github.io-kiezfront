import { useState, useEffect } from "react";
import "./TableCompare.scss";
import TableProperties from "../TableProperties/TableProperties";
import { useHistory } from "react-router-dom";

import { GlobalContext } from "../../Router";
import { useContext } from "react";
import { BASE_URL } from "../../config/config";


export default function TableCompare(props) {

  const { setLoggedUser } = useContext(GlobalContext);


  useEffect(() => {
    const API_NEIGHBORHOODS = `${BASE_URL}neighborhoods/`;
    const token = localStorage.getItem("ACCESS_TOKEN")
    if (token) setLoggedUser(true);

    const params = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
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



  const historyGoToProfile = useHistory();

  function goToProfile(e) {
    historyGoToProfile.push(`/neighborhoodprofile/${e.target.textContent.toLowerCase()}`);
  }


  return (
    <div className="main-TableCompare ">

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
              <thead >
                {props.useHeader && <TableProperties />}
              </thead>
              <tbody className="main-TableCompare__fulltable__tbody ">
                {neighborhoodsDynamic && (
                  <>
                    {neighborhoodsDynamic.map((neighborhood, index) => {
                      return (
                        <tr key={index}>
                          <th onClick={(e) => goToProfile(e)} >{neighborhood?.name.toUpperCase()}</th>
                          <td>{neighborhood?.district?.name}</td>
                          <td>{neighborhood?.architecturePredominance?.name}</td>
                          <td>{neighborhood?.internationality}%</td>
                          <td style={{ backgroundColor: neighborhood.partyWinner.color }}>{neighborhood?.partyWinner.name.toUpperCase()}</td>
                          <td>{neighborhood?.transportZone?.name}</td>
                          <td>{neighborhood?.activityRate?.name}</td>
                          <td>{neighborhood?.lifeCost?.name}</td>
                          <td>{neighborhood?.inhabitantsDensity}</td>
                          <td>{neighborhood?.citizenAverageAge}</td>
                          <td>{neighborhood?.gymDensity}</td>
                          <td>{neighborhood?.restaurantsDensity?.name}</td>
                          <td>{neighborhood?.supermarketsDensity?.name}</td>
                          <td>{neighborhood?.cinemas?.name}</td>
                          <td>{neighborhood?.museums?.name}</td>
                          <td>{neighborhood?.nightLife?.name}</td>
                          <td>{neighborhood?.airQuality}</td>
                          <td>{neighborhood?.cleanness?.name}</td>
                          <td>{neighborhood?.greenAreasDensity}</td>
                          <td>{neighborhood?.noiseLevel?.name}</td>
                          <td>{neighborhood?.safety}</td>
                          <td>{neighborhood?.privateParkingDensity}</td>
                          <td>{neighborhood?.busLines}</td>
                          <td>{neighborhood?.ubahnLines?.name}</td>
                          <td>{neighborhood?.sbahnLines?.name}</td>
                          <td>{neighborhood?.parkingStreetSlots}</td>
                        </tr>
                      );
                    })}
                  </>

                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}


