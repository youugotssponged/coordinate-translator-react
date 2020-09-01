import React, { useState } from "react";
import styled from "styled-components";

import colors from "../Common/colors";

import LatLongArea from "./LatLongArea";
//import OsgbArea from "./OsgbArea";

const BodyContainerDiv = styled.div`
    background-color: ${colors.lightPurple};
    grid-row: 3/14;
    grid-column: 2/12;
    border-radius: 30px;
    border-style: solid;
    border-color: ${colors.darkBlue};
    border-width: 20px;

    display: grid;
    grid-template-columns: repeat(12, 2fr);
    grid-template-rows: repeat(12, 2fr);

    & img {
        grid-row: 2/3;
        grid-column: 6/8;
        padding-top: 10px;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
`;

const LatLongButton = styled.button`
    grid-row: 2/3;
    grid-column: 2/6;

    font-size: 1.5vw;
    border-radius: 30px;
    border-style: solid;
    border-color: ${colors.darkBlue};
    border-width: 5px;
    width: 50%;
    display: block;
    margin-left: auto;
    margin-right: auto;
`;

const OsgbButton = styled.button`
    grid-row: 2/3;
    grid-column: 8/12;

    font-size: 1.5vw;
    border-radius: 30px;

    border-style: solid;
    border-color: ${colors.darkBlue};
    border-width: 5px;
    width: 50%;
    display: block;
    margin-left: auto;
    margin-right: auto;
`;

// TODO: Style Main Buttons

// TODO: Implement LatLong and Osgb Input Area Components

// Refer to FIGMA DESIGN

// Body container will hold 2 buttons to which switch what's rendered, button changes colour dynamically based on what's currently rendered
const BodyContainer = () => {
    const [LatLongButtonClicked, setLatLongButtonClicked] = useState(true); // Renders first and Enabled
    const [OsgbButtonClicked, setOsgbButtonClicked] = useState(false); // Not rendered and Disabled

    const LatLongButtonHandler = () => {
        // Render LatLong Area
        setOsgbButtonClicked(!OsgbButtonClicked);
        setLatLongButtonClicked(!LatLongButtonClicked); // Flip

        console.log(`LatLong: ${LatLongButtonClicked}`);
        console.log(`OSGB: ${OsgbButtonClicked}`);
    };

    const OsgbButtonHandler = () => {
        setOsgbButtonClicked(!OsgbButtonClicked);
        setLatLongButtonClicked(!LatLongButtonClicked); // Flip

        console.log(`LatLong: ${LatLongButtonClicked}`);
        console.log(`OSGB: ${OsgbButtonClicked}`);
    };

    // Clean up and make dynamic instead of two seperate style objects // arrow img
    // TODO: CSS Transform rotate animation - keyframes
    // Note: the styled library has a { keyframes } - look into it

    const imgFlipLeft = { transform: "scaleX(-1)" };
    const imgFlipRight = { transform: "scaleX(1)" };

    const activeButtonColor = {
        backgroundColor: "white",
    };

    const inactiveButtonColor = {
        backgroundColor: "green",
        color: "black",
    };

    return (
        <BodyContainerDiv>
            <LatLongButton
                style={
                    LatLongButtonClicked
                        ? inactiveButtonColor
                        : activeButtonColor
                }
                disabled={LatLongButtonClicked}
                onClick={() => LatLongButtonHandler()}
            >
                Lat/Long
            </LatLongButton>
            <img
                src="/img/arrow.png"
                alt="current conversion"
                style={LatLongButtonClicked ? imgFlipLeft : imgFlipRight}
            />
            <OsgbButton
                style={
                    OsgbButtonClicked ? inactiveButtonColor : activeButtonColor
                }
                disabled={OsgbButtonClicked}
                onClick={() => OsgbButtonHandler()}
            >
                OSGB
            </OsgbButton>

            <LatLongArea />
        </BodyContainerDiv>
    );
};

export default BodyContainer;
