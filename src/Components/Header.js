import React from "react";
import styled from "styled-components";

import colors from '../Common/colors';
import fonts from '../Common/fonts';

const HeaderDiv = styled.div`
    grid-column: 1/13;
    display: grid;
    grid-template-columns: 2fr repeat(10, 1fr) 2fr;
    background-color: ${colors.darkBlue};
    color: white;
    box-shadow: 0px 0px 50px ${colors.darkBlue};

    & h1 {
        grid-column: 2/11;
        font-family: ${fonts.titleFont};
        font-size: 4vw;
        font-weight: bold;
        text-align: center;
        padding-top: 15px;
        white-space: nowrap; 
        cursor: pointer;
    }

    & h1:hover{
        color: #878E88;
    }

    & img {
        grid-column: 11/12;
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
}

export default Header;