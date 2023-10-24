import Wrapper from "../../components/wrapper/wrapper.tsx";
import s from './form-page.module.scss'
import {Cross} from "../../assets/svg-icons/cross.tsx";
import {Panel} from "../../components/panel/panel.tsx";
import {ButtonWithNavigate} from "../../components/panel/panel-button/button-with-navigate.tsx";

export const FormPage = () => {

    return (
        <Wrapper className={s.formPage}>
            <Panel />
            <ButtonWithNavigate onClick={() => {}} className={s.closeButton}
                    value={'closeBtn'}>
                <Cross/>
            </ButtonWithNavigate>
        </Wrapper>
    );
};
