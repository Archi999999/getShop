import {FC, RefObject} from "react";
import {PanelButton} from "../panel-button/panel-button.tsx";
import s from "../panel.module.scss";

type Props = {
    values: Array<number | "СТЕРЕТЬ">
    inputRef: RefObject<HTMLInputElement>
}

export const ButtonsRow: FC<Props> = (
    {
        values,
        inputRef
    }
) => {
    return (
        <div className={s.buttonsRow}>
            {values.map(el => (
                <PanelButton value={el} inputRef={inputRef} key={el} className={el === "СТЕРЕТЬ"? s.buttonRemove: ''}/>
            ))
            }
        </div>
    )
};
