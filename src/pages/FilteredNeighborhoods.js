import "./FilteredNeighborhoods.scss";
import { GlobalContext } from "../../src/Router";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import checkIfLogged from "../Functions/Functions"


export default function FilteredNeighborhoods() {

  //Recibiendo desde Router 'FilteredResultGlobal':
  const { FilteredResultGlobal } = useContext(GlobalContext);


  //History Button
  const historyNeighborhood = useHistory();

  //History Function
  function goToNeighborhood(e) {
    historyNeighborhood.push(`/neighborhoodprofile/${e.target.textContent.toLowerCase()}`);
  }

  //useContext: Recibiendo desde Router 'setFilteredResultGlobal': (ATERRIZAJE de set para recoger datos)
  const { setLoggedUser } = useContext(GlobalContext);

  //Push called in Functions.js
  const historyNoToken = useHistory();

  //Called Function from Functions.js
  checkIfLogged(setLoggedUser, historyNoToken)


  return (
    <div className="main-FilteredNeighborhoods" >
      <div>YOUR RESULTS</div>
      <div className="sub-main-FilteredNeighborhoods">

        {FilteredResultGlobal &&                                    //---> Condicional añadido para evitar errores de sincronicidad.
          FilteredResultGlobal.map((neighborhood, index) => {
            return <div key={index} >

              <div onClick={(e) => goToNeighborhood(e)} className="sub-main-FilteredNeighborhoods__singleElement" >
                {neighborhood?.name?.toUpperCase()}
                {/*  <img src={neighborhood?.photo} width="300px" alt="" />*/}
              </div>

            </div>
          })}

      </div>
    </div>
  );
}

// Clickas boton
// Se abre pagina de barrios - > Componente (Hijo de findyourkiez)
