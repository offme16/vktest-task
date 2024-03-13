import { StateSchema } from "app/providers/storeProvider/config/stateShema";

export const getAge = (state: StateSchema) => state?.age.result;