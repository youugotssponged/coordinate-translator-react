import React, { useState, useRef } from "react";
import styled from "styled-components";
import Converter from "../latlong_to_osgrid/coord_converter";

import colors from "../Common/colors";
import fonts from "../Common/fonts";

const LatLongAreaStyled = styled.div`
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

    & .LatInput {
        grid-column: 2/4;
        grid-row: 2/3;
        text-align: center;
        font-size: 1.5vw;
    }
    & .LongInput {
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

const LatLongArea = (props) => {
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

    // Clears inputs and the output
    const ClearTextHandler = () => {
        input1Ref.current.value = "";
        input2Ref.current.value = "";
        outputRef.current.value = "";

        console.log("ClearTextHandler(): Text cleared");

        return;
    };

    const convertHandler = () => {
        let lat = Number(input1Ref.current.value);
        let lon = Number(input2Ref.current.value);

        let result = null;

        // If inputs are empty - alert
        if(input1Ref.current.value === "" || input2Ref.current.value === ""){
            alert("Please enter an Latitude And a Longitude Value!");
            return;
        }

        // Try conversion
        try {
            if (isDecimal) {
                result = converter.getOSGB_FromDec(lat, lon);
                outputRef.current.value = `${Math.ceil(
                    result.easting
                )}, ${Math.ceil(result.northing)}`;
            } else {
                // Degree
                // Get Degree from Decimal
                const [latdeg, latmin, latsec] = converter.getDegreeFromDecimal(
                    lat
                );
                const [londeg, lonmin, lonsec] = converter.getDegreeFromDecimal(
                    lon
                );

                console.table(latdeg, latmin, latsec, londeg, lonmin, lonsec);

                result = converter.getOSGB_FromDMS(
                    latdeg,
                    latmin,
                    latsec,
                    londeg,
                    lonmin,
                    lonsec
                );

                outputRef.current.value = `${Math.ceil(
                    result.easting
                )}, ${Math.ceil(result.northing)}`;
            }
        } catch (error) { // Catch if Easing or Northing is Invalid then Handle
            // TODO HANDLE - Dynamically color input text

            console.error("ERROR: INVALID Latitude / Longitude");
            alert("ERROR: INVALID Latitude / Longitude");

            return;
        }

        // Log Debug
        // console.log(input1Ref.current.value);
        // console.log(input2Ref.current.value);
        // console.log(outputRef.current.value);
        //console.log("convertHandler(): Clicked");
    };

    return (
        <LatLongAreaStyled>
            <input
                ref={input1Ref}
                type="text"
                className="LatInput"
                placeholder="Latitude N"
            />

            <input
                ref={input2Ref}
                type="text"
                className="LongInput"
                placeholder="Longitude E"
            />

            <button
                className="ConvertButton"
                onClick={convertHandler}
            >
                Convert
            </button>

            <button
                className="DecToDegButton"
                onClick={() => latLongDecToDegHandler()}
            >
                Switch to {buttonPlaceHolder}
            </button>

            <button className="ClearButton" onClick={() => ClearTextHandler()}>
                Clear All
            </button>

            <input
                ref={outputRef}
                type="text"
                className="output"
                placeholder="Your OS Grid Reference"
            />
        </LatLongAreaStyled>
    );
};

export default LatLongArea;
