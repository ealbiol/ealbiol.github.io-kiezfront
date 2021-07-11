import "./TablePropertiesRank.scss"
import { useState, useEffect } from 'react'

export default function TablePropertiesRank({ setNeighborhoodsDynamic, ElementSort, setElementSort }) {

    const NProperties = [



        { name: "Cleanness" },
        { name: "Safety" },
        { name: "Activity Rate" },
        { name: "Average Age" },
        { name: "Internationality" },
        { name: "Museums" },
        { name: "Night Life" },
        { name: "Hospitals" },
        { name: "Party Winner" }


    ]




    //---- RANK ----//

    const [OrderEstado, setOrderEstado] = useState(true)

    function handleRank(keyN) {
        setElementSort(keyN)
        setOrderEstado(!OrderEstado)


    }


    useEffect(() => {

        setNeighborhoodsDynamic(previousValue => {
            const copy = [...previousValue];
            copy.sort((neighborhoodA, neighborhoodB) => {
                let filter = null
                // Order estado determina si va de menor a mayor o de mayor a menor
                if (OrderEstado) {

                    switch (ElementSort) {

                        case 0:
                            filter = (neighborhoodA.cleanness - neighborhoodB.cleanness)
                            break
                        case 1:
                            filter = (neighborhoodA.safety - neighborhoodB.safety)
                            break
                        case 2:
                            filter = (neighborhoodA.activityRate - neighborhoodB.activityRate)
                            break;
                        default:

                    }

                } else {

                    switch (ElementSort) {

                        case 0:
                            filter = (neighborhoodB.cleanness - neighborhoodA.cleanness)
                            break
                        case 1:
                            filter = (neighborhoodB.safety - neighborhoodA.safety)
                            break
                        case 2:
                            filter = (neighborhoodB.activityRate - neighborhoodA.activityRate)
                            break;
                        default:

                    }
                }
                return filter
            })
            return copy;
        });

    }, [OrderEstado, ElementSort, setNeighborhoodsDynamic])




    return (
        <thead>
            <tr>
                <th></th>
                {

                    NProperties.map((property, index) => {
                        <tr></tr>
                        return (

                            <th onClick={() => handleRank(index)} key={index} className="main-TableCompare__fulltable__propertiesBar__propertyName" >{property.name.toUpperCase()} </th>
                        )
                    })

                }
            </tr>
        </thead>
    )
}

