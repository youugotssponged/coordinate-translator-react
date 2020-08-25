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

const TestStyledDiv = styled.div`
    background-color: ${colors.darkBlue};
    color: white;
    width: 100%;
    height: 100px;

    & h1 {
        font-family: ${fonts.titleFont};
        font-size: 90px;
        text-align: center;
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
            <TestStyledDiv>
                <h1> Coordinate To OSGB Converter</h1>
            </TestStyledDiv>
        </>
    );
};

export default App;
