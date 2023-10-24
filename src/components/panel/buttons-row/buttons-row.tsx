import {FC} from "react";
import s from "../panel.module.scss";
import {ButtonWithNavigate} from "../panel-button/button-with-navigate.tsx";
import {KeysBtnRefs} from "../../../navigation-utils/navigation-utils.ts";

type Props = {values: Array<KeysBtnRefs>}

export const ButtonsRow: FC<Props> = (
    {
        values,
    }
) => {
    return (
        <div className={s.buttonsRow}>
            {values.map(el => (
                    <ButtonWithNavigate value={el} key={el}
                                 className={el === "СТЕРЕТЬ"? s.buttonRemove: ''}/>
            ))
            }
        </div>
    )
};
