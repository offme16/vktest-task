import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { $nameapi } from 'shared/api/NameApi';


interface KnownError {
    message: string;
    description: string;
    code: number | undefined;
}

export const AgeService = createAsyncThunk(
    'get_age',
    async (name: string, thunkAPI) => {
        try {
            const response = await $nameapi.get(`?name=${name}`);
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