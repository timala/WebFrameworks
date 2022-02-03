import React from "react";
import hsLogo from "./hs_logo.png"

export default function Header() {
    return (
        <div className="headerOuter">
            <div className="headerInner">
                <img src={hsLogo} className="headerLogo"/>
                <div className="menuElement">Etusivu</div>
                <div className="menuElement">Uutiset</div>
                <div className="menuElement">Lehdet</div>
                <div className="menuElement">Asiakaspalvelu</div>
                <button>Tilaa</button>
                <div className="menuElement">Kirjaudu</div>
                <div className="menuElement valikko">Valikko</div>
            </div>
        </div>
    )
}