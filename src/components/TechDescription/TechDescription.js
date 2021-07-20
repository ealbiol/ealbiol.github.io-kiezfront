import "./TechDescription.scss"
import heroku from "../../images/heroku.jpg"
import mixins from "../../images/mixins.jpg"
import variables from "../../images/variables.jpg"
import ampersands from "../../images/ampersands.jpg"
import carousel from "../../images/carousel.gif"




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
                <div className="Heroku-left" >HEROKU
                    <div className="TechDescription-in-Technologies__heroku-description-main__heroku-explanation" >Cloud platform that allows you to upload your app with no need of your own server. It directly connects to your Github project. </div>
                    <div className="TechDescription-in-Technologies__heroku-description-main__front-link" onClick={() => handleFront()} >https://kiezberlin.herokuapp.com/</div>
                    <div className="TechDescription-in-Technologies__heroku-description-main__front-link" onClick={() => handleBack()} >https://kiezberlinback.herokuapp.com/</div>

                </div>
                <img src={heroku} width={"1000px"} alt="logo" />
            </div>


            {/* SASS */}
            <div className="TechDescription-in-Technologies__heroku-description-main" >
                <div className="Heroku-left" >SASS
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
                    <div className="TechDescription-in-Technologies__heroku-description-main__heroku-explanation" >Sass is used with the objective to shorten the style code:
                        <div>1. The Nesting Ampersand.</div>
                        <div>2. Variables.</div>
                        <div>3. Mixins to shorten code.</div>
                    </div>
                </div>


                <div>
                    <div>Carousel</div>
                    <img src={carousel} width={"400px"} alt="ampersands" />
                </div>
                <div>
                    <div>Math.random()</div>
                    <img src={variables} width={"400px"} alt="variables" />
                </div>
                <div>
                    <div>history.push</div>
                    <img src={mixins} width={"400px"} alt="mixins" />
                </div>
            </div>


        </div>

    )
}
