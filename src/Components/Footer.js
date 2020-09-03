import React from "react";
import styled from "styled-components";

import colors from "../Common/colors";
import fonts from "../Common/fonts";

const FooterStyleDiv = styled.div`
    display: grid;
    grid-row: 15/16;
    grid-column: 1/13;
    box-shadow: 0px 0px 50px ${colors.darkBlue};
    background-color: ${colors.darkBlue};

    color: white;
    grid-template-columns: 2fr 2fr 2fr;
 
    & h1 {
        font-family: ${fonts.footerFont};
        font-size: 1.5vw;
        margin: 0 auto;
    }

    & img {
        padding-top: 15px;
        display: block;
        margin: 0 auto;
    }

    & img:hover {
        filter: invert(70%);
    }
`;

const Footer = () => {
    return (
        <FooterStyleDiv>
            <a href="https://www.twitch.tv/youugotssponged/">
                <img
                    src="./img/twitch-tv-2-64.png"
                    alt="Link to my Twitch"
                />
            </a>
            <a href="https://www.github.com/youugotssponged/">
                <img
                    src="./img/GitHub-Mark-Light-64px.png"
                    alt="Link to my github"
                />
            </a>
            <a href="https://www.linkedin.com/in/jordan-mccann-b808b4156/">
                <img src="./img/linkedin-64.png" alt="Link to my LinkedIn" />
            </a>
            <h1>youugotssponged</h1>
            <h1>youugotssponged</h1>
            <h1>Jordan McCann</h1>
        </FooterStyleDiv>
    );
};

export default Footer;
