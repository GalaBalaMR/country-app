import { configureStore } from "@reduxjs/toolkit";
import countryReducer from "./country-slice";

const store = configureStore({
    reducer: {country: countryReducer},
    // solve problem with non serializable value
    // middleware: getDefaultMiddleware =>
    // getDefaultMiddleware({
    //   serializableCheck: false,
    // }),
})

export default store;
