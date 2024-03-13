import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from './stateShema';
import { FactReducer } from 'entities/Facts';
import { AgeReducer } from 'entities/Age/model/slice/AgeSlice';

export function createRootStore(initialState?: StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
         fact: FactReducer,
         age: AgeReducer,
    };

    return configureStore<StateSchema>({
        reducer: rootReducer,
        preloadedState: initialState,
    });
}

export type AppDispatch = ReturnType<typeof createRootStore>['dispatch']