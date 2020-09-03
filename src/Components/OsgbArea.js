import React, { useState, useRef } from "react";
import styled from "styled-components";
import Converter from "../latlong_to_osgrid/coord_converter";

import colors from "../Common/colors";
import fonts from "../Common/fonts";

const OSGBAreaStyled = styled.div`
    grid-column: 2/12;
    grid-row: 4/12;

    background-color: white;
    border-radius: 30px;

    border-style: solid;
    border-color: ${colors.darkBlue};
    border-width: 5px;

    display: grid;
    grid-template-rows: repeat(7, 2fr);
    grid-template-columns: repeat(7, 2fr);

    font-family: ${fonts.titleFont};

    & .EastingInput {
        grid-column: 2/4;
        grid-row: 2/3;
        text-align: center;
        font-size: 1.5vw;
    }

    & .NorthingInput {
        grid-column: 5/7;
        grid-row: 2/3;
        text-align: center;
        font-size: 1.5vw;
    }

    & .ConvertButton {
        grid-column: 3/6;
        grid-row: 4/5;
        font-size: 1.3vw;

        display: block;
        margin-left: auto;
        margin-right: auto;

        width: 17vw;
    }

    & .output {
        grid-row: 6/7;
        grid-column: 3/6;
        font-size: 1.3vw;
        text-align: center;
    }

    & .DecToDegButton {
        grid-row: 4/5;
        grid-column: 2/3;
    }

    & .ClearButton {
        grid-column: 6/7;
        grid-row: 4/5;
    }
`;

const OsgbArea = (props) => {
    // States
    const [isDecimal, setIsDecimal] = useState(true); // Decimal / Degree
    const [buttonPlaceHolder, setButtonPlaceHolder] = useState("(Degrees)"); // Decimal / Degree Text

    // Input field References
    const input1Ref = useRef(null);
    const input2Ref = useRef(null);
    const outputRef = useRef(null);

    // Converter
    const converter = new Converter();

    // Flips Decimal to Degree
    const latLongDecToDegHandler = () => {
        CheckDecimalToDegree();
        setIsDecimal(!isDecimal);

        return;
    };

    const CheckDecimalToDegree = () => {
        if (isDecimal) {
            setButtonPlaceHolder("(Decimal)");
            return;
        } else {
            setButtonPlaceHolder("(Degrees)");
            return;
        }
    };

    const ClearTextHandler = () => {
        input1Ref.current.value = "";
        input2Ref.current.value = "";
        outputRef.current.value = "";

        console.log("ClearTextHandler(): Text cleared");

        return;
    };

    const convertHandler = () => {
        let eastingInput = Number(input1Ref.current.value);
        let northingInput = Number(input2Ref.current.value);

        let result = null;

        if(input1Ref.current.value === "" || input2Ref.current.value === ""){
            alert("Please enter an Easting And A Northing Value!");
            return;
        }

        // Try conversion
        try {
            if (isDecimal) {
                result = converter.getLatLong_FromOSGB(eastingInput, northingInput);
                outputRef.current.value = `${result}`;
            } else {
                //result = converter.getLatLong_FromOSGB(eastingInput, northingInput);
                // Convert output to degrees
            }
        } catch (error) { // Catch if Easing or Northing is Invalid then Handle
            // TODO HANDLE - Dynamically color input text
            // If inputs are empty - alert
            console.error("ERROR: INVALID EASTING / NORTHING");
            alert("ERROR: INVALID EASTING / NORTHING");

            return;
        }

        // Log Debug
        // console.log(input1Ref.current.value);
        // console.log(input2Ref.current.value);
        // console.log(outputRef.current.value);
        //console.log("convertHandler(): Clicked");
    };

    return (
        <OSGBAreaStyled>
            <input
                ref={input1Ref}
                type="text"
                className="EastingInput"
                placeholder="Easting"
            />

            <input
                ref={input2Ref}
                type="text"
                className="NorthingInput"
                placeholder="Northing"
            />

            <button className="ConvertButton" onClick={convertHandler}>
                Convert
            </button>

            <button className="DecToDegButton" onClick={() => latLongDecToDegHandler()} >
                Switch to {buttonPlaceHolder}
            </button>

            <button className="ClearButton" onClick={() => ClearTextHandler()}>
                Clear All
            </button>

            <input
                ref={outputRef}
                type="text"
                className="output"
                placeholder="Your Latitude and Longitude"
            />
        </OSGBAreaStyled>
    );
};

export default OsgbArea;
