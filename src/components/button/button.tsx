import {ComponentProps, FC, ReactNode} from "react";
import s from './button.module.scss'

type Props = {
    children: ReactNode
    className?: string
    onClick: ()=>void
} & ComponentProps<'button'>

export const Button: FC<Props> = (
    {
        children,
        className,
        onClick,
        ...rest
    }
) => {
    return (
        <button className={`${s.button} ${className}`} onClick={onClick} {...rest}>
            {children}
        </button>
    );
};
