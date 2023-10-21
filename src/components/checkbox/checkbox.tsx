import s from './checkbox.module.scss'
import {FC, useState} from "react";
import {CheckMark} from "../../assets/svg-icons/check-mark.tsx";

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
            <CheckMark className={`${s.checkMark} ${isChecked? s.activeCheckMark : ''}`} onClick={checkHandler}/>
            <input type={'checkbox'} id={id} className={s.input} onChange={()=>setIsChecked(!isChecked)} checked={isChecked === true}/>
            <label className={s.label} htmlFor={id}>
                {label}
            </label>
        </div>
    );
}