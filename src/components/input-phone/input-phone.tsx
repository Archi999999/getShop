// import {createRef, FC, RefObject, useRef} from 'react';
// import InputMask, {ReactInputMask} from 'react-input-mask';
// import s from "./input-phone.module.scss";
//
// type Props = {
//     inputRef: RefObject<HTMLInputElement>
// }
//
// export const InputPhone: FC<Props> = (
//     {
//         // inputRef
//     }
// ) => {
//     const phoneMask = '+7 (999) 999-99-99';
//     const inputRef = createRef<HTMLInputElement>()
//
//     const ref = useRef<ReactInputMask>(null)
//     const handleInputFocus = () => {
//         const input = inputRef.current;
//         if (input) {
//             input.setSelectionRange(4, 4);
//         }
//     };
//
//     return (
//         <div className={s.inputContainer}>
//             <InputMask
//                 mask={phoneMask}
//                 id="phone"
//                 type="tel"
//                 className={s.telInput}
//                 inputRef={inputRef}
//                 ref={ref}
//                 onFocus={handleInputFocus}
//                 alwaysShowMask={true}
//             />
//         </div>
//     );
// };

import {InputMask} from "@react-input/mask";
import {FC, RefObject} from "react";
import s from "./input-phone.module.scss";

type Props = {
    inputRef: RefObject<HTMLInputElement>
}

export const InputPhone:FC<Props> = (
    {
        inputRef
    }
) => {
    // const inputRef = useRef<HTMLInputElement>(null)

    const handleInputFocus = () => {
        const input = inputRef.current;
        if (input) {
            input.setSelectionRange(3, 3);
        }
    }

    return (
        <InputMask mask={'+7(___)___-__-__'} replacement={{_: /\d/}} showMask onFocus={handleInputFocus} ref={inputRef}
                   className={s.telInput} id={'inputPhone'}/>
    )
}