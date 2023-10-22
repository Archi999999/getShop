import s from './banner.module.scss'
import {QrCode} from "../../assets/svg-icons/qr-code.tsx";
import {Button} from "../button/button.tsx";
import {FC} from "react";

type Props = {
    className?: string
    onClick: ()=>void
}

export const Banner: FC<Props> = ({className, onClick}) => {

    return (
        <section className={`${className} ${s.banner}`}>
            <h1>ИСПОЛНИТЕ МЕЧТУ ВАШЕГО<br/> МАЛЫША!<br/> ПОДАРИТЕ ЕМУ СОБАКУ!</h1>
            <QrCode className={s.qrCode}/>
            <p>Сканируйте QR-код<br/> или нажмите ОК</p>
            <Button onClick={onClick} className={s.button}>OK</Button>
        </section>
    );
};
