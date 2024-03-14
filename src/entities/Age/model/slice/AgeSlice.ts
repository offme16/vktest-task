import { createSlice } from '@reduxjs/toolkit';
import { AgeService } from '../service/getNameAsyncThunk';
import { AgeSchema } from '../type/AgeShema';


const initialState: AgeSchema = {
    person: undefined,
    error: undefined,
    isLoading: false,
    name: undefined,
};

export const AgeSlice = createSlice({
    name: 'age',
    initialState,
    reducers: { 
        setName( state, action){
            state.name = action.payload.value;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(AgeService.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(AgeService.fulfilled, (state, action) => {
                state.isLoading = false;
                state.person = action.payload;
            })
            .addCase(AgeService.rejected, (state, action) => {
                state.isLoading = false;
                state.error = typeof action.payload === 'string' ? action.payload : 'Произошла ошибка';
            });
    },
});

export const { actions: AgeActions } = AgeSlice;
export const { reducer: AgeReducer } = AgeSlice;