import {FC} from "react";
import s from "../panel-with-form/panel-with-form.module.scss";
import {ButtonWithNavigate} from "../panel-button/button-with-navigate.tsx";
import {KeysBtnRefs} from "../../../navigation-utils/navigation-utils.ts";

type Props = {
    values: Array<KeysBtnRefs>
    setPhoneNumber:(value:string)=>void
}

export const ButtonsRow: FC<Props> = (
    {
        values,
        setPhoneNumber,
    }
) => {
    return (
        <div className={s.buttonsRow}>
            {values.map(el => (
                    <ButtonWithNavigate value={el} key={el}
                                 className={el === "СТЕРЕТЬ"? s.buttonRemove: ''} setPhoneNumber={setPhoneNumber}/>
            ))
            }
        </div>
    )
};
