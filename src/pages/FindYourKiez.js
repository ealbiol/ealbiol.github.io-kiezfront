import "./FindYourKiez.scss"; //Imports css file to its component.
import MottoFindYourKiez from "../components/MottoFindYourKiez/MottoFindYourKiez";
import { useState, useEffect } from "react";
import CoatsOfArms from "../components/CoatsOfArms/CoatsOfArms";
import CustomizedSlider from "../components/CustomizedSlider/CustomizedSlider";

import { GlobalContext } from "../Router";
import { useContext } from "react";
import { useCallback } from 'react'
import {BASE_URL} from "../config/config";



export default function FindYourKiez() {

  //useContext: Recibiendo desde Router 'setFilteredResultGlobal': (ATERRIZAJE de set para recoger datos)
  const { setLoggedUser } = useContext(GlobalContext);


  //ARCHITECTURE PREDOMINANCE
  function parseArchitecturePredominance(num) {
    //console.log("NUMERO", typeof(numInt))
    if (num === 0) {
      return "Old Town";
    } else if (num === 1) {
      return "Historic";
    } else if (num === 2) {
      return "Plattenbau";
    } else if (num === 3) {
      return "Modern";
    } else if (num === 4) {
      return "New Construction";
    }
  }

  const marksArch = [
    {
      value: 0,
      label: "Old Town",
    },
    {
      value: 1,
      label: "Historic",
    },
    {
      value: 2,
      label: "Plattenbau",
    },
    {
      value: 3,
      label: "Modern",
    },
    {
      value: 4,
      label: "New Construction",
    },
  ];

  //INTERNATIONALITY
  function parseInternationality(num) {
    if (num <= 10) {
      return "10%";
    } else if (num > 10 && num < 20) {
      return "20%";
    } else if (num > 20 && num < 30) {
      return "30%";
    } else if (num > 30 && num < 40) {
      return "40%";
    } else if (num > 40 && num < 50) {
      return "50%";
    } else if (num > 50 && num < 60) {
      return "60%";
    } else if (num > 60 && num < 70) {
      return "70%";
    } else if (num > 70 && num < 80) {
      return "80%";
    } else if (num > 80 && num < 90) {
      return "90%";
    } else if (num > 90 && num < 100) {
      return "100%";
    }
  }
  const marksInter = [
    {
      value: 10,
      label: "10%",
    },
    {
      value: 20,
      label: "20%",
    },
    {
      value: 30,
      label: "30%",
    },
    {
      value: 40,
      label: "40%",
    },
    {
      value: 50,
      label: "50%",
    },

    {
      value: 60,
      label: "60%",
    },
    {
      value: 70,
      label: "70%",
    },
    {
      value: 80,
      label: "80%",
    },
    {
      value: 90,
      label: "90%",
    },

    {
      value: 100,
      label: "100%",
    },
  ];

  //PARTY WINNER
  function parsePartyWinner(num) {
    if (num === 0) {
      return "CDU";
    } else if (num === 1) {
      return "SPD";
    } else if (num === 2) {
      return "GRÜNE";
    } else if (num === 3) {
      return "AFD";
    } else if (num === 4) {
      return "LINKE";
    }
  }
  const marksParty = [
    {
      value: 0,
      label: "CDU",
    },
    {
      value: 1,
      label: "SPD",
    },
    {
      value: 2,
      label: "GRÜNE",
    },
    {
      value: 3,
      label: "AFD",
    },
    {
      value: 4,
      label: "LINKE",
    },
  ];

  //TRANSPORT ZONE
  function parseTransportZone(num) {
    if (num === 0) {
      return "A";
    } else if (num === 1) {
      return "B";
    } else if (num === 2) {
      return "C";
    }
  }

  const marksZone = [
    {
      value: 0,
      label: "A",
    },
    {
      value: 1,
      label: "B",
    },
    {
      value: 2,
      label: "C",
    },
  ];

  //STRING LEVELS: LOW, MEDIUM, ETC
  function parseStringLevels(num) {
    console.log("Dentro de parseo", num);
    if (num === 0) {
      return "Very Low";
    } else if (num === 1) {
      return "Low";
    } else if (num === 2) {
      console.log("Devolvemos medium");
      return "Medium";
    } else if (num === 3) {
      return "High";
    } else if (num === 4) {
      return "Very High";
    }
  }

  const marksString = [
    {
      value: 0,
      label: "Very Low",
    },
    {
      value: 1,
      label: "Low",
    },
    {
      value: 2,
      label: "Medium",
    },
    {
      value: 3,
      label: "High",
    },
    {
      value: 4,
      label: "Very High",
    },
  ];

  //LIFECOST
  function parseLifeCost(num) {
    if (num === 0) {
      return "Very Economic";
    } else if (num === 1) {
      return "Economic";
    } else if (num === 2) {
      return "Medium";
    } else if (num === 3) {
      return "Expensive";
    } else if (num === 4) {
      return "Very Expensive";
    }
  }

  const marksLifeCost = [
    {
      value: 0,
      label: "Very Economic",
    },
    {
      value: 1,
      label: "Economic",
    },
    {
      value: 2,
      label: "Medium",
    },
    {
      value: 3,
      label: "Expensive",
    },
    {
      value: 4,
      label: "Very Expensive",
    },
  ];

  //CITIZEN AVERAGE AGE
  function parseCitizenAverageAge(num) {
    if (num === 0) {
      return "30";
    } else if (num === 1) {
      return "40";
    } else if (num === 2) {
      return "50";
    } else if (num === 3) {
      return "60";
    } else if (num === 4) {
      return "70";
    } else if (num === 5) {
      return "80";
    }
  }

  const marksAge = [
    {
      value: 0,
      label: "30",
    },
    {
      value: 1,
      label: "40",
    },
    {
      value: 2,
      label: "50",
    },
    {
      value: 3,
      label: "60",
    },
    {
      value: 4,
      label: "70",
    },
    {
      value: 5,
      label: "70",
    },
  ];

  //NUMBER LEVELS
  function parseNumbers(num) {
    if (num === 0) {
      return "0";
    } else if (num === 1) {
      return "1-2";
    } else if (num === 2) {
      return "3-5";
    } else if (num === 3) {
      return "+5";
    }
  }

  const marksNumber = [
    {
      value: 0,
      label: "0",
    },
    {
      value: 1,
      label: "1-2",
    },
    {
      value: 2,
      label: "3-5",
    },
    {
      value: 3,
      label: "+5",
    },
  ];

  const initialState = [
    {
      name: "architecture style",
      min: 0,
      max: 4,
      marks: marksArch,
      valueText: parseArchitecturePredominance,
    },
    {
      name: "internationality",
      min: 0,
      max: 100,
      marks: marksInter,
      valueText: parseInternationality,
    },
    {
      name: "party winner",
      min: 0,
      max: 4,
      marks: marksParty,
      valueText: parsePartyWinner,
    },
    {
      name: "transport zone",
      min: 0,
      max: 2,
      marks: marksZone,
      valueText: parseTransportZone,
    },
    {
      name: "activity rate",
      min: 0,
      max: 4,
      marks: marksString,
      valueText: parseStringLevels,
    },
    {
      name: "cost of life",
      min: 0,
      max: 4,
      marks: marksLifeCost,
      valueText: parseLifeCost,
    },
    {
      name: "inhabitants density",
      min: 0,
      max: 4,
      marks: marksString,
      valueText: parseStringLevels,
    },
    {
      name: "Average Age",
      min: 0,
      max: 5,
      marks: marksAge,
      valueText: parseCitizenAverageAge,
    },
    {
      name: "Gym Density",
      min: 0,
      max: 4,
      marks: marksString,
      valueText: parseStringLevels,
    },
    {
      name: "Restaurants Density",
      min: 0,
      max: 4,
      marks: marksString,
      valueText: parseStringLevels,
    },
    {
      name: "Supermarkets Density",
      min: 0,
      max: 4,
      marks: marksString,
      valueText: parseStringLevels,
    },
    {
      name: "Cinemas Number",
      min: 0,
      max: 3,
      marks: marksNumber,
      valueText: parseNumbers,
    },
    {
      name: "Museums",
      min: 0,
      max: 3,
      marks: marksNumber,
      valueText: parseNumbers,
    },
    {
      name: "Night Life",
      min: 0,
      max: 4,
      marks: marksString,
      valueText: parseStringLevels,
    },
    {
      name: "Air Quality",
      min: 0,
      max: 4,
      marks: marksString,
      valueText: parseStringLevels,
    },
    {
      name: "cleanness",
      min: 0,
      max: 4,
      marks: marksString,
      valueText: parseStringLevels,
    },
    {
      name: "green areas density",
      min: 0,
      max: 4,
      marks: marksString,
      valueText: parseStringLevels,
    },
    {
      name: "noise level",
      min: 0,
      max: 4,
      marks: marksString,
      valueText: parseStringLevels,
    },
    {
      name: "safety",
      min: 0,
      max: 4,
      marks: marksString,
      valueText: parseStringLevels,
    },
    {
      name: "private parking density",
      marks: marksString,
      min: 0,
      max: 4,
      valueText: parseStringLevels,
    },
    {
      name: "bus lines",
      min: 0,
      max: 4,
      marks: marksString,
      valueText: parseStringLevels,
    },
    {
      name: "parking street slots",
      min: 0,
      max: 4,
      marks: marksString,
      valueText: parseStringLevels,
    },
  ];

  const [NProperties] = useState(initialState);
  const [JSONFilter, setJSONFilter] = useState({});

  const [FilteredResult, setFilteredResult] = useState(null);

  const fetchBarrios = useCallback(() => {

    const token = localStorage.getItem("ACCESS_TOKEN")
    if (token) setLoggedUser(true);

    const params = {
      method: "POST",
      body: JSON.stringify(JSONFilter),
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      },
    };


    fetch(`${BASE_URL}neighborhoods/filtered`, params)
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setFilteredResult(response.neighborhoods);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setLoggedUser, JSONFilter])
  useEffect(() => {
    fetchBarrios();
  }, [fetchBarrios]);

  return (

    <div className="findYourKiez-main">
      <MottoFindYourKiez />

      <div className="main-separator">

        {/* RANGES BOX */}
        <div className="findYourKiez-main__rangesbox ">

          {/* TITLE */}
          <div className="findYourKiez-main__rangesbox__title-ranges ">
            SET YOUR KEY PREFERENCES
          </div>

          {/* RANGES BOX */}
          <div className="findYourKiez-main__rangesbox__sub-rangesbox">

            {/* .MAP */}
            <div className="">
              {NProperties.map((property, index) => {
                return (
                  <div
                    key={index}
                    className="findYourKiez-main__rangesbox__sub-rangesbox__rangeUnite "
                  >
                    <label htmlFor={`rangeInput${property.name}`}>
                      {property.name.toUpperCase()}{" "}
                    </label>

                    <CustomizedSlider
                      property={property}
                      index={index}
                      JSONFilter={JSONFilter}
                      setJSONFilter={setJSONFilter}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <button className="findYourKiez-main__rangesbox__buttonFind"
            onClick={() => fetchBarrios()}
          >
            FIND
          </button>
        </div>

        {/* COATS OF ARMS */}
        <div className="findYourKiez-main__empty1 ">

          <CoatsOfArms FilteredResult={FilteredResult} />

        </div>
      </div>
    </div>
  );
}


