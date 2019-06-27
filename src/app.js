import React from "react";
// import axios from "./axios";
import { BrowserRouter, Route } from "react-router-dom";
import { Beratung } from "./beratung";
import { Kontakt } from "./contact";
import { Switch } from "react-router-dom";
import LandingPage from "./welcome";
import { LandingHeader } from "./header";
import { OtherHeader } from "./otherheader";

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
                    <Switch>
                        <Route exact path="/" component={LandingHeader} />
                        <Route path="/" component={OtherHeader} />
                    </Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route path="/beratung" component={Beratung} />
                    <Route path="/contact" component={Kontakt} />
                </React.Fragment>
            </BrowserRouter>
        );
    }
}

// <div className="full-header">
//     <Particles params={particleOpt} />
//     <div
//         className="header-wrapper"
//         style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             right: "10%",
//             transform: "translate(15%, 0%)",
//             alignItems: "center"
//         }}
//     >
//         <div className="nav-wrapper">
//             <Link
//                 to="/welcome"
//                 href="#"
//                 className="nav nav-button link eigth before after"
//             >
//                 Leistungen
//             </Link>
//             &nbsp;&nbsp;&nbsp;&nbsp;
//             <Link
//                 to=""
//                 className="nav nav-button link eigth before after"
//             >
//                 Medien
//             </Link>
//             &nbsp;&nbsp;&nbsp;&nbsp;
//             <Link
//                 to=""
//                 href="#"
//                 className="nav nav-button link eigth before after"
//             >
//                 Willipedia
//             </Link>
//             &nbsp;&nbsp;&nbsp;&nbsp;
//             <Link
//                 to="/contact"
//                 className="nav nav-contact link eigth before after"
//             >
//                 Kontakt
//             </Link>
//         </div>
//         <img className="banner-logo" src="/img/logo.png" />
//     </div>
//     <a href="#hashlocation">
//         <i className="fas fa-chevron-down fa-2x" />
//     </a>
// </div>
