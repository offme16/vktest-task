import Button from 'shared/UI/Button/Button';
import cls from './MainPage.module.scss'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { FactService } from 'entities/Facts/model/service/getFactAsyncThunk';
import { useSelector } from 'react-redux';
import { getFact } from 'entities/Facts';
const MainPage = () => {
    const data = useSelector(getFact)
    const dispatch = useAppDispatch();
    const getFacts = async () => {
        const response = await dispatch(FactService());
    }
    console.log(data);
    
    return (
        <div className={cls.MainPage}>
                <input type='text'></input>
                <Button onClick={getFacts}>click</Button>
        </div>
    )
}

export default MainPage;