import { AgeSchema } from "entities/Age/model/type/AgeShema";
import { FactSchema } from "entities/Facts";


export interface StateSchema {
     fact: FactSchema;
     age: AgeSchema;
}

export type StateSchemaKey = keyof StateSchema;