import React, { useRef, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Input, Button } from '@vkontakte/vkui';
import cls from './MainPage.module.scss';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { FactService } from 'entities/Facts/model/service/getFactAsyncThunk';
import { getFact } from 'entities/Facts';
import '@vkontakte/vkui/dist/vkui.css'
import { AgeActions } from 'entities/Age/model/slice/AgeSlice';
import { useForm } from 'react-hook-form';
import { getNameValue } from 'entities/Age';
import { AgeService } from 'entities/Age/model/service/getNameAsyncThunk';

const MainPage: React.FC = () => {
    const data = useSelector(getFact);
    const name = useSelector(getNameValue)
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

    const getFacts = async () => {
        await dispatch(FactService());
    }

    const getAge = async (name: string) => {
        await dispatch(AgeService({name}));
    }

    return (
        <div className={cls.MainPage}>
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
            
            <div className={cls.GroupName}>
            <Input
                className={cls.MainPage_factbox_input}
                type="text"
                placeholder="Напиши имя"
                onChange={(e) => handleField(e.target.value)}
            />
            <Button onClick={() => name && getAge(name)} size={'l'}>click</Button>

            </div>
        
        </div>
    );
}

export default MainPage;
