


export default function checkIfLogged(setLoggedUser, historyNoToken) {



    const token = localStorage.getItem("ACCESS_TOKEN")
    if (token) {
        setLoggedUser(true)
        return token;
    }
    else {
        historyNoToken.push("/login")
    };
}


export function checkIfAdmin(historyNoToken) {


    const token = localStorage.getItem("ADMIN_TOKEN")
    if (token) {

        return token;
    }
    else {
        historyNoToken.push("/login")
    };
}