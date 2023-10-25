import Wrapper from "../../components/wrapper/wrapper.tsx";
import s from './form-page.module.scss'
import {Cross} from "../../assets/svg-icons/cross.tsx";
import {PanelWithForm} from "../../components/panel/panel-with-form/panel-with-form.tsx";
import {ButtonWithNavigate} from "../../components/panel/panel-button/button-with-navigate.tsx";
import {PanelFinal} from "../../components/panel/panel-final/panel-final.tsx";
import {FC, useEffect, useState} from "react";

type Props = {
    setIsForm: (value:boolean)=>void
    className?: string
}

export const FormPage:FC<Props> = ({ setIsForm, className}) => {
    const [isSubmitted, setIsSubmitted] = useState(false)

    useEffect(() => {
        let timeoutId: NodeJS.Timeout
        const resetTimeout = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                setIsForm(false);
            }, 10000);
        };

        const onUserActivity = () => {
            resetTimeout();
        };

        resetTimeout();

        window.addEventListener('mousemove', onUserActivity);
        window.addEventListener('keydown', onUserActivity);

        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener('mousemove', onUserActivity);
            window.removeEventListener('keydown', onUserActivity);
        };
    }, []);

    return (
        <Wrapper className={`${s.formPage} ${className}`}>
            {
                isSubmitted
                ? <PanelFinal/>
                : <PanelWithForm setIsSubmitted={setIsSubmitted}/>
            }
            <ButtonWithNavigate onClick={() => {}} className={s.closeButton}
                    value={'closeBtn'}>
                <Cross/>
            </ButtonWithNavigate>
        </Wrapper>
    );
};
