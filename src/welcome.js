import React from "react";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import { Link } from "react-router-dom";

// import { Registration } from "./registration";
// import { Login } from "./login";

// parallax

const LandingPage = () => {
    return (
        <div id="landingpage" className="after-header">
            <div className="dienstleistungen-banner">
                <ParallaxBanner
                    layers={[
                        {
                            amount: 1
                        }
                    ]}
                    style={{
                        height: "50vh",
                        width: "5%"
                    }}
                />

                <div className="landing-text">
                    Leistungen
                    <h5 className="customHr" />
                </div>

                <div className="container">
                    <Link
                        to="/beratung"
                        className="what-we-do link eigth before after"
                    >
                        Beratung
                    </Link>

                    <Link to="" className="what-we-do link eigth before after">
                        Immobilienerwerb
                    </Link>
                    <Link to="" className="what-we-do link eigth before after">
                        Steuerbelastung
                    </Link>
                </div>
            </div>
            <Parallax
                className="wrapper"
                offsetYMax={70}
                offsetYMin={-70}
                offsetXMax={-30}
                offsetXMin={30}
            >
                <ParallaxBanner
                    className="banner"
                    layers={[
                        {
                            image: "/img/island.jpg",
                            amount: 0.6
                        }
                    ]}
                    style={{
                        height: "70vh"
                    }}
                />
            </Parallax>
            <div className="wissensdatenbank-banner">
                <ParallaxBanner
                    layers={[
                        {
                            amount: 0.2
                        }
                    ]}
                    style={{
                        height: "40vh",
                        width: "5%"
                    }}
                />

                <div className="wissensdatenbank-text">
                    Besuchen Sie unser Willipedia: eine für Sie erstellte
                    Wissensdatenbank mit über 600 Einträgen rund um
                    Steuerberatung, Immobilien und vieles mehr:
                    <div className="empty-space" />
                    <a
                        className="willipedia-link link eigth before after"
                        href="https://www.europeanaccounting.net/willipedia/"
                    >
                        Willipedia
                    </a>
                </div>
                <div className="wissensdatenbank-title">
                    Wissensdatenbank
                    <h5 className="customHr-blue-short" />
                </div>
            </div>

            <ParallaxBanner
                offsetYMax={50}
                offsetYMin={-50}
                offsetXMax={-15}
                offsetXMin={15}
                layers={[
                    {
                        image: "/img/data.jpg",
                        amount: 0.4
                    }
                ]}
                style={{
                    height: "60vh"
                }}
            />
            <div className="medien-banner">
                <div className="medien-title">
                    Medien
                    <h5 className="customHr" />
                </div>
                <div className="medien-text">
                    <Link className="link eigth before after" to="">
                        News
                    </Link>
                    <Link className="link eigth before after" to="">
                        Fachbücher
                    </Link>
                    <Link className="link eigth before after" to="">
                        Seminare & Veranstaltungen
                    </Link>
                </div>
            </div>

            <ParallaxBanner
                className=""
                layers={[
                    {
                        image: "/img/bird.jpg",
                        amount: 0.4
                    }
                ]}
                style={{
                    height: "50vh"
                }}
            />

            <div className="footer">
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
};

export default LandingPage;

//    <img className="bird" src="/img/bird.jpg" />
