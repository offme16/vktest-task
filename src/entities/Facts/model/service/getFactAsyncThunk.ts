import { createAsyncThunk } from '@reduxjs/toolkit';
import { $factapi } from 'shared/api/FactApi';
import { AxiosError } from 'axios';

interface KnownError {
    message: string;
    description: string;
    code: number | undefined;
}

export const FactService = createAsyncThunk(
    'get_facts',
    async (_, thunkAPI) => {
        try {
            const response = await $factapi.get("");
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (e) {
            const error: AxiosError<KnownError> = e as any;
            console.log(error.message);
            return thunkAPI.rejectWithValue('Произошла ошибка');
        }
    },
);