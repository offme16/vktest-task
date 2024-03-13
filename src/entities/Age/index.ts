import { AgeReducer } from './model/slice/AgeSlice';
import { AgeSchema } from './model/type/AgeShema';
import { getAge } from './model/selectors/getAge/getAge';
import { getNameValue } from './model/selectors/getNameValue/getNameValue';
export { type AgeSchema , AgeReducer, getAge, getNameValue };