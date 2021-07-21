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



