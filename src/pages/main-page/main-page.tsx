import Wrapper from "../../components/wrapper/wrapper.tsx";
import {Banner} from "../../components/banner/banner.tsx";
import {Video} from "../../components/video/video.tsx";
import s from "./main-page.module.scss"
import {useEffect, useState} from "react";

export const MainPage = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        let timerId = setTimeout(()=>setIsVisible(true),5000)
        return () => clearTimeout(timerId)
    }, []);

    return (
        <Wrapper className={s.page}>
            <Video className={s.video}/>
            <Banner className={`${s.banner} ${isVisible ? s.bannerVisible : ""}`} onClick={()=>{}}/>
        </Wrapper>
    );
};
