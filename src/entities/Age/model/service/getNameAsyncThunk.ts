import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { $nameapi } from 'shared/api/NameApi';

interface NameProps {
    name: string;
}

interface KnownError {
    message: string;
    description: string;
    code: number | undefined;
}

export const AgeService = createAsyncThunk(
    'get_facts',
    async (name: NameProps, thunkAPI) => {
        try {
            console.log(name);
        
            const response = await $nameapi.get(`${name}`);
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