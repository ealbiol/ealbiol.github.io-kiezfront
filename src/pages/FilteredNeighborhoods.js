import "./FilteredNeighborhoods.scss";
import { GlobalContext } from "../../src/Router";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import checkIfLogged from "../Functions/Functions"


export default function FilteredNeighborhoods() {

  const { FilteredResultGlobal } = useContext(GlobalContext);


  const historyNeighborhood = useHistory();

  function goToNeighborhood(e) {
    historyNeighborhood.push(`/neighborhoodprofile/${e.target.textContent.toLowerCase()}`);
  }

  const { setLoggedUser } = useContext(GlobalContext);

  const historyNoToken = useHistory();

  checkIfLogged(setLoggedUser, historyNoToken)


  return (
    <div className="main-FilteredNeighborhoods" >
      <div>YOUR RESULTS</div>
      <div className="sub-main-FilteredNeighborhoods">

        {FilteredResultGlobal &&
          FilteredResultGlobal.map((neighborhood, index) => {
            return <div key={index} >

              <div onClick={(e) => goToNeighborhood(e)} className="sub-main-FilteredNeighborhoods__singleElement" >
                {neighborhood?.name?.toUpperCase()}
              </div>

            </div>
          })}

      </div>
    </div>
  );
}


