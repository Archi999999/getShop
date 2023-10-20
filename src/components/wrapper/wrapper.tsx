import {ComponentProps, FC, ReactNode} from "react";
import s from './wrapper.module.scss'

type Props= {
    children: ReactNode
    className?: string
} & ComponentProps<'div'>
const Wrapper: FC<Props> = (
    {
        children,
        className,
        ...rest
    }
) => {
    return (
        <div className={`${className} ${s.wrapper}`} {...rest}>
            {children}
        </div>
    );
};

export default Wrapper;