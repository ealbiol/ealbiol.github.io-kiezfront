import "./Error.scss" //Imports css file to its component.


export default function Error() {
    return (
        <div className="main-error">

            <div className="main-error-image " >
                <div className="main-error-image__centered" >WELCOME TO KIEZ HAMBURG!</div>
                <img width="900px" src="https://images.unsplash.com/photo-1617222297105-67d47684eba7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" alt="" />
            </div>

            <div className="main-subtext " >
                <div className="main-subtext__content-subtext " >Actually not... for some reason you fell into the ERROR page.</div>
            </div>

        </div>
    )
}
