import {Button} from "../panel/button/button.tsx";
import {FC, RefObject} from "react";
import s from './panel-button.module.scss'

type Props = {
    inputRef: RefObject<HTMLInputElement>
    value: number | string
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
            inputRef.current.value = currentValue.replace("_", value.toString());
        }
    };

    return (
        <Button onClick={onClickHandler} className={`${s.num} ${className}`}>
            {value}
        </Button>
    );
};
