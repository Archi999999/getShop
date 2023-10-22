import {Button} from "../../button/button.tsx";
import {FC, RefObject} from "react";
import s from './panel-button.module.scss'

type Props = {
    inputRef: RefObject<HTMLInputElement>
    value: number | 'СТЕРЕТЬ'
    className?: string
}

export const PanelButton: FC<Props> = (
    {
        value,
        className,
        inputRef,
    }
) => {

    const onClickHandler = () => {
        if (inputRef.current) {
            const currentValue = inputRef.current.value;
            if (typeof (value) === "number") {
                inputRef.current.value = currentValue.replace("_", value.toString());
            } else {
                const lastDigitIndex = findLastDigitIndex(currentValue);
                if (lastDigitIndex > 1) {
                    inputRef.current.value = currentValue.slice(0, lastDigitIndex) + '_' + currentValue.slice(lastDigitIndex + 1);
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

    return (
        <Button onClick={onClickHandler} className={`${s.num} ${className}`}>
            {value}
        </Button>
    );
}
