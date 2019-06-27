import React from "react";
import { Link } from "react-router-dom";
import Particles from "react-particles-js";

// PARTICLES //

const particleOpt = {
    particles: {
        number: {
            value: 90,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#28357f"
        },
        shape: {
            type: "canvas",
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
                height: 10
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

export class OtherHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {}
    render() {
        return (
            <React.Fragment>
                <div className="full-other-header">
                    <div className="canvas2">
                        <Particles params={particleOpt} />
                    </div>
                    <div
                        className="other-header-wrapper"
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            alignItems: "center"
                        }}
                    >
                        <div className="other-nav-wrapper">
                            <div className="logo-position">
                                <a href="/">
                                    <img
                                        className="logo-otherheader"
                                        src="/img/logo.png"
                                    />
                                </a>
                            </div>
                            <Link
                                to="/"
                                href="#"
                                className="other-nav other-nav-button link eigth before after"
                            >
                                Leistungen
                            </Link>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <Link
                                to=""
                                className="other-nav other-nav-button link eigth before after"
                            >
                                Medien
                            </Link>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <Link
                                to=""
                                href="#"
                                className="other-nav other-nav-button link eigth before after"
                            >
                                Willipedia
                            </Link>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <Link
                                to="/contact"
                                className="other-nav other-nav-contact link eigth before after"
                            >
                                Kontakt
                            </Link>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
