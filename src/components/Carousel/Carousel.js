import "./Carousel.scss";
import { useHistory } from "react-router-dom";

import { useState, useEffect } from 'react'
import { getNeigbourhoodsFromApi } from "../../api/Api"

import { useContext } from "react";
import { GlobalContext } from "../../Router";
export default function Carousel() {



  const { setLoggedUser } = useContext(GlobalContext);

  const [neighborhood, setNeighborhood] = useState([])

  useEffect(() => {
    getNeigbourhoodsFromApi(setLoggedUser).then(response => {
      // console.log(response)
      setNeighborhood(response);
    }).catch(() => {
      alert("No hay conexión con el servidor")
    })
  }, [])// eslint-disable-line react-hooks/exhaustive-deps





  //History Button
  const historyRandomNg = useHistory();

  function handleRandomNeighborhood(e) {
    //console.log(e.target.textContent);
    historyRandomNg.push(`/neighborhoodprofile/${e.target.textContent}`);
  }



  return (
    <div className="content-slider ">

      {/* 
      {neighborhood && //---> Condicional añadido para evitar errores de sincronicidad.
        neighborhood.map((neighborhood, index) => {
          return <div>

            <div>{neighborhood?.name}</div>

          </div>
        })} */}


      < div className="slider">
        {neighborhood && (
          <div className="mask">
            <ul>
              <li className="anim1 ">
                <div className="quote " onClick={(e) => handleRandomNeighborhood(e)}>{neighborhood[Math.floor(Math.random() * (neighborhood.length))]?.name}</div>
              </li>

              <li className="anim2">
                <div className="quote " onClick={(e) => handleRandomNeighborhood(e)}>{neighborhood[Math.floor(Math.random() * (neighborhood.length))]?.name}</div>
              </li>

              <li className="anim3">
                <div className="quote " onClick={(e) => handleRandomNeighborhood(e)}>{neighborhood[Math.floor(Math.random() * (neighborhood.length))]?.name}</div>
              </li>

              <li className="anim4">
                <div className="quote " onClick={(e) => handleRandomNeighborhood(e)}>{neighborhood[Math.floor(Math.random() * (neighborhood.length))]?.name}</div>
              </li>

              <li className="anim5">
                <div className="quote " onClick={(e) => handleRandomNeighborhood(e)}>{neighborhood[Math.floor(Math.random() * (neighborhood.length))]?.name}</div>
              </li>

            </ul>
          </div>
        )}

      </div>
    </div >
  );
}
