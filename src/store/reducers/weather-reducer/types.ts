import { IWeatherForecast, IWeatherModel } from "@/models/weather.model";
import { RequestStateProperty } from "@/store/utils/reducerCreator";

export interface IWeatherReducerState {
    currentWeather: RequestStateProperty<IWeatherModel, string>
    daily: RequestStateProperty<IWeatherForecast, string>,
    until: string,

}