import "./Landing.scss";
import MottoNavbar from "../components/MottoNavbar/MottoNavbar";
import Map from "../components/Map/Map"
import MottoLanding from "../components/MottoLanding/MottoLanding"
import Description from "../components/Description/Description"
import { useState, useEffect, useContext } from "react";
import YoutubeBackground from 'react-youtube-background'
import BoxNeighborhoods from "../components/BoxNeighborhoods/BoxNeighborhoods";
import { GlobalContext } from "../Router";
// FONT AWESOME IMPORTS. UNCOMMENT THEM TO USE
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMapMarked } from '@fortawesome/free-solid-svg-icons'
// <FontAwesomeIcon icon={faMapMarked} size="9x"/> 
import { useHistory } from "react-router-dom";
import {BASE_URL} from "../config/config";



export default function Landing() {

    const [Neighborhoods, setNeighborhoods] = useState([])

    const { loggedUser, setLoggedUser } = useContext(GlobalContext);


    useEffect(() => {
        // Inicializando la const token
        const token = localStorage.getItem("ACCESS_TOKEN")
        if (token) setLoggedUser(true);
        const API_NEIGHBORHOODS = `${BASE_URL}neighborhoods/`;
        const params = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token                          //Autorización con token para el acceso a la API 'coatsofarmsimages'
            },
        };
        fetch(API_NEIGHBORHOODS, params)
            .then((response) => response.json())
            .then((data) => {
                setNeighborhoods(data.neighborhoods);
                setNeighborhoodsDynamic(data.neighborhoods);
            });
    }, [setLoggedUser]);



    //Estado mostrar componente BoxNeighborhoods
    const [activateBox, setActivateBox] = useState(false)


    //Estado Youtube id
    const [youtubeID] = useState('sf7Z4HNq-4s')


    //Filtrado estados
    const [NeighborhoodsDynamic, setNeighborhoodsDynamic] = useState([])

    const [Typed, setTyped] = useState("")


    useEffect(() => {
        if (Neighborhoods !== "") {
            setNeighborhoodsDynamic(
                Neighborhoods.filter((neighborhood) => {
                    return neighborhood.name
                        .toLowerCase()
                        .includes(Typed.toLocaleLowerCase());
                })
            );
        }
    }, [Typed, Neighborhoods]);

    //History Button
    const historyGoToLogin = useHistory();


    //History Function
    function goToLogin() {
        historyGoToLogin.push(`/login`);
        // historyGoToError.push(`/loggedout`);
    }


    return (

        <div className="landing-main ">


            {loggedUser &&
                (<div>



                    <YoutubeBackground
                        videoId={youtubeID}
                        className="landing-main__video-landing"
                    >


                        <MottoLanding />

                    </YoutubeBackground>

                    <Description />

                    <MottoNavbar activateBox={activateBox} setActivateBox={setActivateBox} setTyped={setTyped} />


                    <BoxNeighborhoods NeighborhoodsDynamic={NeighborhoodsDynamic} activateBox={activateBox} />


                    <div className="landing-main__content">
                        <Map NeighborhoodsDynamic={NeighborhoodsDynamic} />
                    </div>

                </div>

                )}
            {!loggedUser &&
                goToLogin()}

        </div >

    )
}




/*
Renderizado condicional:

1. Creamos el estado que será 'false' en el componente padre. En este caso Landing. ---> const [activateBox, setActivateBox] = useState(false)
2. Pasamos por props (desestructurado) el estado activateBox del padre 'Landing' al hijo 'BoxNeighborhoods'.
3. En el creamos el renderizado condicional ---> {activateBox && (
    3.1 El estado activateBox está inicialmente en 'false' por lo que al añadirle el renderizado condicional al .map esto hará que el componente
    no se muestre.
CAMBIAR ESTADO DE FALSE A TRUE:
4. Pasamos por props setBoxNeighborhoods desde el padre 'Landing' al hijo 'MottoNavbar'.
5. En MottoNavbar recibios setBoxNeighborhoods.
6. Creamos el evento onClick en el input para que el contenido del estado pase de 'false' a 'true'. ---> onClick={() => setActivateBox(true)}

EFECTO TOGGLE:
7. En MottoNavbar, en el evento OnClick se pasa al estado contrario. ---> onClick={() => setActivateBox(!activateBox)}
7.1 Nos traemos también el estado y no solo la función para poder pedir que se haga el estado contrario.
*/



/*
 FILTRADO:

 1. Creamos un estado dinamico de Neighborhoods. Estado inicial array vacío. ---> const [NeighborhoodsDynamic, setNeighborhoodsDynamic] = useState([])
 2. Lo creamos ya que a este estado Dynamic se le hará un .filter con el estado normal 'Neighborhoods' de base para poder hacer el filtro.
 3. Pasamos el estado variable NeighborhoodDynamic (no la función set) al componente hijo 'BoxNeighborhoods' por props ya que en el se ejecutará el resultado del filter.
 4. Creamos un estado 'Typed' y enviaremos su función por props al componente MottoNavbar para que almacene en el el contenido del input (e.target.value).
 5. Creamos un useEffect para aplicar el .filter en el.

 5.1 En el aplicamos la siguiente lógica:
    1. Solo se ejecutará si Neighborhoods != "", es decir, siempre que tenga contenido.
    2. Usaremos la función del estado Dynamic 'setNeighborhoodsDynamic' para llenarla de contenido.
    3. Abriremos parentesis para defeinir que el contenido de setNeighborhoodsDynamic() sea lo que haya dentro de esos parentesis: ---> setNeighborhoodsDynamic()
    3. Dentro de esos parentesis se hará el filter. El filter se hará a Neighborhoods (el estado no dinamico) y en el pedimos la siguiente condición:
        1. Que nos devuelva neighborhood.name Y que ese neighborhood.name incluya Typed.
        Es decir, la condición de filtrado es que nos de los nombres de todos los barrios y que solo nos de los que incluian/coincidan con lo que vale Typed. Recordemos
        que el valor de Typed es e.target.value, es decir, lo que escribe el usuario. Por lo que al final estamos pidiendo que nos de todos los barrios Y solo los que incluian
        lo escrito en el input.



      useEffect(() => {
        if (Neighborhoods != "") {
            setNeighborhoodsDynamic(
                Neighborhoods.filter((neighborhood) => {
                    return neighborhood.name
                        .toLowerCase()
                        .includes(Typed.toLocaleLowerCase());
                })
            );
        }
    }, [Typed]);

*/