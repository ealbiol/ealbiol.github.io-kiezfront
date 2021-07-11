import "./Footer.scss" //Imports css file to its component.
import { useHistory } from "react-router-dom";

export default function Footer() {



    //History Button Tecnologies
    const historyTecnologies = useHistory()

    function handleClickTecnologies() {
        historyTecnologies.push("/technologies")
    }




    return (
        <nav>

            <nav className="footer-main" >

                <nav className="footer-main__footer-right">
                    <img src="" alt=" " />
                    <div className="footer-main__footer-right__buttons-right" >
                        <div onClick={handleClickTecnologies} className="footer-main__footer-right__buttons-right__button-tecnologies" >TECNOLOGIES USED</div>
                        {/* <div className="footer-main__footer-right__buttons-right__button-footer" ><b >FOOTER</b></div> */}
                    </div>
                </nav>

            </nav>



        </nav>
    )
}
