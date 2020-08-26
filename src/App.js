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

// Simple test using styled div to create the header of the page.
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
        font-size: 90px;
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
