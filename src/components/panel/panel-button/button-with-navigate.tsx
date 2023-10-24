import {ComponentPropsWithRef, FC, KeyboardEvent, ReactNode, useContext} from "react";
import s from './panel-button.module.scss'
import {Button} from "../../button/button.tsx";
import {BtnRefsContext} from "../../../App.tsx";
import {btnPaths, KeysBtnRefs} from "../../../navigation-utils/navigation-utils.ts";

type Props = {
    children?: ReactNode
    value: KeysBtnRefs
    className?: string
    setPhoneNumber?:(value:string)=>void
} & ComponentPropsWithRef<'button'>

export const ButtonWithNavigate: FC<Props> = (
    {
        children,
        value,
        className,
        setPhoneNumber,
        ...rest
    }
) => {
    const btnRefs = useContext(BtnRefsContext)
    const inputPhone = btnRefs?.inputPhone
    // @ts-ignore
    const btnRef = btnRefs && btnRefs[value]

    const onClickHandler = () => {
        if (inputPhone?.current) {
            const currentValue = inputPhone.current.value
            const digitValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
            if (digitValues.includes(value)) {
                // inputPhone.current.value = currentValue.replace("_", value);
                setPhoneNumber && setPhoneNumber(currentValue.replace("_", value))
            } else if (value === 'СТЕРЕТЬ') {
                const lastDigitIndex = findLastDigitIndex(currentValue);
                if (lastDigitIndex > 1) {
                    // inputPhone.current.value = currentValue.slice(0, lastDigitIndex) + '_' + currentValue.slice(lastDigitIndex + 1)
                    setPhoneNumber && setPhoneNumber(currentValue.slice(0, lastDigitIndex) + '_' + currentValue.slice(lastDigitIndex + 1))
                }
            }
        }
    }

    const findLastDigitIndex = (str: string): number => {
        let lastDigitIndex = -1;
        for (let i = str.length - 1; i >= 0; i--) {
            const char = str[i];
            if (/[0-9]/.test(char)) {
                lastDigitIndex = i;
                break;
            }
        }
        return lastDigitIndex
    }

    const navigateHandler = (e: KeyboardEvent<HTMLButtonElement | HTMLInputElement>) => {
        const paths = btnPaths[value]
        switch (e.key) {
            case 'ArrowUp': {
                btnRefs && btnRefs[paths.up].current?.focus()
                break;
            }
            case 'ArrowRight': {
                btnRefs && btnRefs[paths.right].current?.focus()
                break;
            }
            case 'ArrowDown': {
                btnRefs && btnRefs[paths.down].current?.focus()
                break;
            }
            case 'ArrowLeft': {
                btnRefs && btnRefs[paths.left].current?.focus()
                break;
            }
        }
    }

    return (
        <Button type={'button'} onClick={onClickHandler} className={`${s.num} ${className}`} onKeyDown={e=>navigateHandler(e)}
                ref={btnRef} {...rest}>
            {children || value}
        </Button>
    );
}
