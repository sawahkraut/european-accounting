import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const ReactComponent = ({ text }) => <div>{text}</div>;
class Map extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    render() {
        return (
            <div style={{ height: "100vh", width: "100%" }}>
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key:
                            "https://drive.google.com/open?id=1Xj4nDRbfO1v3BFaUzexx7oQfjShxuwFK&usp=sharing"
                    }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <ReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default Map;
