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
    };

    const convertHandler = () => {

        let lat = Number(input1Ref.current.value);
        let lon = Number(input2Ref.current.value);

        let result = null;

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

        // Log Debug
        console.log(input1Ref.current.value);
        console.log(input2Ref.current.value);
        console.log(outputRef.current.value);

        console.log("convertHandler(): Clicked");
    };

    return (
        <LatLongAreaStyled>
            <input
                id="Lat"
                ref={input1Ref}
                type="text"
                className="LatInput"
                placeholder="Latitude N"
            />

            <input
                id="Long"
                ref={input2Ref}
                type="text"
                className="LongInput"
                placeholder="Longitude E"
            />

            <button
                type="submit"
                className="ConvertButton"
                onClick={convertHandler}
            >
                Convert
            </button>

            <button
                type="submit"
                className="DecToDegButton"
                onClick={() => latLongDecToDegHandler()}
            >
                Switch to {buttonPlaceHolder}
            </button>

            <button className="ClearButton" onClick={() => ClearTextHandler()}>
                Clear All
            </button>

            <input
                id="output"
                ref={outputRef}
                type="text"
                className="output"
                placeholder="Your OS Grid Reference"
            />
        </LatLongAreaStyled>
    );
};

export default LatLongArea;
