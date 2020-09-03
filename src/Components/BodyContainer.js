import React, { useState } from "react";
import styled from "styled-components";

import colors from "../Common/colors";

// Components
import LatLongArea from "./LatLongArea";
import OsgbArea from "./OsgbArea";

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
`;

const ImageArrow = styled.img`
    grid-row: 2/3;
    grid-column: 6/8;
    padding-top: 10px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    transform: ${(props) => props.flipDirection};
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

    background-color: ${(props) => props.activeColor};
    color: black;
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

    background-color: ${(props) => props.activeColor};
    color: black;
`;

// TODO: Implement LatLong and Osgb Input Area Components
// Refer to FIGMA DESIGN

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

    const switchAreas = () => {
        if (LatLongButtonClicked) {
            return <LatLongArea />;
        } else if (OsgbButtonClicked) {
            return <OsgbArea />;
        } else {
            console.log("Error: Neither Areas are rendering...");
        }
    };

    return (
        <BodyContainerDiv>
            <LatLongButton
                activeColor={
                    LatLongButtonClicked ? colors.activeGreen : "white"
                }
                disabled={LatLongButtonClicked}
                onClick={() => LatLongButtonHandler()}
            >
                Lat/Long
            </LatLongButton>
            <ImageArrow
                src={"./img/arrow.png"}
                flipDirection={
                    LatLongButtonClicked ? "scaleX(-1)" : "scaleX(1)"
                }
            />
            <OsgbButton
                activeColor={OsgbButtonClicked ? colors.activeGreen : "white"}
                disabled={OsgbButtonClicked}
                onClick={() => OsgbButtonHandler()}
            >
                OSGB
            </OsgbButton>

            {switchAreas()}
            
        </BodyContainerDiv>
    );
};

export default BodyContainer;
