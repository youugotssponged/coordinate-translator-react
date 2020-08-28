import React from "react";
import styled from "styled-components";

import colors from '../Common/colors';
import fonts from '../Common/fonts';

const HeaderDiv = styled.div`
    display: grid;
    grid-column: 1/14;

    background-color: ${colors.darkBlue};
    color: white;

    width: 100vw;

    & h1 {
        grid-column: 2/5;
        font-family: ${fonts.titleFont};
        font-size: 5vw;
        font-weight: bold;
        text-align: center;
        padding-top: 10px;
    }

    & img {
        grid-column: 6/14;
        filter: invert(1);
    }
`;

const Header = () => {
    return (
        <HeaderDiv>
            <h1> Coordinate To OSGB Converter</h1>
            <img
                src="/img/os_grid_icon.png"
                alt="OS GRID logo from FunkyPenguin10's Flutter App"
            ></img>
        </HeaderDiv>
    );
};

export default Header;