import "./Instagram.scss";
import InstagramEmbed from 'react-instagram-embed';
import { useState } from "react";

import 'react-ig-feed/dist/index.css'

export default function Instagram() {

    const [AppID, setAppID] = useState("184789286997686")
    const [ClientToken, setClientToken] = useState("c7513307ed8f2098ce774e94d63b040d")

    return (
        <div className="instagram-main" >
            Hola desde Instagram.js

            <InstagramEmbed


                url='https://instagr.am/p/Zn1Xz/'
                maxWidth={375}
                hideCaption={false}
                containerTagName='div'
                injectScript
                protocol=''
                onLoading={() => { }}
                onSuccess={() => { }}
                onAfterRender={() => { }}
                onFailure={() => { }}
            />




        </div>
    )
}



//https://developers.facebook.com/apps/258512152279834/add/
//App ID: 258512152279834

//https://developers.facebook.com/apps/258512152279834/settings/advanced/
//Client Token: daeeb452c0daf9802c10ad5a534d35e0

//Instagram App Secret: dd8ef67d866e68d09fbc71ed3ab75e0b