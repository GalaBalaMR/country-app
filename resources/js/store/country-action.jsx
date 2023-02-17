import { countryAction } from "./country-slice";

export const fetchCountries = (page) => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:8000/api/countries?page="+page);

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
                    // countries: fetchedData.countries.data || [],
                    continents: fetchedData.continents || []
                })
            );
        } catch (error) {
            console.log(error);
        }
    };
};
