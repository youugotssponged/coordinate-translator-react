// Libs
import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

// CSS
import "./Components/globals.css";
import "./Components/layout.css";

// Components
import colors from "./Common/colors";
import fonts from "./Common/fonts";

// TEST
//import CoordConverter from "./latlong_to_osgrid/coord_converter";
// let test = new LatLongConverter();
// let testDataOSGB = [83945.952, 584136.204];
// let testDataLatLong = [55.050850, -6.950540];
// let b = test.getOSGB_FromDec(testDataLatLong[0], testDataLatLong[1]);
// console.log(b);
// let c = test.getLatLong_FromOSGB(testDataOSGB[0], testDataOSGB[1]);
// console.log(c);

// Simple test using styled div to create the header of the page. - Might remove later
const HeaderDiv = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${colors.darkBlue};
    color: white;
    width: 100%;
    height: 100px;
    z-index: -1;

    & h1 {
        font-family: ${fonts.titleFont};
        font-size: 88px;
        text-align: center;
        overflow: hidden;
        margin-bottom: 20px;
        z-index: 1;
    }

    & img {
        position: absolute;
        width: 200px;
        height: 200px;
        right: 50px;
        top: -50px;
        clip: rect(0px, 200px, 150px, 0px);
        z-index: 0;
        filter: invert(1);
    }
`;


const App = () => {
    return (
        <>
            <Helmet>
                {/* ABeeZee font - google fonts */}
                <link
                    href="https://fonts.googleapis.com/css2?family=ABeeZee:ital@1&display=swap"
                    rel="stylesheet"
                />
            </Helmet>
            <HeaderDiv>
                <h1> Coordinate To OSGB Converter</h1>
                <img
                    src="/img/os_grid_icon.png"
                    alt="OS GRID logo from FunkyPenguin10's Flutter App"
                ></img>
            </HeaderDiv>
        </>
    );
};

export default App;
