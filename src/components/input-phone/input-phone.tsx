import React, { useRef } from 'react';
import InputMask from 'react-input-mask';
import s from "./input-phone.module.scss";

export const InputPhone: React.FC = () => {
    const phoneMask = '+7 (999) 999-99-99';
    const inputRef = useRef<HTMLInputElement>(null);

    const handleInputFocus = () => {
        const input = inputRef.current;
        if (input) {
            input.setSelectionRange(4, 4);
        }
    };

    return (
        <div className={s.inputContainer}>
            <InputMask
                mask={phoneMask}
                id="phone"
                type="tel"
                className={s.telInput}
                inputRef={inputRef}
                onFocus={handleInputFocus}
                alwaysShowMask={true}
            />
        </div>
    );
};