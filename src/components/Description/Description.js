import "./Description.scss";
// import Instagram from "../InstagramEmbed/Instagram";
import Pinterest from "../Pinterest/Pinterest"


export default function Description() {
    return (
        <div className="main-description " >
            <div className="main-description-width-padding" >
                <div className="main-description__description-headline " >  DAS MACHT DIE BERLINER LUFT!</div>
                <div className="main-description__description-subline " >Just landed to the city. Now, where shall I go?</div>


                <div className="grid-description " >
                    <img width="700px" className="grid-description__box-image" src="https://images.unsplash.com/photo-1542919868-03bf89eedf20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80" alt="Descripcion web" />
                    <div className="grid-description__box-overlaid-1">NÄCHSTE STATION...</div>
                    <div className="grid-description__box-overlaid-2">MITTE</div>
                    <div className="grid-description__box-overlaid-3">WITTENAU</div>
                    <div className="grid-description__box-overlaid-4">KREUZBERG</div>
                    <div className="grid-description__box-overlaid-5">NEUKÖLLN</div>

                    <div className="grid-description__box-text"><b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate cumque deserunt optio molestiae, quasi accusantium ex ullam unde? Dolor, maxime. Asperiores exercitationem voluptatem fuga optio ut rem natus!</b></div>
                </div>


                <div className="paragraph-box " >
                    <div className="paragraph-box__text-title" ><b>WHAT DOES "KIEZ" STANDS FOR?</b></div>
                    <div className="paragraph-box__text-content" >Kiez is a German word that refers to a city neighbourhood, a relatively small community within a larger town. The word is mainly used in Berlin and northern Germany. Similar quarters are called Veedel in Cologne and Grätzl in Vienna.</div>
                    <div className="paragraph-box__text-content" >In Berlin the term usually has a positive connotation, as inhabitants often identify with the "Kiez" they live in. A Berliner "Kiez" usually consists mainly of pre-war buildings and upholds its own commercial and cultural infrastructure. Outside Berlin, "Kiez" may be considered by some as somewhat slangy.</div>

                    <img className="paragraph-box__kiez-description-image " src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/MoabitStephanstra%C3%9Fe-1.jpg/1280px-MoabitStephanstra%C3%9Fe-1.jpg" alt="Descripcion web" />
                </div>

                <div className="paragraph-box " >
                    <div className="paragraph-box__text-title" ><b>LOREM IPSUM DOLOR SIT AMEN CONSECTETUR ADIPISICING ELIT SIT AMEN CONSECTETUR?</b></div>
                    <div className="paragraph-box__text-content" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolorem rem consequuntur aspernatur. Ex impedit hic nobis inventore necessitatibus praesentium quidem ad! Neque, exercitationem at deleniti pariatur nulla, impedit quae repellendus perspiciatis sapiente numquam ipsa eos aliquid odio eaque necessitatibus modi tempore quibusdam nam incidunt ad commodi, laborum quod consequatur. Molestiae recusandae sapiente architecto fugit dicta, beatae libero eius quisquam facilis ratione modi. Porro nulla quaerat fuga. Neque, aspernatur rem animi repudiandae labore dolorem officiis quisquam tempora praesentium dolorum maiores excepturi, nisi amet quibusdam impedit enim sequi dolores eum, necessitatibus iure. Dolor ratione repellat corporis sint, laborum labore perspiciatis porro aut, vitae exercitationem nulla molestias. Blanditiis ea laudantium consequuntur tempora incidunt quibusdam quas, nulla, nesciunt provident accusamus dolores atque consequatur earum odit veniam delectus, cupiditate dolore nobis maiores sint libero.</div>
                </div>
            </div>
            <div className="two-images" >
                <img className="two-images__image1-in-description" width="550px" src="https://images.unsplash.com/photo-1592384773244-7bcb166042d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80" alt="" />
                <img className="two-images__image2-in-description" width="550px" src="https://images.unsplash.com/photo-1561364216-fa838594e8a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80" alt="" />
            </div>
            <div>
                <div className="paragraph-box " >
                    <div className="paragraph-box__text-title" ><b>LOREM IPSUM DOLOR SIT AMEN CONSECTETUR ADIPISICING ELIT SIT AMEN CONSECTETUR?</b></div>
                    <div className="paragraph-box__text-content" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolorem rem consequuntur aspernatur. Ex impedit hic nobis inventore necessitatibus praesentium quidem ad! Neque, exercitationem at deleniti pariatur nulla, impedit quae repellendus perspiciatis sapiente numquam ipsa eos aliquid odio eaque necessitatibus modi tempore quibusdam nam incidunt ad commodi, laborum quod consequatur. Molestiae recusandae sapiente architecto fugit dicta, beatae libero eius quisquam facilis ratione modi. Porro nulla quaerat fuga. Neque, aspernatur rem animi repudiandae labore dolorem officiis quisquam tempora praesentium dolorum maiores excepturi, nisi amet quibusdam impedit enim sequi dolores eum, necessitatibus iure. Dolor ratione repellat corporis sint, laborum labore perspiciatis porro aut, vitae exercitationem nulla molestias. Blanditiis ea laudantium consequuntur tempora incidunt quibusdam quas, nulla, nesciunt provident accusamus dolores atque consequatur earum odit veniam delectus, cupiditate dolore nobis maiores sint libero.</div>
                </div>
            </div>
            {/* <Instagram />*/}
            <Pinterest />
        </div >
    )
}
