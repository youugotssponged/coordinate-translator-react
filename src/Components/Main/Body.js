import React from "react";
import "./Body.css";

import InputArea from './InputArea/InputArea';

const Body = () => {
    return (
        <div className="mainBody">
            <button>Lat/Long to OSGB</button>
            <button>OSGB to Lat/Long</button>

            <InputArea />

        </div>
    );
};

export default Body;
