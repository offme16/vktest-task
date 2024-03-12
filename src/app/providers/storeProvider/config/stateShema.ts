import { FactSchema } from "entities/Facts";


export interface StateSchema {
     fact: FactSchema;
}

export type StateSchemaKey = keyof StateSchema;