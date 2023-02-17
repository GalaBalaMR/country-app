import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className={"d-flex justify-content-start align-items-center mt-3  " + classes}>
            <h4 className="">Country-app</h4>
            <nav className="ms-4 text-decoration-none">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? classes.active : ""
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="countries"
                    className={({ isActive }) =>
                        isActive ? classes.active : ""
                    }
                >
                    Countries
                </NavLink>
            </nav>
        </div>
    );
};

export default Header;
