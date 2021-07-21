import "./Footer.scss"
import { useHistory } from "react-router-dom";

export default function Footer() {



    const historyTecnologies = useHistory()

    function handleClickTecnologies() {
        historyTecnologies.push("/technologies")
    }




    return (
        <nav>

            <nav className="footer-main" >

                <nav className="footer-main__footer-right">
                    <div></div>
                    <div className="footer-main__footer-right__buttons-right" >
                        <div onClick={handleClickTecnologies} className="footer-main__footer-right__buttons-right__button-tecnologies" >TECNOLOGIES USED</div>
                    </div>
                </nav>

            </nav>



        </nav>
    )
}
