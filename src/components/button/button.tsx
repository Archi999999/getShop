import {ComponentPropsWithRef, FC, forwardRef, ReactNode} from "react";
import s from './button.module.scss'

type Props = {
    children: ReactNode
    className?: string
} & ComponentPropsWithRef<'button'>

export const Button: FC<Props> = forwardRef<HTMLButtonElement, Props>((
    {
        children,
        className,
        ...rest
    },
    ref
) => {
    return (
        <button className={`${s.button} ${className}`} ref={ref} {...rest}>
            {children}
        </button>
    );
})
