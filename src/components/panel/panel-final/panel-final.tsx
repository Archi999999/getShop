import s from './panel-final.module.scss';
import { Panel } from "../panel.tsx";

export const PanelFinal = () => {
    return (
        <Panel>
            <h1 className={s.panelTitle}>ЗАЯВКА ПРИНЯТА</h1>
            <p>Держите телефон под рукой.<br/>
                Скоро с Вами свяжется наш менеджер.</p>
        </Panel>
    );
};