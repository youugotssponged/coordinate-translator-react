// Libs
import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

// CSS
import "./Components/reset.css";
import "./Components/globals.css";

// Components
import Header from "./Components/Header";

// 12 column grid for the page - wrapping grid
const PageGridContainerDiv = styled.div`
    display: grid;
    grid-template-columns: 2fr repeat(10, 1fr) 2fr;
    grid-template-rows: repeat(9, 1fr);
`;


const App = () => {
    return (
        <>
            <Helmet>
                {/* ABeeZee font - google fonts */}
                <link
                    href="https://fonts.googleapis.com/css2?family=ABeeZee:ital@1&display=swap"
                    rel="stylesheet"
                />
            </Helmet>
            <PageGridContainerDiv>
                <Header />
            </PageGridContainerDiv>
        </>
    );
};

export default App;
