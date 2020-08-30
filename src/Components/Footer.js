import React from "react";
import styled from "styled-components";

import colors from "../Common/colors";

const FooterStyleDiv = styled.div`
    grid-row: 15/16;
    grid-column: 1/13;
    box-shadow: 0px 0px 50px ${colors.darkBlue};
    background-color: ${colors.darkBlue};

    color: white;
`;

const Footer = () => {
    /* TODO: Finish Footer: - add github logo, style link and text */
    return (
        <FooterStyleDiv>
            <h1> Built By: Jordan McCann</h1>
            <a href="www.github.com/InfiniteShockz">Explore My Github</a>
        </FooterStyleDiv>
    );
};

export default Footer;
