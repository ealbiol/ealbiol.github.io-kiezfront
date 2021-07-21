import "./Navbar.scss"
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import icon from "../../images/icon2.svg"
export default function Navbar({ loggedUser, setLoggedUser }) {

    const [userName, setUserName] = useState("");



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

    useEffect(() => {
        setUserName(localStorage?.getItem("USER_NAME")?.toUpperCase())
    }, [setUserName])

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
                            <div> HI, {userName} ! </div>
                        </div>
                    )}

                </nav>


                {/* RIGHT SIDE */}
                <nav className="main-navbar__right-content" >
                    <button className="main-navbar__right-content__buttonNavbar" onClick={handleClickCompare} >COMPARE</button>
                    <button className="main-navbar__right-content__buttonNavbar" onClick={handleClickRank} >RANK</button>
                    <button className="main-navbar__right-content__buttonNavbar" onClick={handleClickFindYourKiez} > FIND YOUR KIEZ </button>

                    {!loggedUser && (
                        <button className="main-navbar__right-content__buttonNavbar" onClick={handleClickRegister} >REGISTER</button>
                    )}

                    {
                        localStorage?.getItem("ADMIN_TOKEN") && (
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



