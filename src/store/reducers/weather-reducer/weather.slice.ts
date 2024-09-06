import { createSlice } from "@reduxjs/toolkit";
import { initialWeatherState } from "./weather.state";
import { makeRequestExtraReducer, RequestList } from "@/store/utils/reducerCreator";
import { IWeatherReducerState } from "./types";
import { getCurrentWeatherThunk, getDailyWeatherThunk } from "./weather.thunk";


const WEATHER_SLICE = "weather_slice"
const weatherSlice = createSlice({
    name: WEATHER_SLICE,
    initialState: initialWeatherState,
    reducers: {
        setUntil(state, action) {
            state.until = action.payload;
        }
    },
    extraReducers: (builder) => {
        makeRequestExtraReducer<RequestList<IWeatherReducerState>>(
            builder,
            getCurrentWeatherThunk,
            "currentWeather"
        );
        makeRequestExtraReducer<RequestList<IWeatherReducerState>>(
            builder,
            getDailyWeatherThunk,
            "daily"
        );


    },
});

export const { setUntil } = weatherSlice.actions;
export default weatherSlice.reducer;
