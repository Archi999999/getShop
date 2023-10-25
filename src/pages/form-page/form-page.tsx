import Wrapper from "../../components/wrapper/wrapper.tsx";
import s from './form-page.module.scss'
import {Cross} from "../../assets/svg-icons/cross.tsx";
import {PanelWithForm} from "../../components/panel/panel-with-form/panel-with-form.tsx";
import {ButtonWithNavigate} from "../../components/panel/panel-button/button-with-navigate.tsx";
import {PanelFinal} from "../../components/panel/panel-final/panel-final.tsx";
import {FC, useState} from "react";

type Props = {
    setIsForm: (value:boolean)=>void
    className?: string
}

export const FormPage:FC<Props> = ({ setIsForm, className}) => {
    const [isSubmitted, setIsSubmitted] = useState(false)

    return (
        <Wrapper className={`${s.formPage} ${className}`}>
            {
                isSubmitted
                ? <PanelFinal/>
                : <PanelWithForm setIsSubmitted={setIsSubmitted} setIsForm={setIsForm}/>
            }
            <ButtonWithNavigate onClick={() => {}} className={s.closeButton}
                    value={'closeBtn'}>
                <Cross/>
            </ButtonWithNavigate>
        </Wrapper>
    );
};
