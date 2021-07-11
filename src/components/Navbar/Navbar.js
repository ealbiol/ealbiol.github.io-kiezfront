import "./Navbar.scss"
import { useHistory } from "react-router-dom";
import icon from "../../images/icon2.svg"


export default function Navbar({ loggedUser, setLoggedUser }) {

    //History Button Compare
    const historyCompare = useHistory()

    function handleClickCompare() {
        historyCompare.push("/compare")
    }


    //History Button Rank
    const historyRank = useHistory()

    function handleClickRank() {
        historyRank.push("/rank")
    }


    //History Button FindYourKiez
    const historyFindYourKiez = useHistory()

    function handleClickFindYourKiez() {
        historyFindYourKiez.push("/findyourkiez")
    }


    //History Button Register
    const historyRegister = useHistory()

    function handleClickRegister() {
        historyRegister.push("/register")
    }


    //History Button Login
    const historyLogin = useHistory()

    function handleClickLogin() {
        historyLogin.push("/login")
    }


    //History Button Go To Landing
    const historyGoToLanding = useHistory()

    function handleGoToLanding() {
        historyGoToLanding.push("/")
    }


    //History Button Logout
    const historyLogout = useHistory()

    function handleClickLogout() {
        localStorage.removeItem("ACCESS_TOKEN")

        localStorage.removeItem("ADMIN_TOKEN")

        localStorage.removeItem("USER_NAME")
        setLoggedUser(false);
        historyLogout.push("/loggedout");

    }

    function handleClickBackOffice() {
        historyLogout.push("/admin/backoffice");

    }

    return (
        <nav className="">

            <nav className="main-navbar" >

                {/* LEFT SIDE */}
                <nav className="main-navbar__left-content">
                    <div onClick={handleGoToLanding} ><b className="main-navbar__left-content__kiezName" >KIEZ</b></div>
                    <img onClick={handleGoToLanding} src={icon} width={"111px"} alt="logo" className="main-navbar__left-content__logo" />

                    {loggedUser && (
                        <div className="main-navbar__left-content__landing-welcome" >
                            <div> HI, {localStorage?.getItem("USER_NAME")?.toUpperCase()} ! </div>
                        </div>
                    )}

                </nav>


                {/* RIGHT SIDE */}
                <nav className="main-navbar__right-content" >
                    <button className="main-navbar__right-content__buttonNavbar" onClick={handleClickCompare} >COMPARE</button>
                    <button className="main-navbar__right-content__buttonNavbar" onClick={handleClickRank} >RANK</button>
                    <button className="main-navbar__right-content__buttonNavbar" onClick={handleClickFindYourKiez} > FIND YOUR KIEZ </button>
                    <button className="main-navbar__right-content__buttonNavbar" onClick={handleClickRegister} >REGISTER</button>
                    {
                        localStorage?.getItem("ADMIN_TOKEN") && ( //if token exists
                            <   button className="main-navbar__right-content__buttonNavbar" onClick={handleClickBackOffice} >BACKOFFICE</button>
                        )
                    }

                    {!loggedUser &&
                        (
                            <button className="main-navbar__right-content__buttonNavbar" onClick={handleClickLogin} >LOGIN</button>
                        )}
                    {loggedUser && (
                        <button className="main-navbar__right-content__buttonNavbar" onClick={handleClickLogout} >LOGOUT</button>
                    )}
                </nav>

            </nav>

        </nav>
    )
}



/*
 LOGIN/LOGOUT RENDERIZADO
 1. Creamos una constante global boleana (ir a Router) loggedUser la ponemos inicialmente a false.
 2. Cuando hacemos login se obtiene el token y cambia el estado de loggedUser a true.
 3. Cuando hacemos logout se quita el token y vuelve el estado a false.
 4. Para los dos estados tenemos un renderizado condicional que muestra o no los div's.
 */