import { baseApi } from "@/connection/api";
import { endpoints_enum } from "@/enum/endpoints.enum";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { isAxiosError } from "axios";

export const getCurrentWeatherThunk = createAsyncThunk(
    "weather/getCurrentWeatherThunk",
    async (data: { units: string, country: string }, thunkAPI) => {
        try {
            const { country, units, } = data;
            const query = `q=${country}&units=${units}`;
            const response = await baseApi.get(`${endpoints_enum.weather}?${query}&appid=${import.meta.env.VITE_API_KEY}`);
            return response.data;
        } catch (error) {
            if (isAxiosError(error)) {
                return thunkAPI.rejectWithValue(error?.response?.data);
            }
        }
    }

)



export const getDailyWeatherThunk = createAsyncThunk(
    "weather/getDailyWeatherThunk",
    async (data: { units: string, country: string }, thunkAPI) => {
        try {
            const { country, units, } = data;
            const query = `q=${country}&units=${units}`;
            const response = await baseApi.get(`${endpoints_enum.daily}?${query}&appid=${import.meta.env.VITE_API_KEY}`);
            return response.data;
        } catch (error) {
            if (isAxiosError(error)) {
                return thunkAPI.rejectWithValue(error?.response?.data);
            }
        }
    }

)



export const getWeeklyWeatherThunk = createAsyncThunk(
    'weather/getWeeklyWeatherThunk',
    async (data: { units: string, country: string }, thunkAPI) => {
        try {
            const { country, units } = data;
            const query = `q=${country}&exclude=hourly,minutely&units=${units}`;
            const response = await baseApi.get(`${endpoints_enum.daily}?${query}&appid=${import.meta.env.VITE_API_KEY}`);
            const dailyForecasts = response.data.daily;
            if (dailyForecasts.length >= 3) {
                return response.data;
            }
        } catch (error) {
            if (isAxiosError(error)) {
                return thunkAPI.rejectWithValue(error?.response?.data);
            }
        }
    }
);