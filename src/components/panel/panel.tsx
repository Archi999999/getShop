import s from "./panel.module.scss";
import {ReactNode} from "react";

export const Panel = (props: {children: ReactNode}) => {
    return (
        <div className={s.panel}>
            {props.children}
        </div>
    );
}
