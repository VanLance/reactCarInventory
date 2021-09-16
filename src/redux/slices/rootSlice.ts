import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        make: 'Honda',
        model: 'Civic',
        year: '2002',
        color: 'Silver'
    },
    reducers: {
        chooseMake: (state, action) => {state.make = action.payload},
        chooseModel: (state, action) => {state.model = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const { chooseMake, chooseModel, } = rootSlice.actions;