import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import ContinentSelect from "../../components/country/ContinentSelect";

const Countries = () => {
    const countries = useSelector((state) => state.country.countries);
    const [countriesState, setCountriesState] = useState([]);

    useEffect(() => {
        setCountriesState(countries);
    }, []);

    const sortAZ = () => {
        const sorted = countriesState
            .slice()
            .sort((a, b) => a.name.localeCompare(b.name));
        setCountriesState(sorted);
    };

    const sortZA = () => {
        const sorted = countriesState
            .slice()
            .sort((a, b) => b.name.localeCompare(a.name));
        setCountriesState(sorted);
    };

    const onChangeSearch = (event) => {
        const ev = event.target.value.toLowerCase();
        const searched = countries
            .slice()
            .filter((country) => country.name.toLowerCase().includes(ev));
        setCountriesState(searched);
    };

    const continentFilter = (continent) => {
        const filteredCountries = countries.slice().filter((country) => country.continent.code === continent);
        setCountriesState(filteredCountries);
    }

    const countriesTr = countriesState.map((country) => {
        return (
            <tr key={country.country_id}>
                <th scope="row">{country.country_id}</th>
                <td><Link to={'/countries/' + country.country_id} state={country}>{country.name}</Link></td>
                <td>{country.full_name}</td>
                <td>{country.iso3}</td>
                <td>{country.continent.name}</td>
            </tr>
        );
    });

    return (
        <div>
            <div className="d-flex justify-content-around align-items-center my-5">
                <button className="btn btn-warning h-50" onClick={sortAZ}>
                    Sort A-Z
                </button>
                <div className="d-flex flex-column">
                    <input className="form-control" id="search" type="text" onChange={onChangeSearch} />
                    <label className="mb-2 text-secondary-emphasis" htmlFor="search">Search</label>
                    <ContinentSelect countries={countriesState} onFilterContinents={continentFilter}/>
                    <label className="text-secondary-emphasis">Filter base on Continents</label>
                </div>
                <button className="btn btn-warning h-50" onClick={sortZA}>
                    Sort Z-A
                </button>
            </div>
            <table className="table table-hover text-start">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Iso3</th>
                        <th scope="col">Continent</th>
                    </tr>
                </thead>
                <tbody>{countriesTr}</tbody>
            </table>
        </div>
    );
};

export default Countries;
