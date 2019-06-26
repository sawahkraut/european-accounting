import React from "react";
import axios from "./axios";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import { Link } from "react-router-dom";

export class Kontakt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {}

    render() {
        return (
            <div id="contact" className="beratung-container">
                <a name="hashlocation" />
                <div className="about-us-text">
                    Über Uns
                    <div className="customHr-black-short" />
                </div>

                <div className="contact-box-one">
                    <ParallaxBanner
                        layers={[
                            {
                                amount: 4
                            }
                        ]}
                        style={{
                            height: "5vh",
                            width: "5%"
                        }}
                    />
                    <div className="team-container">
                        <div className="info1">Willi Plattes</div>
                        <img
                            className="contact-picture"
                            src="/img/willi-plattes.jpg"
                        />

                        <div className="info-willi">Geschäftsführer</div>
                    </div>
                    <div className="team-container1">
                        <div className="info1">Yvonne Plattes</div>
                        <img
                            className="contact-picture"
                            src="/img/yvonnePlattes.jpg"
                        />

                        <div className="info-yvonne">
                            Gestoría - Geschäftsführung
                        </div>
                    </div>
                </div>
                <div className="about-the-team">
                    <div className="about-the-team-title"> Das Team</div>
                    <div className="customHr-white-short" />
                    <div className="about-the-team-text">
                        Unser motiviertes und qualifiziertes Team steht Ihnen
                        für all Ihre Belange zur Verfügung. Ob Sie Fragen an
                        unsere Steuerberater oder die
                        Mitarbeiterinnen/Mitarbeiter der Immobilienabteilung
                        oder der Gestoria, der Lohn- oder Rechtsabteilung haben,
                        wir finden praktikable und nachhaltige Antworten. Hier
                        finden Sie die in unserem Haus für Sie verantwortlichen
                        Personen
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
                                image: "/img/colors.jpeg",
                                amount: 0.6
                            }
                        ]}
                        style={{
                            height: "50vh"
                        }}
                    />
                </Parallax>
                <div className="contact-box-two">
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
                <div className="contact-box-three" />
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
                <div className="contact-box-four" />
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
