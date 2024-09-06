import { configureStore } from "@reduxjs/toolkit";

import * as reducers from "./export.store";


export const makeStore = () => {
    return configureStore({
        reducer: reducers.rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
        devTools: true,
    });
};

export type RootState = ReturnType<typeof reducers.rootReducer>;
export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore["dispatch"];
