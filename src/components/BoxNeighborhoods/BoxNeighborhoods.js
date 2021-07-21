import "./BoxNeighborhoods.scss"
import { useHistory } from "react-router-dom";


export default function BoxNeighborhoods({ activateBox, NeighborhoodsDynamic }) {

    const historyBarrio = useHistory();

    function handleBarrio(e) {
        historyBarrio.push(`/neighborhoodprofile/${e.target?.textContent?.toLowerCase()}`);
    }


    return (

        <div className="BoxNeighborhoods-main" >

            {activateBox && (

                NeighborhoodsDynamic.map((Neighborhood, index) => {

                    return (
                        <div key={index} >
                            <div onClick={(e) => handleBarrio(e)} className="BoxNeighborhoods-main__bn-name" >{Neighborhood?.name?.toUpperCase()}</div>
                        </div>
                    )
                })

            )}

        </div>
    )
}




