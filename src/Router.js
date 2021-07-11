import "./Router.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createContext, useState } from "react"; //Ej6

//Pages
import Landing from "./pages/Landing";
import Compare from "./pages/Compare";
import Rank from "./pages/Rank";
import FindYourKiez from "./pages/FindYourKiez";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Technologies from "./pages/Technologies";
import NeighborhoodProfile from "./pages/NeighborhoodProfile";
import FilteredNeighborhoods from "./pages/FilteredNeighborhoods";
import LoggedOut from "./pages/LoggedOut";
import BackOffice from "./pages/BackOffice";


import Error from "./pages/Error";

//Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Map from "./components/Map/Map";


//ACTIVACIÓN USECONTEXT
//Creación del componente (componente/objeto que no se renderiza) para el almacenaje de las variables con scope global:
export const GlobalContext = createContext({});



export default function Router() {

  //CONSTANTES GLOBALES
  // Distrito seleccionado al clikar el boton en el coatofarms, que ya estará filtrado.
  const [FilteredResultGlobal, setFilteredResultGlobal] = useState("");

  const [loggedUser, setLoggedUser] = useState(false);





  return (
    <div className="brouter-father">
      <BrowserRouter>
        <div>
          <Navbar loggedUser={loggedUser} setLoggedUser={setLoggedUser} />
        </div>

        <div className="brouter-routes">
          <GlobalContext.Provider value={{ FilteredResultGlobal, setFilteredResultGlobal, loggedUser, setLoggedUser }}>   {/* Pasamos por value los estados que queremos enviar a otros componentes */}
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route path="/compare" component={Compare} />
              <Route path="/rank" component={Rank} />
              <Route path="/findyourkiez" component={FindYourKiez} />
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <Route path="/map" component={Map} />
              <Route path="/technologies" component={Technologies} />
              <Route path="/filteredNeighborhoods" component={FilteredNeighborhoods} />
              <Route path="/admin/backoffice" component={BackOffice} />

              <Route path="/neighborhoodprofile/:nombreBarrio" component={NeighborhoodProfile} />

              <Route path="/loggedout" component={LoggedOut} />
              <Route component={Error} />

            </Switch>
          </GlobalContext.Provider>
        </div>

        <div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}



//CREATE  useCONTEXT
/*
1- Importamos el hook desde react.
2- Crear el sitio donde se van a almacenar las variables globales y añadirlo dentro de la función.   --> export const GlobalContext = createContext({});
3- Encapsular los componentes dentro de Switch con el componente GlobalContext que acabamos de crear.
4- Añadir .Provider  -->  </GlobalContext.Provider>
5- Dentro de function creamos useState's que tendrán un scope global.
6- En GlobalContext añadimos el estado que queremos enviar a otro componente ---> <GlobalContext.Provider value={{ setFilteredResultGlobal }}>

En el componente donde queremos traernos un estado:

1- Importamos el componente GlobalContext --> import { GlobalContext } from "../../src/Router";
2- En el componente donde queremos que llegue el estado que hemos creado en Router, se recibe de una manera distinta:
Ejemplo: const { FilteredResultGlobal } = useContext(GlobalContext);
En FilteredNeighborhoods.js se recibirá 'FilteredResultGlobal' ya que aquí es donde se mostrará/imprimirá su contenido.
3- En CoatOfArms.js se recibirá 'setFilteredResultGlobal' ya que ahí es donde queremos que se llene de contenido 'FilteredResultGlobal'.
Se recibe en CoatOfArms.js ya que es donde se encuentra el 'FilteredResult'. Este es el estado con la info que queremos que se llene en setFilteredResultGlobal.
4- En <button> creamos una función para que cada vez que se apriete se ejecute el contenido. Ese contenido hace que 'FilteredResult' llene de contenido a 'setFilteredResultGlobal'

<button onClick={() => setFilteredResultGlobal(FilteredResult)}>
          results
        </button>

5- Añadimos en button el useHistory para que al darle al botón nos redireccione a FilteredNeighborhoods.js






Explicación B:

0- En este caso queremos ir a CoatOfArms.js a recoger los datos que tiene 'FilteredResult'. Para ellos ahí tenemos que enviar a 'set'FilteredResultGlobal' para
que almacene dentro suyo los datos de 'FilteredResult' ---> setFilteredResultGlobal(FilteredResult); . En este caso lo haremos dentro de una función onClick.

0.1 Para hacer esto posible en CoatOfArms tenemos que importar 'GlobalContext' (nombre creado por nosotros anteriormente) y useContext.

0.2 - Ahora tenemos que ir a 'FilteredNeighborhoods.js' y hacer aterrizar ahí a 'FilteredResultGlobal' ya que es ahí donde queremos que se plasmen los datos que
'setFilteredResultsGlobal'.

0.3 - Igual que en el paso 0.1 tenemos que importar 'GlobalContext' y 'useContext'. Tenemos también que hacer aterrizar FilteredResultGlobal de la siguiente manera:
const { FilteredResultGlobal } = useContext(GlobalContext);
*/
