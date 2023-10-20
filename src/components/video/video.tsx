import {FC} from "react";

type Props = {
    className?: string
}
export const Video: FC<Props> = (
    {
        className
    }
) => {
    return (
            <video autoPlay muted width='100%' height='auto' loop className={className} >
                <source src='../../../public/video.mp4' type='video/mp4'/>
            </video>
    );
};
