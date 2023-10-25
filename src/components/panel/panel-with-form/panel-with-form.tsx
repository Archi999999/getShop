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
    const [isValidPhone, setIsValidPhone] = useState(true)
    const [disabledBtn, setDisabledBtn] = useState(true)

    const onSubmitHandler = (e:MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (phoneNumber[15] !== '_'  && isConfirm){
            const unmaskedValue = phoneNumber.replace(/[^0-9]+/g, '').substring(1)
            const param = {
                'url': 'https://phonevalidation.abstractapi.com/v1/',
                'api_key': import.meta.env.VITE_API_KEY,
                'phone' : unmaskedValue,
            };

            (async () => {
                try {
                    const res = await fetch(`${param.url}?api_key=${param.api_key}&phone=${param.phone}&country=RU`);
                    const data: ResponseType = await res.json();
                    if (data.valid) {
                        console.log(`submit tel: ${unmaskedValue} confirm: ${isConfirm}`);
                        setIsSubmitted(true);
                    } else {
                        setIsValidPhone(false);
                    }
                } catch (e) {
                    console.log(e);
                }
            })()
        }
    }

    const handlePhoneNumberChange = (newPhoneNumber: string) => {
        if (isConfirm &&  newPhoneNumber[15] !== '_') {
            setDisabledBtn(false)
        }
        if (!isConfirm ||  newPhoneNumber[15] === '_') {
            setDisabledBtn(true)
        }
        setPhoneNumber(newPhoneNumber)
        setIsValidPhone(true)
    }

    const isCheckedHandler = (e:boolean) => {
        setIsConfirm(e)
        if (!e ||  phoneNumber[15] === '_') {
            setDisabledBtn(true)
        }
        if (e &&  phoneNumber[15] !== '_') {
            setDisabledBtn(false)
        }
    }

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
                                    value={'confirm'} disabled={disabledBtn }>Подтвердить номер</ButtonWithNavigate>
            </form>
        </Panel>
    );
};



//types

type ResponseType = {
    valid: boolean
    number: string
    local_format: string
    international_format: string
    country_prefix: string
    country_code: string
    country_name: string
    location: string
    carrier: string
    line_type: string | null
}