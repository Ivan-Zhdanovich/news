import { configureStore } from "@reduxjs/toolkit";
import { spaceflightApi } from "./spaceflightnews/spaceflight.api";
import { setupListeners } from "@reduxjs/toolkit/query";
import { spaceflightReducer } from "./spaceflightnews/spaceflightnews.slice";

export const store = configureStore({
    reducer: {
        [spaceflightApi.reducerPath]: spaceflightApi.reducer,
        spaceflight: spaceflightReducer
    },
    middleware: getDefaultMidddleware => getDefaultMidddleware().concat(spaceflightApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
