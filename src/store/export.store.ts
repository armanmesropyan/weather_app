import { combineReducers } from "@reduxjs/toolkit";

import weatherSlice from "./reducers/weather-reducer/weather.slice";
export const rootReducer = combineReducers({
    weatherSlice
})