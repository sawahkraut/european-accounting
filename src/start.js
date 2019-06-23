import React from "react";
import ReactDOM from "react-dom";
import LandingPage from "./welcome";
import { App } from "./app";
import { Provider } from "react-redux";
import reducer from "./reducers";
import { ParallaxProvider } from "react-scroll-parallax";

// ########################### socket io ########################### //

import { init as initSocket } from "./socket";

// #####################################################################

import "bootstrap/dist/css/bootstrap.min.css";
import "../public/css/normalize.css";
import "../public/css/styles.css";

import { createStore, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(reduxPromise))
);

let elem;
if (location.pathname == "/welcome") {
    elem = (
        <ParallaxProvider>
            <LandingPage />
        </ParallaxProvider>
    );
} else {
    initSocket(store);
    elem = (
        <Provider store={store}>
            <ParallaxProvider>
                <App />
            </ParallaxProvider>
        </Provider>
    );
}

ReactDOM.render(elem, document.querySelector("main"));
