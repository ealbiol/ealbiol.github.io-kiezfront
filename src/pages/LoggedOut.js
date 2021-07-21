import "./LoggedOut.scss";
import { useHistory } from "react-router-dom";


export default function LoggedOut() {


    const historyLogin = useHistory()

    function handleLogIn() {
        historyLogin.push("/login")
    }


    return (



        <div className="login-main" >




            <div className="login-main__login-image-left-loggedOut">
                <img width="500px" height="100%" className="login-main__login-image-left__image-left-clip-path" src="https://images.unsplash.com/photo-1585327397245-ec49c6ccbf16?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="" />
            </div>



            <div className="login-main__textContent" >


                <form action="">


                    <h1>
                        BIS BALD!
                    </h1>


                    <div className="login-main__textContent__fillable-form" >



                    </div>

                    <div className="login-main__textContent__login-buttons " >
                        <div >Login Again?</div>
                        <button onClick={handleLogIn} className="login-main__textContent__login-buttons__green-button-submit " type="submit" value="Log In" id="submit">Log In</button>
                    </div>


                </form>

            </div>


            <div className="login-main__login-image-right-loggedOut">

                <img width="500px" height="100%" className="login-main__login-image-right__image-right-clip-path" src="https://images.unsplash.com/photo-1584121100166-472fa95c3b09?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="" />

            </div>


        </div>
    )
}









