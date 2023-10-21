import s from './checkbox.module.scss'
import {FC, useState} from "react";
import {CheckMark} from "../../assets/check-mark.tsx";

type Props = {
    id: string
    label: string
}

export const Checkbox: FC<Props> = (
    {
        id,
        label
    }
) => {
    const [isChecked, setIsChecked] = useState<boolean | undefined>(undefined)

    const checkHandler = () => {
        setIsChecked(!isChecked)
    }

    return (
        <div className={s.checkboxContainer}>
            <input type={'checkbox'} id={id} className={s.input} onChange={()=>setIsChecked(!isChecked)} checked={isChecked === true}/>
                <CheckMark className={`${s.checkMark} ${isChecked? s.activeCheckMark : ''}`} onClick={checkHandler}/>
            <label className={s.label} htmlFor={id}>
                {label}
            </label>
        </div>
    );
}