import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
return (
    <nav className="nav">
        <div className="center">
            <NavLink
        to="googlesheets"
        >
        Google Sheets
        </NavLink>
        <NavLink
        to="airtable"
        >
        AirTable
        </NavLink>
        </div>
        </nav>
);
};

export default Nav;