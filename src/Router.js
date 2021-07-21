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
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Map from "./components/Map/Map";


//USECONTEXT ACTIVATION
export const GlobalContext = createContext({});



export default function Router() {

  //GLOBAL CONSTANTS
  const [FilteredResultGlobal, setFilteredResultGlobal] = useState("");

  const [loggedUser, setLoggedUser] = useState(false);





  return (
    <div className="brouter-father">
      <BrowserRouter>

        <Navbar loggedUser={loggedUser} setLoggedUser={setLoggedUser} />


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




