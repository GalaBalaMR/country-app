import React from "react";
import { Link, useLocation } from "react-router-dom";

const CountryDetail = () => {
    const location = useLocation();
    const country = location.state;
    return (
        <div>
            <div>
                <p>Name: {country.name}</p>
                <p>Full name: {country.full_name}</p>
                <p>Continent: {country.continent.name}</p>
            </div>

            <Link to=".." relative="path" className="ms-0">
                Späť
            </Link>
        </div>
    );
};

export default CountryDetail;
