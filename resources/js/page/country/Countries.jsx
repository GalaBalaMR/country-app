import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ContinentSelect from "../../components/country/ContinentSelect";

import classes from "./Countries.module.css";

const Countries = () => {
    const [countriesState, setCountriesState] = useState([]);
    const [countriesStateFiltered, setCountriesStateFiltered] = useState([]);
    const [maxPage, setMaxPage] = useState(0);
    const [actualPage, setActualPage] = useState(0);
    // let countries = useSelector((state) => state.country.countries);
    let countries = [];

    const [page, setPage] = useState(1);

    const onClickNextPage = () => {
        if (page === maxPage) {
            return;
        } else {
            setPage(page + 1);
        }
    };

    const onClickPreviousPage = () => {
        if (page === 1) {
            return;
        } else {
            setPage(page - 1);
        }
    };

    const fetchFunction = async (page) => {
        const fetchData = async (page) => {
            const response = await fetch(
                "http://localhost:8000/api/countries?page=" + page
            );

            if (!response.ok) {
                throw new Error("Nemôžem zobraziť produkty!..");
            }

            const data = await response.json();

            return data;
        };
        try {
            const fetchedData = await fetchData(page);
            setCountriesState(fetchedData.countries.data);
            setCountriesStateFiltered(fetchedData.countries.data);
            setMaxPage(fetchedData.countries.last_page);
            setActualPage(fetchedData.countries.current_page);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchFunction(page);
    }, [page]);

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
        const searched = countriesState
            .slice()
            .filter((country) => country.name.toLowerCase().includes(ev));
        setCountriesStateFiltered(searched);
    };

    const continentFilter = (continent) => {
        const filteredCountries = countriesState.slice().filter((country) => {
            if (continent === "all") {
                return countriesState;
            }
            return country.continent.code === continent;
        });
        setCountriesStateFiltered(filteredCountries);
    };

    const countriesTr = countriesStateFiltered.map((country) => {
        return (
            <tr key={country.country_id}>
                <th scope="row">{country.country_id}</th>
                <td>
                    <Link
                        to={"/countries/" + country.country_id}
                        state={country}
                    >
                        {country.name}
                    </Link>
                </td>
                <td>{country.full_name}</td>
                <td>{country.iso3}</td>
                <td>{country.continent.name}</td>
            </tr>
        );
    });

    // const onClickNextPage = () => {};

    return (
        <div className={classes}>
            <div className="d-flex justify-content-around align-items-center my-5">
                <button className="btn btn-warning h-50" onClick={sortAZ}>
                    Sort A-Z
                </button>
                <div className="d-flex flex-column">
                    <input
                        className="form-control"
                        id="search"
                        type="text"
                        onChange={onChangeSearch}
                    />
                    <label
                        className="mb-2 text-secondary-emphasis"
                        htmlFor="search"
                    >
                        Search
                    </label>
                    <ContinentSelect
                        countries={countriesState}
                        onFilterContinents={continentFilter}
                    />
                    <label className="text-secondary-emphasis">
                        Filter base on Continents
                    </label>
                </div>
                <button className="btn btn-warning h-50" onClick={sortZA}>
                    Sort Z-A
                </button>
            </div>
            <div className="d-flex justify-content-between">
                <button
                    className="btn btn-warning rounded-pill w-50"
                    onClick={onClickNextPage}
                    disabled={page === maxPage ? true : false}
                >
                    Next
                </button>
                <div className="w-75">
                    Page total: <span>{maxPage}</span> Current Page:{" "}
                    <span>{actualPage}</span>
                </div>
                <button
                    className="btn btn-warning rounded-pill w-50"
                    onClick={onClickPreviousPage}
                    disabled={page === 1 ? true : false}
                >
                    Previous
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
