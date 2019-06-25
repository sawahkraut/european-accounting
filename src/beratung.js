import React from "react";
import axios from "./axios";

export class Beratung extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {}

    render() {
        return (
            <div className="beratung-container">
                <div className="quote">
                    Die Zeit ist zu kostbar, um sie mit falschen Dingen zu
                    verschwenden
                </div>

                <div className="beratung-box-one">
                    <div className="text">
                        Ob es sich um Buchhaltungsarbeiten, Lohn- und
                        Gehaltsabrechnungen, die Abwicklung des täglichen
                        Zahlungsverkehrs oder die Erstellung Ihres
                        Jahresabschlusses und Ihrer privaten oder betrieblichen
                        Steuererklärungen handelt – wir beraten Sie engagiert,
                        umfassend und kompetent
                        <div className="mehr">
                            <a href="">Mehr...</a>
                        </div>
                    </div>
                    <div className="title">
                        Deklarationsberatung
                        <div className="customHr-white" />
                    </div>
                </div>

                <div className="beratung-box-two">
                    <div className="title1">
                        Gestaltungsberatung
                        <div className="customHr-black" />
                    </div>
                    <div className="text1">
                        Gemeinsam mit unserer Mandantschaft sind wir für die
                        privaten und unternehmerischen Interessen tätig. Wir
                        achten insbesondere darauf, dass wir alle Beteiligten
                        verstehen und auch selbst verstanden werden. Je mehr
                        Menschen aus verschiedenen Ländern und Kulturen
                        aufeinandertreffen, umso wichtiger ist effiziente
                        Kommunikation.
                        <div className="mehr">
                            <a href="">Mehr...</a>
                        </div>
                    </div>
                </div>

                <div className="beratung-box-three">
                    <div className="text2">
                        Sie arbeiten als Digitales Unternehmen in einem
                        gesicherten und hochflexiblen internetbasierten
                        Unternehmensnetz und richten das Geschäftsmodell und den
                        Geschäftsprozess des Finanz- und Rechnungswesen
                        dynamisch darauf aus: Alle Daten über Prozesse ...
                        <div className="mehr">
                            <a href="">Mehr...</a>
                        </div>
                    </div>
                    <div className="title2">
                        Digitales Finanz- und Rechnungswesen
                        <div className="customHr-blue-short" />
                    </div>
                </div>

                <div className="beratung-box-four">
                    <div className="title3">
                        Wohn- und Ferienvermietung
                        <div className="customHr-blue-short" />
                    </div>

                    <div className="text3">
                        Bei knapp zwei Milliarden betreutem Immobilienvermögen
                        sind wir täglich dem Rütteltest der Praxis ausgesetzt.
                        Damit die Verwaltung, Betreuung und Beratung eines
                        solchen Portfolios optimiert organisiert ist haben wir
                        für unsere Mandantschaft und deren Berater eine
                        praxisorientierte, nutz- und sinngebende digitale Lösung
                        entwickelt.
                        <div className="mehr">
                            <a href="">Mehr...</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
