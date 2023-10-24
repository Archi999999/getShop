import s from './panel.module.scss'
import {Checkbox} from "../checkbox/checkbox.tsx";
import {InputPhone} from "../input-phone/input-phone.tsx";
import {ButtonsRow} from "./buttons-row/buttons-row.tsx";
import {ButtonWithNavigate} from "./panel-button/button-with-navigate.tsx";

export const Panel = () => {
    return (
        <div className={s.panel}>
            <h2>Введите ваш номер<br/>
                мобильного телефона</h2>
            <InputPhone />
            <p>и с Вами свяжется наш менеждер для дальнейшей консультации</p>
            <section className={s.nums}>
                    <ButtonsRow values={['1','2','3']} />
                    <ButtonsRow values={['4','5','6']} />
                    <ButtonsRow values={['7','8','9']} />
                    <ButtonsRow values={['СТЕРЕТЬ','0']} />
            </section>
                <Checkbox id={'ch1'} label={`Согласие на обработку персональных данных`}/>
                <ButtonWithNavigate onClick={()=>{}} className={s.confirmButton}
                         value={'confirm'}>Подтвердить номер</ButtonWithNavigate>
        </div>
    );
};
