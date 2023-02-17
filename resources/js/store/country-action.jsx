import { countryAction } from "./country-slice";

export const fetchCountries = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:8000/api/countries");

            if (!response.ok) {
                throw new Error("Nemôžem zobraziť produkty!..");
            }

            const data = await response.json();

            return data;
        };
        try {
            const fetchedData = await fetchData();

            dispatch(
                countryAction.addCountry({
                    countries: fetchedData.countries || [],
                    continents: fetchedData.continents || []
                })
            );
        } catch (error) {
            console.log(error);
        }
    };
};
