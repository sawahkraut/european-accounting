import React from "react";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";

// import { HashRouter } from "react-router-dom";
// import { Registration } from "./registration";
// import { Login } from "./login";

// parallax

const LandingPage = () => {
    return (
        <div className="after-header">
            <ParallaxBanner
                layers={[
                    {
                        amount: 0.1
                    }
                ]}
                style={{
                    height: "50vh"
                }}
            />
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
                            image: "/img/mallorca-puerto-portals.jpg",
                            amount: 0.6
                        }
                    ]}
                    style={{
                        height: "50vh"
                    }}
                >
                    <span className="h1">Horizontal</span>
                </ParallaxBanner>
            </Parallax>
            <ParallaxBanner
                className="banner-two"
                offsetYMax={70}
                offsetYMin={-70}
                offsetXMax={-30}
                offsetXMin={30}
                layers={[
                    {
                        image: "/img/minimal.jpeg",
                        amount: 0.5
                    }
                ]}
                style={{
                    height: "100vh"
                }}
            />
        </div>
    );
};

export default LandingPage;

// Social Network

// export function Welcome() {
//     return (
//         <div className="welcome">
//             <HashRouter>
//                 <React.Fragment>
//                     <Parallax
//                         className="custom-class"
//                         y={[-20, 20]}
//                         tagOuter="figure"
//                     >
//                         <Image src="/img/fuji.jpeg" />
//                     </Parallax>
//                     ;
//                 </React.Fragment>
//             </HashRouter>
//         </div>
//     );
// }
// Route
// <Route exact path="/" component={Registration} />
// <Route path="/login" component={Login} />
