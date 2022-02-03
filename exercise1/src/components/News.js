import React from "react";
import koronakuva from "./koronakuva.jpg"

export default function News() {
    return (
        <div className="news">
            <div className="newsView">
                <h1>Koronavirus</h1>
                <img src={ koronakuva } className="koronakuva" />
                <p className="red">HS seuraa</p>
                <h1>Päivittyvä seuranta | STM: Parasetamolia tai deksametasonia sisältävien lääkkeiden myyntiä rajoitetaan</h1>
                <h3>Koronaviruksen vaikutukset Suomessa</h3>
                <div className="covContainer">
                    <div>Tartunnat yhteensä
                        <div className="amount">7776</div>
                    </div>
                    <div>Tuoreimmat 14 päivää
                        <div className="amount">293</div>
                    </div>
                    <div>Edeltävät 14 päivää
                        <div className="amount">132</div>
                    </div>
                </div>
                <div className="covContainer">
                    <div>Kuolleet
                        <div className="amount">334</div>
                    </div>
                </div>
            </div>
            <div className="popular">
                <h2 className="popularItem">Luetuimmat</h2>
                <div>
                    <div className="popularItem numbered">
                        <div className ="number">1</div>
                        <div>Rikosepäilyt | EIT-huijaus: Kuolleeksi väitetty valehteli</div>
                    </div>
                    <div className="popularItem numbered">
                        <div className ="number">2</div>
                        <div>Rkdmcgsld | vsdmkvsdmkdfpgmdf mklsdfmglks smfkdfpgkml msk fmka</div>
                    </div>
                    <div className="popularItem numbered">
                        <div className ="number">3</div>
                        <div>Tejikfja | mdfgkanmvalmvla askdjfaklfnakjl okfpaojkfm asidfjao adjfpöl adfjaöl mal</div>
                    </div>
                    <div className="popularItem numbered">
                        <div className ="number">4</div>
                        <div>Tejikfja | mdfgkanmvalmvla bhkbk askdjfaklfnakjl okfpaojkfm asidfjao adjfpöl adfjaöl mal</div>
                    </div>
                    <div className="popularItem numbered">
                        <div className ="number">5</div>
                        <div>Tejikfja | fcdchgj mdfgkanmvalmvla askdjfaklfnakjl okfpaojkfm asidfjao adjfpöl adfjaöl mal</div>
                    </div>
                    <div className="popularItem numbered">
                        <div className ="number">6</div>
                        <div>Tejikfja | mdfgkanmvalmvla askdjfaklfnakjl okfpaojkfm asidfjao bhbkj jhbkn xserdfg ökljhk hjmnl adjfpöl adfjaöl mal</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
 