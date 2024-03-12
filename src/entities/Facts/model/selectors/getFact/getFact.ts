import { StateSchema } from "app/providers/storeProvider/config/stateShema";

export const getFact = (state: StateSchema) => state?.fact.result?.fact;