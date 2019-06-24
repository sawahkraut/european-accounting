import React from "react";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import { Link } from "react-router-dom";

// import { HashRouter } from "react-router-dom";
// import { Registration } from "./registration";
// import { Login } from "./login";

// parallax

const LandingPage = () => {
    return (
        <div className="after-header">
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

                <div className="landing-text">Dienstleistungen</div>
                <div className="container">
                    <Link to="" className="what-we-do link eigth before after">
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
            <div className="landing-info">
                <ParallaxBanner
                    layers={[
                        {
                            amount: 0.2
                        }
                    ]}
                    style={{
                        height: "50vh"
                    }}
                />
            </div>
            <ParallaxBanner
                className="banner-two"
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
            <div className="test" />

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

            <div className="footer" />
        </div>
    );
};

export default LandingPage;

//    <img className="bird" src="/img/bird.jpg" />
