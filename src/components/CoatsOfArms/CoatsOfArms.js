import "./CoatsOfArms.scss";
import { useState, useEffect } from "react";
import { GlobalContext } from "../../Router";
import { useContext } from "react";
import { useHistory } from "react-router-dom";

import checkIfLogged from "../../Functions/Functions"
import {BASE_URL} from "../../config/config";



export default function CoatsOfArms({ FilteredResult }) {


  const [coatOfArmsImages, setcoatOfArmsImages] = useState([]);

  //useContext: Recibiendo desde Router 'setFilteredResultGlobal': (ATERRIZAJE de set para recoger datos)
  const { setFilteredResultGlobal, setLoggedUser } = useContext(GlobalContext);

  const historyButtonFilter = useHistory();

  useEffect(() => {

    const token = checkIfLogged(setLoggedUser, historyButtonFilter)

    const API_COATSOFARMSIMAGES = `${BASE_URL}coatsofarmsimages/`;
    const params = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token                          //Autorización con token para el acceso a la API 'coatsofarmsimages'
      },
    };
    fetch(API_COATSOFARMSIMAGES, params)
      .then((response) => response.json())
      .then((data) => setcoatOfArmsImages(data.coatofarmsimages));
  }, [historyButtonFilter, setLoggedUser]);



  //History Button


  function buttonFilter() {
    setFilteredResultGlobal(FilteredResult);                    //---> useContext: Al OnClick 'FilteredResult' buelca sus datos a 'setFilteredResultGlobal'
    historyButtonFilter.push("/filteredNeighborhoods");         //---> useHistory: Al OnClick nos reenvia a la página donde veremos la info de 'FilteredResultGlobal'
  }



  return (
    <div className="main-coats-of-arms ">
      <div className="coats-parent ">
        {coatOfArmsImages &&
          (coatOfArmsImages.map((coat, index) => {
            return (
              <CoatElement
                coat={coat}
                FilteredResult={FilteredResult}
                key={index}
              />
            );
          }))}

      </div>
      <button className="see-results" onClick={buttonFilter}>SEE RESULTS</button>
    </div>
  );
}


function CoatElement({ coat, FilteredResult }) {

  const [countDistrict, setcountDistrict] = useState(0);


  useEffect(() => {
    if (FilteredResult === undefined) {
      alert("Error en el servidor, no se han podido cargar los barrios");
    } else {
      if (FilteredResult !== null) {
        const filteredNeihOfDistrict = FilteredResult.filter((neighborhood) => {
          return neighborhood.district?.name?.localeCompare(coat.name) === 0;
        });

        setcountDistrict(filteredNeihOfDistrict.length);
      }
    }
  }, [FilteredResult, coat.name]);


  return (
    <div className="coats-parent__coats-child ">
      <img className="" width="35%" src={coat.link} alt="" />

      <div className="">
        <div className="districtNameBox">{coat.name.toUpperCase()}</div>
        <div className="numberBox">{countDistrict}</div>
      </div>
    </div>
  );
}
