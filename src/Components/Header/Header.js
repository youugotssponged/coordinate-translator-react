import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <div className="Header">
            <h1>Coordinate Translator</h1>
           
            <img className="Header logo"
                src="./img/os_grid_icon.png"
                alt="OS Grid Reference Logo - From Funkypenguin24's Flutter App"
            /> 
        </div>
    );
};

export default Header;
