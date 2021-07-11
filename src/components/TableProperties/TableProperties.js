import "./TableProperties.scss"

export default function TableProperties(props) {

    const NProperties = [


      
        { name: "District" },
        { name: "Architecture Predominance" },
        { name: "Internationality" },
        { name: "Party Winner" },
        { name: "Transport Zone" },
        { name: "Activity Rate" },
        { name: "Life Cost" },
        { name: "Inhabitants Density" },
        { name: "Citizen Average Age" },
        { name: "Gyms Density" },
        { name: "Restaurants Density" },
        { name: "Supermarkets Density" },
        { name: "Cinemas" },
        { name: "Museums" },
        { name: "Night Life" },
        { name: "Air Quality" },
        { name: "Cleanness" },
        { name: "Green Areas Density" },
        { name: "Noise Level" },
        { name: "Safety" },
        { name: "Private Parking Density" },
        { name: "Bus Lines" },
        { name: "U-Bhan Lines" },
        { name: "S-Bahn Lines" },
        { name: "Parking Street Slots" },

       
        
    ]


    return (
        <thead >
            <tr  >
                <th></th>
                {

                    

                        NProperties.map((property, index) => {
                            <tr></tr>
                            return (

                                <th key={index}  className="main-TableCompare__fulltable__propertiesBar__propertyName " >{property.name.toUpperCase()} </th>
                            )
                        })

                    
                }
            </tr>
        </thead>
    )
}
