import s from './panel-with-form.module.scss'
import {FC, MouseEvent, useState} from 'react'
import {Checkbox} from "../../checkbox/checkbox.tsx";
import {InputPhone} from "../../input-phone/input-phone.tsx";
import {ButtonsRow} from "../buttons-row/buttons-row.tsx";
import {ButtonWithNavigate} from "../panel-button/button-with-navigate.tsx";
import {Panel} from "../panel.tsx";

type Props = {
    setIsSubmitted: (value:boolean)=>void
}

export const PanelWithForm:FC<Props> = ({setIsSubmitted}) => {
    const [isConfirm, setIsConfirm] = useState<boolean>(false)
    const [phoneNumber, setPhoneNumber] = useState('+7(___)___-__-__')
    const onSubmitHandler = (e:MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (phoneNumber[15] !== '_'  && isConfirm){
            console.log(`submit tel: ${phoneNumber} confirm: ${isConfirm}`)
            setIsSubmitted(true)
        }
    }

    return (
        <Panel>
            <h2>Введите ваш номер<br/>
                мобильного телефона</h2>
            <form className={s.form}>
                <InputPhone setPhoneNumber={setPhoneNumber} phoneNumber={phoneNumber}/>
                <p>и с Вами свяжется наш менеждер для дальнейшей консультации</p>
                <section className={s.nums}>
                    <ButtonsRow values={['1', '2', '3']} setPhoneNumber={setPhoneNumber}/>
                    <ButtonsRow values={['4', '5', '6']} setPhoneNumber={setPhoneNumber}/>
                    <ButtonsRow values={['7', '8', '9']} setPhoneNumber={setPhoneNumber}/>
                    <ButtonsRow values={['СТЕРЕТЬ', '0']} setPhoneNumber={setPhoneNumber}/>
                </section>
                <Checkbox id={'ch1'} label={`Согласие на обработку персональных данных`} isChecked={isConfirm} setIsChecked={setIsConfirm}/>
                <ButtonWithNavigate type={'submit'} onClick={(e)=>onSubmitHandler(e)} className={s.confirmButton}
                                    value={'confirm'}>Подтвердить номер</ButtonWithNavigate>
            </form>
        </Panel>
    );
};
