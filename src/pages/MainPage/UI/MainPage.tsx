import cls from './MainPage.module.scss';
import '@vkontakte/vkui/dist/vkui.css'
import { Facts } from 'widgets/Facts';
import { Name } from 'widgets/Name';
const MainPage: React.FC = () => {

    return (
        <div className={cls.MainPage}>      
            <Facts />
            <Name />
        </div>
    );
}

export default MainPage;
