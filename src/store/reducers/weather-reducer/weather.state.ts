
import { makeRequestStateProperty } from "@/store/utils/reducerCreator";
import { IWeatherReducerState } from "./types";
import { IWeatherForecast, IWeatherModel } from "@/models/weather.model";



export const initialWeatherState: IWeatherReducerState = {
    currentWeather: makeRequestStateProperty<IWeatherModel, string>(),
    daily: makeRequestStateProperty<IWeatherForecast, string>(),
    until: ''
};
