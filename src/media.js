import React from "react";
import axios from "./axios";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import { Link } from "react-router-dom";

export class Medien extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div id="medien" className="beratung-container">
                <a name="hashlocation" />
                <div className="quote">
                    Mache keine Kompromisse wenn es um Qualität geht.
                </div>

                <div className="beratung-box-one">
                    <ParallaxBanner
                        layers={[
                            {
                                amount: 4
                            }
                        ]}
                        style={{
                            height: "30vh",
                            width: "5%"
                        }}
                    />
                    <div className="text">
                        Ob es sich um Buchhaltungsarbeiten, Lohn- und
                        Gehaltsabrechnungen, die Abwicklung des täglichen
                        Zahlungsverkehrs oder die Erstellung Ihres
                        Jahresabschlusses und Ihrer privaten oder betrieblichen
                        Steuererklärungen handelt – wir beraten Sie engagiert,
                        umfassend und kompetent
                        <div className="mehr">
                            <a href="">Mehr...</a>
                        </div>
                    </div>

                    <div className="title">
                        Deklarationsberatung
                        <div className="customHr-white" />
                    </div>
                </div>
                <Parallax
                    offsetYMax={70}
                    offsetYMin={-70}
                    offsetXMax={-30}
                    offsetXMin={30}
                >
                    <ParallaxBanner
                        layers={[
                            {
                                image: "/img/apple.jpeg",
                                amount: 0.6
                            }
                        ]}
                        style={{
                            height: "30vh"
                        }}
                    />
                </Parallax>
                <div className="beratung-box-two">
                    <ParallaxBanner
                        layers={[
                            {
                                amount: 0.2
                            }
                        ]}
                        style={{
                            height: "10vh",
                            width: "5%"
                        }}
                    />
                    <div className="title1">
                        Gestaltungsberatung
                        <div className="customHr-white" />
                    </div>
                    <div className="text1">
                        Gemeinsam mit unserer Mandantschaft sind wir für die
                        privaten und unternehmerischen Interessen tätig. Wir
                        achten insbesondere darauf, dass wir alle Beteiligten
                        verstehen und auch selbst verstanden werden. Je mehr
                        Menschen aus verschiedenen Ländern und Kulturen
                        aufeinandertreffen, umso wichtiger ist effiziente
                        Kommunikation.
                        <div className="mehr">
                            <a href="">Mehr...</a>
                        </div>
                    </div>
                </div>
                <ParallaxBanner
                    offsetYMax={50}
                    offsetYMin={-50}
                    offsetXMax={-15}
                    offsetXMin={15}
                    layers={[
                        {
                            image: "/img/flowers.jpeg",
                            amount: 0.4
                        }
                    ]}
                    style={{
                        height: "30vh"
                    }}
                />
                <div className="beratung-box-three">
                    <div className="text2">
                        Sie arbeiten als Digitales Unternehmen in einem
                        gesicherten und hochflexiblen internetbasierten
                        Unternehmensnetz und richten das Geschäftsmodell und den
                        Geschäftsprozess des Finanz- und Rechnungswesen
                        dynamisch darauf aus: Alle Daten über Prozesse ...
                        <div className="mehr">
                            <a href="">Mehr...</a>
                        </div>
                    </div>
                    <div className="title2">
                        Digitales Finanz- und Rechnungswesen
                        <div className="customHr-blue-short" />
                    </div>
                </div>
                <ParallaxBanner
                    className=""
                    layers={[
                        {
                            image: "/img/cactus.jpeg",
                            amount: 0.4
                        }
                    ]}
                    style={{
                        height: "40vh"
                    }}
                />
                <div className="beratung-box-four">
                    <div className="title3">
                        Wohn- und Ferienvermietung
                        <div className="customHr-blue-short" />
                    </div>

                    <div className="text3">
                        Bei knapp zwei Milliarden betreutem Immobilienvermögen
                        sind wir täglich dem Rütteltest der Praxis ausgesetzt.
                        Damit die Verwaltung, Betreuung und Beratung eines
                        solchen Portfolios optimiert organisiert ist haben wir
                        für unsere Mandantschaft und deren Berater eine
                        praxisorientierte, nutz- und sinngebende digitale Lösung
                        entwickelt.
                        <div className="mehr">
                            <a href="">Mehr...</a>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div>
                        <a href="/welcome">
                            <i className="arrow fas fa-angle-double-left fa-2x" />
                        </a>
                    </div>
                    <div className="footer-links">
                        <Link className="link eigth before after" to="">
                            Impressum &nbsp;&nbsp;
                        </Link>

                        <Link className="link eigth before after" to="">
                            Datenschutz &nbsp;&nbsp;
                        </Link>

                        <Link className="link eigth before after" to="">
                            About Us
                        </Link>
                        <img className="footer-logo" src="/img/logo.png" />
                        <img
                            className="image-xing"
                            src="/img/xing.jpg"
                            to="https://login.xing.com/?dest_url=https%3A%2F%2Fwww.xing.com%2Fprofile%2FWilli_Plattes"
                        />
                        <img
                            className="image-linkedin"
                            src="/img/linkedin.jpeg"
                            to="https://login.xing.com/?dest_url=https%3A%2F%2Fwww.xing.com%2Fprofile%2FWilli_Plattes"
                        />
                        <img
                            className="image-youtube"
                            src="/img/youtube.png"
                            to="https://login.xing.com/?dest_url=https%3A%2F%2Fwww.xing.com%2Fprofile%2FWilli_Plattes"
                        />
                    </div>
                </div>
            </div>
        );
    }
}
