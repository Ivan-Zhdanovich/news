import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const LS_FAV_KEY = 'rfk'

interface SpaceFlightState {
    favourites: string[]
}

const initialState: SpaceFlightState = {
    favourites: JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? '[]')
}

export const spaceflightSlice = createSlice( {
    name: 'spaceflight',
    initialState,
    reducers: {
        addFavourite(state, action: PayloadAction<string>) {
            state.favourites.push(action.payload)
            localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites))
        },
        removeFavourite(state, action: PayloadAction<string>) {
            state.favourites = state.favourites.filter( fav => fav !== action.payload)
            localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites))
        }
    }
})

export const spaceflightActions = spaceflightSlice.actions
export const spaceflightReducer = spaceflightSlice.reducer