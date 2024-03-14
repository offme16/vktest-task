import { Button, Input } from "@vkontakte/vkui";
import { FactService, getFact } from "entities/Facts";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import cls from './Facts.module.scss';
const Facts = () => {
    const dispatch = useAppDispatch();
    const data = useSelector(getFact);
    const getFacts = async () => {
        await dispatch(FactService());
    }
    return (
    <div className={cls.GroupFact}>
        <Input
        className={cls.MainPage_factbox_input}
        type="text"
        value={data || ''}
        placeholder="Нажми на кнопку, чтобы получить интересный факт"
        readOnly
        />
        <Button onClick={getFacts} size={'l'}>click</Button>
    </div>
)}
export default Facts;