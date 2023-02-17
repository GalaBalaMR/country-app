import { createSlice } from "@reduxjs/toolkit";

const initialState = { countries: [], continents: [] };
const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    addCountry(state, action){
        state.countries = action.payload.countries;
        state.continents = action.payload.continents;
    },
  },
});


export const countryAction = countrySlice.actions;

export default countrySlice.reducer;
