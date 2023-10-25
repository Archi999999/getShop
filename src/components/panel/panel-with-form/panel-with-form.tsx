import s from './panel-with-form.module.scss'
import {FC, MouseEvent, useEffect, useState} from 'react'
import {Checkbox} from "../../checkbox/checkbox.tsx";
import {InputPhone} from "../../input-phone/input-phone.tsx";
import {ButtonsRow} from "../buttons-row/buttons-row.tsx";
import {ButtonWithNavigate} from "../panel-button/button-with-navigate.tsx";
import {Panel} from "../panel.tsx";
import {phoneValidate} from "../../../api.ts";

type Props = {
    setIsForm: (value:boolean)=>void
    setIsSubmitted: (value:boolean)=>void
}

export const PanelWithForm:FC<Props> = ({setIsForm, setIsSubmitted}) => {
    const [isConfirm, setIsConfirm] = useState<boolean>(false)
    const [phoneNumber, setPhoneNumber] = useState('+7(___)___-__-__')
    const [isValidPhone, setIsValidPhone] = useState(true)
    const [disabledBtn, setDisabledBtn] = useState(true)

    useEffect(() => {
        let timeoutId: NodeJS.Timeout
        const resetTimeout = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                setIsForm(false);
            }, 10000);
        };

        const onUserActivity = () => {
            resetTimeout();
        };

        resetTimeout();

        window.addEventListener('mousemove', onUserActivity);
        window.addEventListener('keydown', onUserActivity);

        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener('mousemove', onUserActivity);
            window.removeEventListener('keydown', onUserActivity);
        };
    }, []);

    const onSubmitHandler = async (e:MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (phoneNumber[15] !== '_'  && isConfirm){
            const unmaskedValue = phoneNumber.replace(/[^0-9]+/g, '').substring(1)
            const data = await phoneValidate(unmaskedValue)
            if (data.valid) {
                console.log(`submit tel: ${unmaskedValue}`);
                setIsSubmitted(true);
            } else {
                setIsValidPhone(false);
            }
        }
    }

    const handlePhoneNumberChange = (newPhoneNumber: string) => {
        const isValidPhone = newPhoneNumber[15] !== '_';
        setDisabledBtn(!(isConfirm && isValidPhone));
        setPhoneNumber(newPhoneNumber);
        setIsValidPhone(true);
    };

    const isCheckedHandler = (isConfirm: boolean) => {
        setIsConfirm(isConfirm);
        setDisabledBtn(!isConfirm || phoneNumber[15] === '_');
    };

    return (
        <Panel>
            <h2>Введите ваш номер<br/>
                мобильного телефона</h2>
            <form className={s.form}>
                <InputPhone setPhoneNumber={handlePhoneNumberChange} phoneNumber={phoneNumber} className={isValidPhone? '' : s.errorInput}/>
                <p>и с Вами свяжется наш менеждер для дальнейшей консультации</p>
                <section className={s.nums}>
                    <ButtonsRow values={['1', '2', '3']} setPhoneNumber={handlePhoneNumberChange}/>
                    <ButtonsRow values={['4', '5', '6']} setPhoneNumber={handlePhoneNumberChange}/>
                    <ButtonsRow values={['7', '8', '9']} setPhoneNumber={handlePhoneNumberChange}/>
                    <ButtonsRow values={['СТЕРЕТЬ', '0']} setPhoneNumber={handlePhoneNumberChange}/>
                </section>
                {
                    isValidPhone
                    ? <Checkbox id={'ch1'} label={`Согласие на обработку персональных данных`} isChecked={isConfirm} setIsChecked={isCheckedHandler}/>
                    : <div className={s.errorWindow}>НЕВЕРНО ВВЕДЁН НОМЕР</div>
                }
                <ButtonWithNavigate type={'submit'} onClick={(e)=>onSubmitHandler(e)} className={s.confirmButton}
                                    value={'confirm'} disabled={disabledBtn}>Подтвердить номер</ButtonWithNavigate>
            </form>
        </Panel>
    );
};
