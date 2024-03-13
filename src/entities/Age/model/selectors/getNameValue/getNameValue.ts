import { StateSchema } from "app/providers/storeProvider/config/stateShema";

export const getNameValue = (state: StateSchema) => state?.age.name;