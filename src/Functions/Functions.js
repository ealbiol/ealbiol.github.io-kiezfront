
// Función que comprueba si el usuario tiene token o no. Llamamos a la función en cada página.
// Si hay token deja entrar, sino te redirije a /login.
// El objetivo de esta página es factorizar y así no repetir este codigo en cada página.

export default function checkIfLogged(setLoggedUser, historyNoToken) {
    //Necesitamos traer el estado LoggedUser porque ahí tenemos el token.
    //useContext: Recibiendo desde Router 'setFilteredResultGlobal': (ATERRIZAJE de set para recoger datos)


    //Condicional para dar acceso a página en función de si estás loggeado o no (con redirección)
    const token = localStorage.getItem("ACCESS_TOKEN")
    // console.log("TOKEN", token);
    if (token) {
        setLoggedUser(true)
        return token;
    }
    else {
        historyNoToken.push("/login")
    };
}


export function checkIfAdmin(historyNoToken) {
    //Necesitamos traer el estado LoggedUser porque ahí tenemos el token.
    //useContext: Recibiendo desde Router 'setFilteredResultGlobal': (ATERRIZAJE de set para recoger datos)


    //Condicional para dar acceso a página en función de si estás loggeado o no (con redirección)
    const token = localStorage.getItem("ADMIN_TOKEN")
    console.log("TOKEN", token);
    if (token) {

        return token;
    }
    else {
        historyNoToken.push("/login")
    };
}