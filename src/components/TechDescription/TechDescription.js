import "./TechDescription.scss"
import heroku from "../../images/heroku.jpg"
import mixins from "../../images/mixins.jpg"
import variables from "../../images/variables.jpg"
import ampersands from "../../images/ampersands.jpg"
import carousel from "../../images/carousel.gif"
import find from "../../images/find.jpg"
import list from "../../images/list.jpg"
import map from "../../images/map.jpg"
import greeting from "../../images/greeting.jpg"
import math from "../../images/math.jpg"
import mapComponent from "../../images/mapComponent.jpg"
import filter from "../../images/filter.jpg"
import youtube1 from "../../images/youtube1.jpg"
import youtube2 from "../../images/youtube2.jpg"
import reactbootstrap from "../../images/reactbootstrap.jpg"
import login from "../../images/login.jpg"
import cookie from "../../images/cookie.jpg"



export default function TechDescription() {



    function handleFront() {
        window.open('https://kiezberlin.herokuapp.com/')
    }

    function handleBack() {
        window.open('https://kiezberlinback.herokuapp.com/')
    }

    return (
        <div className="TechDescription-in-Technologies" >
            DETAILED EXPOSITION OF TECHNOLOGIES


            {/* HEROKU */}
            <div className="TechDescription-in-Technologies__heroku-description-main" >
                <div className="Heroku-left" >
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Heroku_logo.svg" width={"500px"} alt="" />
                    <div className="TechDescription-in-Technologies__heroku-description-main__heroku-explanation" >
                        <b>For the deployment I used Heroku. Heroku is a Cloud platform </b> that allows you to upload your app with <b> no need of your own server </b>. It directly connects to your Github project. </div>
                    <div className="TechDescription-in-Technologies__heroku-description-main__front-link" onClick={() => handleFront()} >https://kiezberlin.herokuapp.com/</div>
                    <div className="TechDescription-in-Technologies__heroku-description-main__front-link" onClick={() => handleBack()} >https://kiezberlinback.herokuapp.com/</div>

                </div>
                <img src={heroku} width={"1000px"} alt="logo" />
            </div>


            {/* SASS */}
            <div className="TechDescription-in-Technologies__heroku-description-main " >
                <div className="Heroku-left" >
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg" width={"500px"} alt="" />
                    <div className="TechDescription-in-Technologies__heroku-description-main__heroku-explanation sass-line-one" >Sass is used with the objective to shorten the style code:
                        <div className="sass-line-two" >1. <b> NESTING AMPERSAND: </b> Allows better organization. </div>
                        <div>2. <b> VARIABLES: </b> Shortens code.</div>
                        <div>3. <b> MIXINS: </b> Shortens code.</div>
                    </div>
                </div>


                <div>
                    <div>Ampersands</div>
                    <img src={ampersands} width={"400px"} alt="ampersands" />
                </div>
                <div>
                    <div>Variables</div>
                    <img src={variables} width={"400px"} alt="variables" />
                </div>
                <div>
                    <div>Mixins</div>
                    <img src={mixins} width={"400px"} alt="mixins" />
                </div>
            </div>



            {/* CAROUSEL */}
            <div className="TechDescription-in-Technologies__heroku-description-main" >
                <div className="Heroku-left" >Dynamic Carousel
                    <div className="TechDescription-in-Technologies__heroku-description-main__heroku-explanation" >
                        One of the first things we see when Logging-In is the Carousel of neighborhoods.
                        <div>How does it work? We get the Neighborhood names from its API. Those names are showing up randomly each time as the <b> Math.random() method </b> is applied.
                        </div>
                        <div className="carousel-line-two" >
                            Afterwards, an <b> onClick function captures </b> the name of the neighborhood and therefore redirects you to its profile page <b> with the method push within the useHistory hook.</b>
                        </div>
                    </div>
                </div>

                <div  >
                    <div  >
                        <div>Carousel</div>
                        <img src={carousel} width={"800px"} alt="ampersands" />
                    </div>
                    <div>
                        <img src={math} width={"1100px"} alt="ampersands" />
                    </div>
                </div>
            </div>





            {/* NPM REACT-YOUTUBE-BACKGROUND */}
            <div className="TechDescription-in-Technologies__heroku-description-main" >
                <div className="Heroku-left" >react-youtube-background
                    <div className="TechDescription-in-Technologies__heroku-description-main__heroku-explanation " >
                        Secondly we also see the background video.
                        <div className="carousel-line-two" >1. It's been imported downloading the component React-Youtube-Background from the <b> NPM Package Manager Website </b>.
                        </div>
                        <div className="carousel-line-two" >2. We use a <b> prop (videoId=youtubeID) </b> and the useState hook for the unique code of the youtube video.</div>
                    </div>
                </div>

                <div>
                    <img src={carousel} width={"550px"} alt="ampersands" />
                    <img src={youtube1} width={"550px"} alt="ampersands" />
                    <img src={youtube2} width={"550px"} alt="ampersands" />


                </div>

            </div>



            {/* LOOK FOR A KIEZ COMPONENT */}
            <div className="TechDescription-in-Technologies__heroku-description-main" >
                <div className="Heroku-left" >List Component
                    <div className="TechDescription-in-Technologies__heroku-description-main__heroku-explanation" >
                        <div  >Scrolling-down we can find the full list of neighborhoods which its renderization depends on <b> boolean state </b>.
                        </div>
                        <div className="carousel-line-two" >
                            A <b> filter </b> method is applied and will give us all the areas matching what's been written in the input.</div>
                    </div>
                </div>

                <div>
                    <div>Neighborhoods</div>
                    <img src={list} width={"1000px"} alt="ampersands" />
                </div>

            </div>



            {/* GOOGLE MAPS COMPONENT */}
            <div className="TechDescription-in-Technologies__heroku-description-main" >
                <div className="Heroku-left" >Google Maps Component
                    <div className="TechDescription-in-Technologies__heroku-description-main__heroku-explanation" >
                        Further below we get the city map. Google Maps is implented downloading the component "react-google-maps" from the <b> NPM </b>.
                        <div className="carousel-line-two" >1. First we create its own component.
                        </div>
                        <div className="carousel-line-two" >2. <b>Then using the same filtering state </b> for both the Neighborhoods List Component and the Map pin's we get <b> both to react at the same time </b>.
                        </div>
                        <div className="carousel-line-two" >3. We add an onClick function to the pins that redirects you to the clicked area.
                        </div>
                        <div className="carousel-line-two" >4. When it comes to the map styles I used a created one from <b> https://snazzymaps.com/ </b> .</div>
                    </div>
                </div>

                <div>
                    <img src={mapComponent} width={"575px"} alt="ampersands" />
                    <img src={map} width={"575px"} alt="ampersands" />
                </div>

            </div>




            {/* USER GREETING */}
            <div className="TechDescription-in-Technologies__heroku-description-main" >
                <div className="Heroku-left" >User Greeting
                    <div className="TechDescription-in-Technologies__heroku-description-main__heroku-explanation" >
                        On top of the navbar we have a greeting to the user.
                        <div className="carousel-line-two" >1. It's been deployed creating a <b> cookie </b> with localstorage.
                        </div>
                        <div className="carousel-line-two" >2. We use the useEffect hook to obtain the cookie userName amendment in the localstorage.
                        </div>
                        <div className="carousel-line-two" >3. This system allows us to keep our online session despite closing the site's page.</div>

                    </div>
                </div>

                <div>
                    <div>Greeting</div>
                    <img src={cookie} width={"700px"} alt="ampersands" />
                    <img src={greeting} width={"700px"} alt="ampersands" />
                </div>

            </div>



            {/* FIND YOUR KIEZ */}
            <div className="TechDescription-in-Technologies__heroku-description-main" >
                <div className="Heroku-left" >Find Your Kiez
                    <div className="TechDescription-in-Technologies__heroku-description-main__heroku-explanation" >
                        This is the main Page of the App. Here the user obtains a neighborhood based on chosen criteria.

                        <div className="carousel-line-two" >The <b> SLIDE </b> is imported from <b> material-ui. </b>
                            When choosing neighborhood properties on the right side we will see the number of <b> neighborhoods per district matching </b> with the desired criteria.</div>
                        <div className="carousel-line-two" >It has been built in the following way:
                        </div>

                        <div className="carousel-line-two" >It's built in the following way:</div>
                        <div className="carousel-line-two" ><b>CLIENT side:</b>
                        </div>
                        <div  >
                            1. We create a <b> state conatining ALL the the property values initially EMPTY </b>.
                        </div>
                        <div className="carousel-line-two" >2. <b> When a Slide is moved </b> to a specific property value <b> it will amend the value </b> in our object from EMPTY to the chosen value.
                        </div>
                        <div className="carousel-line-two" >3. Example: if Architecture Predominance is moved to "Historic", the state will amend our object Architecture Predominance value from EMPTY to HISTORIC.</div>
                        <div className="carousel-line-two" ><b>On the SERVER side:</b>
                        </div>
                        <div  >1. It recibes the data from the <b> CLIENT </b>(the state) which contains all the values obtained through the Slides.
                        </div>
                        <div className="carousel-line-two" >2. A <b> find method </b> is applied having into account all the values. If the value is empty it won't count it.
                        </div>
                        <div className="carousel-line-two" >3. Finally all neighborhoods that match with the chosen <b> property values are given back to the front. </b>
                        </div>
                    </div>
                </div>

                <div>
                    <div>Page</div>
                    <img src={find} width={"500px"} alt="ampersands" />
                    <img src={filter} width={"500px"} alt="ampersands" />
                </div>

            </div>




            {/* CRUD */}
            <div className="TechDescription-in-Technologies__heroku-description-main" >
                <div className="Heroku-left" >CRUD
                    <div className="TechDescription-in-Technologies__heroku-description-main__heroku-explanation" >
                        To build the CRUD I created an <b> ADMIN Access </b> which has a <b> different token </b> of authorization.

                        <div className="carousel-line-two" >1. When logging-in with we find the BACKOFFICE page where we can add, update and remove neighborhoods.
                        </div>
                        <div className="carousel-line-two" >2. <b> Drop-Down menus and Modals </b> from <b> React-Bootstrap </b> have been used to build the Backoffice Page.
                        </div>
                    </div>
                </div>

                <div>
                    <img src="https://miro.medium.com/max/2770/1*5Jv5YAGqu3zL5endb8dtBA.png" width={"575px"} alt="ampersands" />
                    <img src={reactbootstrap} width={"575px"} alt="ampersands" />
                </div>

            </div>



            {/* LOGIN SYSTEM */}
            <div className="TechDescription-in-Technologies__heroku-description-main" >
                <div className="Heroku-left" >Login System
                    <div className="TechDescription-in-Technologies__heroku-description-main__heroku-explanation" >

                        <div className="carousel-line-two" >1. We generate access tokens to authenticate and authorize them to enter different parts of the web.
                        </div>
                        <div className="carousel-line-two" >2. The token is generated with JWT, returned to the client and sent to the server's API to authorize a request to the API.
                        </div>
                        <div className="carousel-line-two" >3. With the status LoggedUser if the user is not logged in the page will not be rendered.
                        </div>
                    </div>
                </div>

                <div>
                    <img src={login} width={"575px"} alt="ampersands" />
                </div>

            </div>


        </div>

    )
}
