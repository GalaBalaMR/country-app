import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Countries from "./Countries";

const CountryRoot = () => {
    return (
        <div>
            <h1>Country-app</h1>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default CountryRoot;
