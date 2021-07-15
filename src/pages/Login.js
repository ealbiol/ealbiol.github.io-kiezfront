import { useHistory } from "react-router-dom";
import './Login.scss'
import { useForm } from '../hooks/useForm';
import { GlobalContext } from "../Router";
import { useContext } from "react";
/**
 * Login component that allows users to login and get JWT token to access differetn APIS
 * @returns 
 */

import { BASE_URL } from "../config/config";

export default function Login() {

    const initialFormState = { email: "", password: "" };
    const [form, handleInputChange] = useForm(initialFormState); // Custom Hook
    const { setLoggedUser } = useContext(GlobalContext);

    /**
     * 
     * @param {*} e - e is the event of the form
     */

    function LoginClient(e) {
        e.preventDefault();
        const API_LOGIN = `${BASE_URL}users/login`;
        const params = {
            method: "POST",
            body: JSON.stringify(form),
            headers: {
                "Content-Type": "application/json",
            },
        };
        fetch(API_LOGIN, params)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                //alert("Login successful")
                //Creación cookie que contiene el token. El token esta disponible en todo el cliente.
                if (data.ok == true) {
                    localStorage.setItem("ACCESS_TOKEN", data.token)
                    localStorage.setItem("ADMIN_TOKEN", data.adminToken)
                    alert("Login successful")
                    setLoggedUser(true);
                    localStorage.setItem("USER_NAME", data.userName);
                    historyCreateOne.push("/")

                } else {
                    alert(data.message)
                }




            })
    }



    //History Button CreateOne
    const historyCreateOne = useHistory()

    function handleCreateOne() {
        historyCreateOne.push("/register")
    }



    return (
        <div className="login-main" >


            {/* IMAGE 1 */}
            <div className="login-main__login-image-left">
                <img width="500px" height="100%" className="login-main__login-image-left__image-left-clip-path" src="https://images.unsplash.com/photo-1516963624598-85ab7aa6de86?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="" />
            </div>



            {/* TEXT CONTENT */}
            <div className="login-main__textContent" >


                {/* FORM */}
                <form action="">


                    <h1 className="login-main__textContent__form-title" >
                        Log in to your account here
                    </h1>


                    {/* Labels and Inputs box */}
                    <div className="login-main__textContent__fillable-form" >

                        {/* Labels */}
                        <div className="login-main__textContent__fillable-form__labels-box " >
                            <label htmlFor="emailInput">Email: </label>
                            <label htmlFor="passwordInput">Password: </label>
                        </div>

                        {/* Inputs */}
                        <div className="login-main__textContent__fillable-form__inputs-box ">
                            <input className="login-main__textContent__fillable-form__inputs-box__login-input" onChange={handleInputChange} value={form.email} required type="email" id="emailInput" name="email" placeholder="Type your Email" />
                            <input className="login-main__textContent__fillable-form__inputs-box__login-input" onChange={handleInputChange} value={form.password} required type="password" id="passwordInput" name="password" placeholder="********" />
                        </div>

                    </div>

                    {/* Submit and Reset */}
                    <div className="login-main__textContent__login-buttons " >
                        <input onClick={(e) => LoginClient(e)} className="login-main__textContent__login-buttons__green-button-submit " type="submit" value="Log In" id="submit"></input>
                        <div>
                            <div >Don't have a Kiez account?</div>
                            <div onClick={handleCreateOne} ><b className="login-main__textContent__login-buttons__register-button-login" >Create One</b></div>
                        </div>
                    </div>


                </form>

            </div>


            {/* IMAGE 2 */}
            <div className="login-main__login-image-right ">

                <img width="500px" height="100%" className="login-main__login-image-right__image-right-clip-path" src="https://images.unsplash.com/photo-1551354099-068f333a4e8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80" alt="" />

            </div>


        </div>
    )

}












