import { getAge, getNameValue } from "entities/Age";
import { AgeService } from "entities/Age/model/service/getNameAsyncThunk";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import cls from './Name.module.scss';
import { Button, Input } from "@vkontakte/vkui";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { AgeActions } from "entities/Age/model/slice/AgeSlice";
const Name = () => { 
    const name = useSelector(getNameValue)
    const age = useSelector(getAge)
    const dispatch = useAppDispatch();
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm({
        mode: "onBlur",
      });

    const handleField = useCallback((value: string) => {
        dispatch(AgeActions.setName({value}));
      }, [dispatch]);


    const getAgew = async (name: string) => {
        await dispatch(AgeService(name));
    }
    return (
        <div className={cls.GroupName}>
          <div className={cls.GroupName_box}>
          <Input
            {...register("Name", { required: true, pattern: /^[A-Za-z]+$/i })}
            className={cls.MainPage_factbox_input}
            type="text"
            placeholder="Напиши имя"
            onChange={(e) => handleField(e.target.value)}
/>
            <Button onClick={() => name && getAgew(name)} size={'l'}>click</Button>
          </div>
            <div>Возраст: {age}</div>
            <div className={cls.error}>
            {errors?.Name && <em>Заполните поле</em>}
            </div>
            </div>
    )
}
export default Name;