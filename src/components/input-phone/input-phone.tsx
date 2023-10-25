import {InputMask} from "@react-input/mask";
import {ChangeEvent, FC, RefObject, useContext} from "react";
import s from "./input-phone.module.scss";
import {BtnRefsContext} from "../../App.tsx";

type Props = {
    phoneNumber: string
    setPhoneNumber: (value:string)=>void
}

export const InputPhone:FC<Props> = (
    {
        phoneNumber,
        setPhoneNumber
    }
) => {
    const btnRefs = useContext(BtnRefsContext)
    const inputPhoneRef = btnRefs?.inputPhone

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(e.currentTarget.value)
    }

    return (
        <InputMask mask={'+7(___)___-__-__'} replacement={{_: /\d/}} showMask value={phoneNumber} onChange={onChangeHandler} ref={inputPhoneRef as RefObject<HTMLInputElement>}
                   className={s.telInput} id={'inputPhone'}/>
    )
}