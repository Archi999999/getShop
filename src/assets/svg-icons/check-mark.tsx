import {FC} from "react";

type Props = {
    className: string
    onClick: () => void
}
export const CheckMark: FC<Props> = (
    {
        className,
        onClick,
    }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={52} height={40} fill='none' className={className} onClick={onClick}>
        <path stroke="#000" strokeWidth={2} d="M1 1h38v38H1z"/>
        <path
            stroke="currentColor"
            strokeWidth={3}
            d="m9.061 20.566 7 7M14.295 27.566l16.627-16.627"
        />
    </svg>
)
