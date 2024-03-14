import { getFact } from './model/selectors/getFact/getFact';
import { FactReducer } from './model/slice/factSlice';
import { FactSchema } from './model/type/FactShema';
import { FactService } from './model/service/getFactAsyncThunk';
export { type FactSchema , FactReducer , getFact, FactService };