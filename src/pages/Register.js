import { useHistory } from "react-router-dom";
import './Register.scss'
import { useForm } from '../hooks/useForm';
import { BASE_URL } from "../config/config";


export default function Register() {

    const initialFormState = { username: "", email: "", password: "" };
    const [form, handleInputChange] = useForm(initialFormState); // Custom Hook




    function RegisterClient(e) {
        e.preventDefault();
        const API_REGISTER = `${BASE_URL}users/register`;
        const params = {
            method: "POST",
            body: JSON.stringify(form),
            headers: {
                "Content-Type": "application/json",
            },
        };
        fetch(API_REGISTER, params)
            .then((response) => response.json())
            .then((data) => {
                if (data.ok === true) {
                    alert("User registered successfully")
                    historyLogin.push("/login")
                } else {
                    alert("Registration Error.")
                }

            });

    }






    function ResetRegister(e) {
        handleInputChange(e)
    }

    const historyLogin = useHistory()

    function handleLogIn() {
        historyLogin.push("/login")
    }





    return (
        <div className="register-main" >



            {/* IMAGE 1 */}
            <div className="register-main__register-image-left ">

                <img width="500px" height="100%" className="register-main__register-image-left__image-left-clip-path" src="https://images.unsplash.com/photo-1593268026857-fa5a37fc2c10?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="" />

            </div>




            {/* TEXT CONTENT */}
            <div className="register-main__textContent " >


                {/* FORM */}
                <form action="" method="get">

                    <div>
                        <h1>Don't have an account yet?</h1>
                        <h2>Create one!</h2>
                    </div>

                    {/* Labels and Inputs box */}
                    <div className="register-main__textContent__fillable-form " >

                        {/* Labels */}
                        <div className="register-main__textContent__fillable-form__labels-box " >
                            <label htmlFor="nameInput">Name: </label>
                            <label htmlFor="emailInput">Email: </label>
                            <label htmlFor="passwordInput">Password: </label>
                        </div>


                        {/* Inputs */}
                        <div className="register-main__textContent__fillable-form__inputs-box ">
                            <input className="register-main__textContent__fillable-form__inputs-box__register-input" onChange={handleInputChange} value={form.username} required type="text" id="nameInput" name="username" placeholder="Type your Name" />
                            <input className="register-main__textContent__fillable-form__inputs-box__register-input" onChange={handleInputChange} value={form.email} required type="email" id="emailInput" name="email" placeholder="Type your Email" />
                            <input className="register-main__textContent__fillable-form__inputs-box__register-input" onChange={handleInputChange} value={form.password} required type="password" id="passwordInput" name="password" placeholder="********" />
                        </div>

                    </div>


                    {/* Submit and Reset */}
                    <div className="register-main__textContent__register-buttons " >
                        <input onClick={(e) => RegisterClient(e)} className="register-main__textContent__register-buttons__green-button-send " type="submit" value="SEND" id="submit"></input>
                        <input onClick={(e) => ResetRegister(e)} className="register-main__textContent__register-buttons__green-button-reset " type="reset" value="RESET" id="Save" name="reset"></input>
                        <div>
                            <div>Already have an account?</div>
                            <div onClick={handleLogIn} className="register-main__textContent__register-buttons__login-button-register"><b>Log In</b></div>
                        </div>
                    </div>
                </form>


                {/* END TEXT CONTENT */}
            </div>



            {/* IMAGE 2 */}
            <div className="register-main__register-image-right ">

                <img width="500px" height="100%" className="register-main__register-image-right__image-right-clip-path" src="https://images.unsplash.com/photo-1559582780-1440d21a7e32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80" alt="" />

            </div>


        </div>



    )
}
