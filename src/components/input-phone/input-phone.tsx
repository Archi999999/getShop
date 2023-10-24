import {InputMask} from "@react-input/mask";
import {RefObject, useContext} from "react";
import s from "./input-phone.module.scss";
import {BtnRefsContext} from "../../App.tsx";

export const InputPhone = () => {
    const btnRefs = useContext(BtnRefsContext)
    const inputPhoneRef = btnRefs?.inputPhone
    const handleInputFocus = () => {
        // const input = inputRef.current;
        // if (input) {
        //     input.setSelectionRange(3, 3);
        // }
    }

    return (
        <InputMask mask={'+7(___)___-__-__'} replacement={{_: /\d/}} showMask onFocus={handleInputFocus} ref={inputPhoneRef as RefObject<HTMLInputElement>}
                   className={s.telInput} id={'inputPhone'}/>
    )
}