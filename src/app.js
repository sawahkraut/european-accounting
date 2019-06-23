import React from "react";
import axios from "./axios";
import { BrowserRouter, Route } from "react-router-dom";

import { Link } from "react-router-dom";
// import { Parallax } from "react-scroll-parallax";
import LandingPage from "./welcome";
import Particles from "react-particles-js";

// PARTICLES //

const particleOpt = {
    particles: {
        number: {
            value: 90,
            density: {
                enable: true,
                value_area: 1000
            }
        },
        color: {
            value: "#28357f"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            },
            polygon: {
                nb_sides: 5
            },
            image: {
                src: "/img/logo.png",
                width: 100,
                height: 100
            }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#28357f",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
};

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {}
    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <div>
                        <Particles params={particleOpt} />
                        <div
                            className="wrapper"
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0
                            }}
                        >
                            <div>
                                <Link to="" className="nav">
                                    Dienstleistungen
                                </Link>
                                <Link to="" className="nav">
                                    Immobilien
                                </Link>
                                <Link to="" className="nav">
                                    Medien
                                </Link>
                                <Link to="" className="nav">
                                    Willipedia
                                </Link>
                                <Link to="" className="nav-contact">
                                    Kontakt
                                </Link>
                            </div>
                            <img className="banner-logo" src="/img/logo.png" />
                        </div>
                    </div>
                    <LandingPage />
                </React.Fragment>
            </BrowserRouter>
        );
    }
}

// <Link to="/chat" className="nav">
//     Chat
// </Link>
