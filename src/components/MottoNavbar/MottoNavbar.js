import "./MottoNavbar.scss"


export default function MottoNavbar({ activateBox, setActivateBox, setTyped }) {


    return (

        <nav className="motto-navbar">

            <div></div>


            <div>
                <div> <b>EXPLORE BERLIN'S NEIGHBORHOODS</b></div>
                <div> <i>Find your Kiez, Explore them all.</i></div>
            </div>
            <div className="search-and-arrow" >
                <div onClick={() => setActivateBox(!activateBox)} >
                    {activateBox && (<div  >▼</div>)}
                    {activateBox || (<div  >▲</div>)}
                </div>

                <input onChange={(e) => setTyped(e.target.value)} onClick={() => setActivateBox(!activateBox)} className="motto-navbar__inputSearch" type="text" placeholder="LOOK FOR A KIEZ" />
            </div>


        </nav>

    )
}



// Explanatory website: https://rangle.io/blog/simplifying-controlled-inputs-with-hooks/

/*

1. Creamos un form con un evento onSubmit que llama a la función 'handleSubmit'
2. Guardamos en el estado Name cualquier cosa que se escriba en el input con el evento onChange.
3. En la función 'handleSubmit' ponemos el 'e.preventDefault();' y el useHistory con 'Name' como dirección ya que ahí
está el nombre del barrio que ha tecleado el usuario (recordemos que en Name se ha guardado el e.target.value)
*/