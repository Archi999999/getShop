import Wrapper from "../../components/wrapper/wrapper.tsx";
import {Button} from "../../components/panel/button/button.tsx";
import s from './form-page.module.scss'
import {Cross} from "../../assets/svg-icons/cross.tsx";
import {Panel} from "../../components/panel/panel.tsx";

export const FormPage = () => {
    return (
        <Wrapper className={s.formPage} style={{backgroundImage: 'url(\'../../../public/backGround_2_page.jpg\')'}}>
            <Panel/>
            <Button onClick={() => {
            }} className={s.closeButton}>
                <Cross/>
            </Button>
        </Wrapper>
    );
};
