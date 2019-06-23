import React from "react";
import axios from "./axios";
import { BrowserRouter, Route } from "react-router-dom";

// import { Link } from "react-router-dom";
// import { Parallax } from "react-scroll-parallax";
import LandingPage from "./welcome";

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {}
    render() {
        return (
            <div>
                <BrowserRouter>
                    <React.Fragment>
                        <header className="header">
                            <img className="banner-logo" src="/img/logo.png" />
                            <React.Fragment />
                        </header>

                        <LandingPage />
                    </React.Fragment>
                </BrowserRouter>
            </div>
        );
    }
}

// <Link to="/chat" className="nav">
//     Chat
// </Link>
