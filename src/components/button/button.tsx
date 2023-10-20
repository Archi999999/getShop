import {FC, ReactNode} from "react";
import s from './button.module.scss'

type Props = {
    children: ReactNode
    className?: string
    onClick: ()=>void
}

export const Button: FC<Props> = (
    {
        children,
        className,
        onClick,
    }
) => {
    return (
        <button className={`${s.button} ${className}`} onClick={onClick}>
            {children}
        </button>
    );
};
