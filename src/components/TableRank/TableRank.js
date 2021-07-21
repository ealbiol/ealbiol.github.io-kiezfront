import { useState, useEffect } from 'react'
import "./TableRank.scss"
import TablePropertiesRank from '../TablePropertiesRank/TablePropertiesRank';


export default function TableRank(props) {

    const initialState = [

        {
            neighborhood_id: 1,
            name: "Reinickendorf",
            cleanness: 3,
            safety: 2,
            activityRate: 2,
            averageAge: "50-60",
            internationality: "18%",
            museums: "Medium",
            nightLife: "Low",
            numberHospitals: 9,
            partyWinner: {
                name: "GRÜNE",
                color: "#3e9b39"
            }
        },

        {
            neighborhood_id: 2,
            name: "Friedrichshain",
            cleanness: 8,
            safety: 4,
            activityRate: 2,
            averageAge: "25-35",
            internationality: "47%",
            museums: "Very Low: None",
            nightLife: "High",
            numberHospitals: 1,
            partyWinner: {
                name: "SPD",
                color: "#e30013"
            }
        },

        {
            neighborhood_id: 3,
            name: "Wittenau",
            cleanness: 6,
            safety: 8,
            activityRate: 5,
            averageAge: "40-50",
            internationality: "28%",
            museums: "Medium",
            nightLife: "Very Low: none",
            numberHospitals: 0,
            partyWinner: {
                name: "CDU",
                color: "gray"
            }
        },

        {
            neighborhood_id: 4,
            name: "Neukölln",
            cleanness: 10,
            safety: 9,
            activityRate: 8,
            averageAge: "25-35",
            internationality: "40%",
            museums: "Medium",
            nightLife: "Very high",
            numberHospitals: 1,
            partyWinner: {
                name: "LINKE",
                color: "#be3075"
            }
        },

        {
            neighborhood_id: 5,
            name: "Spandau",
            cleanness: 1,
            safety: 1,
            activityRate: 6,
            averageAge: "30-40",
            internationality: "5%",
            museums: "Low",
            nightLife: "Low",
            numberHospitals: 1,
            partyWinner: {
                name: "AFD",
                color: "#009fe1"
            }
        },

        {
            neighborhood_id: 6,
            name: "Schöneberg",
            cleanness: 7,
            safety: 5,
            activityRate: 1,
            averageAge: "35-45",
            internationality: "35%",
            museums: "High",
            nightLife: "Very High",
            numberHospitals: 1,
            partyWinner: {
                name: "GRÜNE",
                color: "#129831"
            }
        },

        {
            neighborhood_id: 7,
            name: "Mariendorf",
            cleanness: 4,
            safety: 11,
            activityRate: 10,
            averageAge: "40-50",
            internationality: "15%",
            museums: "Low",
            nightLife: "Medium",
            numberHospitals: 2,
            partyWinner: {
                name: "LINKE",
                color: "#be3075"
            }
        },

        {
            neighborhood_id: 8,
            name: "Charlottenburg",
            cleanness: 9,
            safety: 2,
            activityRate: 4,
            averageAge: "30-40",
            internationality: "5%",
            museums: "Low",
            nightLife: "Low",
            numberHospitals: 1,
            partyWinner: {
                name: "CDU",
                color: "gray"
            }
        },

        {
            neighborhood_id: 9,
            name: "Alt-Treptow",
            cleanness: 2,
            safety: 3,
            activityRate: 3,
            averageAge: "40-50",
            internationality: "3%",
            museums: "Low",
            nightLife: "Low",
            numberHospitals: 1,
            partyWinner: {
                name: "GRÜNE",
                color: "#129831"
            }
        },

        {
            neighborhood_id: 10,
            name: "Moabit",
            cleanness: 5,
            safety: 8,
            activityRate: 7,
            averageAge: "30-40",
            internationality: "10%",
            museums: "Very Low: None",
            nightLife: "Medium",
            numberHospitals: 1,
            partyWinner: {
                name: "GRÜNE",
                color: "#129831"
            }
        }

    ]





    // Neighborhoods Static State
    const [neighborhoods] = useState(initialState);

    // Neighborhoods Dynamic State
    const [neighborhoodsDynamic, setNeighborhoodsDynamic] = useState(initialState);

    // Input value
    const [Typed, setTyped] = useState("")


    const [ElementSort, setElementSort] = useState("")


    function handleInputFind(e) {
        setTyped(e.target.value)
    }

    useEffect(() => {

        setNeighborhoodsDynamic(neighborhoods.filter(neighborhood => {
            return (
                neighborhood.name.toLowerCase().includes(Typed.toLocaleLowerCase())
            )
        }

        ))
    }, [Typed, neighborhoods])



    return (

        <div className="main-TableCompare" >
            {props.tableVisibility &&
                (
                    <div>
                        <div className="main-TableCompare__inputCompareBox" >
                            <input onChange={handleInputFind} className="main-TableCompare__inputCompareBox__inputCompare " type="text" placeholder="Find..." />
                        </div>

                        <div className="main-TableCompare__fulltable" >

                            <table>
                                {props.useHeader &&
                                    (
                                        <TablePropertiesRank setNeighborhoodsDynamic={setNeighborhoodsDynamic} ElementSort={ElementSort} setElementSort={setElementSort} />
                                    )
                                }

                                <tbody className="main-TableCompare__fulltable__tbody">
                                    {
                                        neighborhoodsDynamic.map((neighborhood, index) => {

                                            return (

                                                <tr key={index} >
                                                    <th>{neighborhood.name.toUpperCase()}</th>
                                                    <td>{neighborhood.cleanness}</td>
                                                    <td style={{ backgroundColor: neighborhood.safety.color }}>{neighborhood.safety}</td>
                                                    <td>{neighborhood.activityRate}</td>
                                                    <td>{neighborhood.averageAge}</td>
                                                    <td>{neighborhood.internationality}</td>
                                                    <td>{neighborhood.museums}</td>
                                                    <td>{neighborhood.nightLife}</td>
                                                    <td>{neighborhood.numberHospitals}</td>
                                                    <td style={{ backgroundColor: neighborhood.partyWinner.color }}>{neighborhood.partyWinner.name}</td>
                                                </tr>

                                            )
                                        })
                                    }
                                </tbody>

                            </table>

                        </div>
                    </div>
                )}
        </div>

    )
}