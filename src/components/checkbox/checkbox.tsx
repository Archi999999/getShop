import s from './checkbox.module.scss'
import {KeyboardEvent, forwardRef, ComponentPropsWithRef} from "react";
import {CheckMark} from "../../assets/svg-icons/check-mark.tsx";
import {ButtonWithNavigate} from "../panel/panel-button/button-with-navigate.tsx";

type Props = {
    id: string
    label: string
    isChecked: boolean
    setIsChecked:(isChecked:boolean)=>void
} & ComponentPropsWithRef<'input'>

export const Checkbox = forwardRef<HTMLInputElement, Props>((
    {
        id,
        label,
        isChecked,
        setIsChecked
    }, ref
) => {
    // const [isChecked, setIsChecked] = useState<boolean>(false)

    const checkHandler = () => {
        setIsChecked(!isChecked)
    }

    const keyHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') checkHandler()
    }

    return (
        <div className={s.checkboxContainer}>
            <CheckMark className={`${s.checkMark} ${isChecked? s.activeCheckMark : ''}`} onClick={checkHandler} />
            <input type={'checkbox'} id={id} className={s.input} onChange={()=>setIsChecked(!isChecked)} checked={isChecked} onKeyDown={e=>keyHandler(e)} ref={ref}/>
            <ButtonWithNavigate value={'checkbox'} onClick={checkHandler} className={s.checkBtn}>
            <label className={s.label} htmlFor={id}  >
                {label}
            </label>
            </ButtonWithNavigate>
        </div>
    );
})