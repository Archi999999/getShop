import s from './panel.module.scss'
import {Button} from "./button/button.tsx";
import {Checkbox} from "../checkbox/checkbox.tsx";
import {InputPhone} from "../input-phone/input-phone.tsx";
import {PanelButton} from "../panel-button/panel-button.tsx";
import {useRef} from "react";
import {ButtonsRow} from "./buttons-row/buttons-row.tsx";
export const Panel = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <div className={s.panel}>
            <h2>Введите ваш номер<br/>
                мобильного телефона</h2>
            <InputPhone inputRef={inputRef}/>
            <p>и с Вами свяжется наш менеждер для дальнейшей консультации</p>
            <section className={s.buttons}>
                    <ButtonsRow inputRef={inputRef} values={[1,2,3]}/>
                    <ButtonsRow inputRef={inputRef} values={[4,5,6]}/>
                    <ButtonsRow inputRef={inputRef} values={[7,8,9]}/>
                <div className={s.buttonsRow}>
                    <Button onClick={()=>{}} className={s.buttonRemove}>СТЕРЕТЬ</Button>
                    <PanelButton value={0} inputRef={inputRef}/>
                </div>
                <Checkbox id={'ch1'} label={`Согласие на обработку
                персональных данных`}/>
                <Button onClick={()=>{}} disabled className={s.confirmButton}>Подтвердить номер</Button>
            </section>
        </div>
    );
};
