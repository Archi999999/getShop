import s from './panel.module.scss'
import {Button} from "../button/button.tsx";
import {Checkbox} from "../checkbox/checkbox.tsx";
export const Panel = () => {
    return (
        <div className={s.panel}>
            <h2>Введите ваш номер<br/>
                мобильного телефона</h2>
            <input type={'tel'} className={s.telInput}/>
            <p>и с Вами свяжется наш менеждер для дальнейшей консультации</p>
            <section className={s.buttons}>
                <div className={s.buttonsRow}>
                    <Button onClick={()=>{}} className={s.num}>1</Button>
                    <Button onClick={()=>{}} className={s.num}>2</Button>
                    <Button onClick={()=>{}} className={s.num}>3</Button>
                </div>
                <div className={s.buttonsRow}>
                    <Button onClick={()=>{}} className={s.num}>4</Button>
                    <Button onClick={()=>{}} className={s.num}>5</Button>
                    <Button onClick={()=>{}} className={s.num}>6</Button>
                </div>
                <div className={s.buttonsRow}>
                    <Button onClick={()=>{}} className={s.num}>7</Button>
                    <Button onClick={()=>{}} className={s.num}>8</Button>
                    <Button onClick={()=>{}} className={s.num}>9</Button>
                </div>
                <div className={s.buttonsRow}>
                    <Button onClick={()=>{}} className={s.buttonRemove}>СТЕРЕТЬ</Button>
                    <Button onClick={()=>{}} className={s.num}>0</Button>
                </div>
                <Checkbox/>
                <Button onClick={()=>{}} disabled className={s.confirmButton}>Подтвердить номер</Button>
            </section>
        </div>
    );
};
