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



export default function TechDescription() {



    function handleFront() {
        window.open('https://kiezberlin.herokuapp.com/')
    }

    function handleBack() {
        window.open('https://kiezberlinback.herokuapp.com/')
    }

    return (
        <div className="TechDescription-in-Technologies bluebox" >
            DETAILED EXPOSITION OF TECHNOLOGIES


            {/* HEROKU */}
            <div className="TechDescription-in-Technologies__heroku-description-main" >
                <div className="Heroku-left" >
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Heroku_logo.svg" alt="" />
                    <div className="TechDescription-in-Technologies__heroku-description-main__heroku-explanation" >Cloud platform that allows you to upload your app with no need of your own server. It directly connects to your Github project. </div>
                    <div className="TechDescription-in-Technologies__heroku-description-main__front-link" onClick={() => handleFront()} >https://kiezberlin.herokuapp.com/</div>
                    <div className="TechDescription-in-Technologies__heroku-description-main__front-link" onClick={() => handleBack()} >https://kiezberlinback.herokuapp.com/</div>

                </div>
                <img src={heroku} width={"1000px"} alt="logo" />
            </div>


            {/* SASS */}
            <div className="TechDescription-in-Technologies__heroku-description-main" >
                <div className="Heroku-left" >
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg" alt="" />
                    <div className="TechDescription-in-Technologies__heroku-description-main__heroku-explanation" >Sass is used with the objective to shorten the style code:
                        <div>1. The Nesting Ampersand.</div>
                        <div>2. Variables.</div>
                        <div>3. Mixins to shorten code.</div>
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
                <div className="Heroku-left" >DYNAMIC CAROUSEL
                    <div className="TechDescription-in-Technologies__heroku-description-main__heroku-explanation" >One of the first things we see when logging in is the Carousel of neighborhoods.
                        <div>We get the Neighborhood names from its API. Those names are showing up randomly each time as the Math.random() method is applied.
                        </div>
                        <div>An onClick function is created to capture the name of the neighborhood and therefore redirect you to its profile page with the method .push with useHistory hook.
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
                    <div className="TechDescription-in-Technologies__heroku-description-main__heroku-explanation" >Secondly we also see the background video.
                        <div>1. It's been created downloading the component React-Youtube-Background from the website NPM.
                        </div>
                        <div>2. We use the prop videoId=youtubeID and the useState for the unique code of each youtube video.</div>
                    </div>
                </div>

                <div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg" alt="" />
                    <img src={carousel} width={"1000px"} alt="ampersands" />
                </div>

            </div>



            {/* LOOK FOR A KIEZ COMPONENT */}
            <div className="TechDescription-in-Technologies__heroku-description-main" >
                <div className="Heroku-left" >List Component
                    <div className="TechDescription-in-Technologies__heroku-description-main__heroku-explanation" >
                        <div>Scrolling-down we can find the full list of neighborhoods which renders depending on its boolean button state.
                        </div>
                        <div>A ".filter" is applied with the name of the variable NeighborhoodsDynamic which will give us all the areas matching what's been written in the input.</div>
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
                    <div className="TechDescription-in-Technologies__heroku-description-main__heroku-explanation" >Google maps implented downloading the "react-google-maps" component from the NPM site.
                        <div>1. First we create its own component.
                        </div>
                        <div>2. We use the same filtering state for both the neighborhoods list and the map pin's so that both react at the same time.
                        </div>
                        <div>3. We add an onClick function to the pins that redirects you to the clicked area.
                        </div>
                        <div>4. When it comes to the map styles I used a created one from https://snazzymaps.com/ .</div>
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
                        <div>1. We create a cookike with localstorage.
                        </div>
                        <div>2. We use the useEffect hook to obtain the cookie userName amendment in the localstorage.
                        </div>

                    </div>
                </div>

                <div>
                    <div>Greeting</div>
                    <img src={greeting} width={"700px"} alt="ampersands" />
                </div>

            </div>



            {/* FIND YOUR KIEZ */}
            <div className="TechDescription-in-Technologies__heroku-description-main" >
                <div className="Heroku-left" >Find Your Kiez
                    <div className="TechDescription-in-Technologies__heroku-description-main__heroku-explanation" >Page where the user obtains a neighborhood based on chosen criteria.

                        <div>In this page the user uses a SLIDE imported from material-ui.
                            On it the neighborhood properties are chosen. When applied on the right side we will see the number of neighborhoods per district that match with the desired criteria.</div>
                        <div>It has been built in the following way:
                        </div>
                        <div>On the CLIENT side:
                        </div>
                        <div>
                            1. We create a State that contains ALL the the property values initially EMPTY.
                        </div>
                        <div>2. When a Slide is moved to a specific property value it will amend the value in our object from EMPTY to the chosen value.
                        </div>
                        <div>3. Example: if Architecture Predominance is moved to "Historic", the state will amend our object Architecture Predominance value from EMPTY to HISTORIC.</div>
                        <div>On the <b> SERVER SIDE</b>:
                        </div>
                        <div>1. It recibes the data from the <b> CLIENT </b>(the state) which contains all the values obtained through the Slides.
                        </div>
                        <div>2. A .find is applied having into account all the values. If the value is empty it won't count it.
                        </div>
                        <div>3. Finally all neighborhoods that match with the chosen property values are given back to the front.
                        </div>
                    </div>
                </div>

                <div>
                    <div>Page</div>
                    <img src={find} width={"500px"} alt="ampersands" />
                    <img src={filter} width={"500px"} alt="ampersands" />
                </div>

            </div>


        </div>

    )
}
