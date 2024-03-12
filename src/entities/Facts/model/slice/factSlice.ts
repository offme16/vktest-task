import { createSlice } from '@reduxjs/toolkit';
import { FactSchema } from '../type/FactShema';
import { FactService } from '../service/getFactAsyncThunk';

const initialState: FactSchema = {
    result: undefined,
    error: undefined,
    isLoading: false,
};

export const FactSlice = createSlice({
    name: 'fact',
    initialState,
    reducers: { },
    extraReducers: (builder) => {
        builder
            .addCase(FactService.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(FactService.fulfilled, (state, action) => {
                state.isLoading = false;
                state.result = action.payload;
            })
            .addCase(FactService.rejected, (state, action) => {
                state.isLoading = false;
                state.error = typeof action.payload === 'string' ? action.payload : 'Произошла ошибка';
            });
    },
});

export const { actions: FactActions } = FactSlice;
export const { reducer: FactReducer } = FactSlice;