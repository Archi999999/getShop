import {FormPage} from "./pages/form-page/form-page.tsx";
import {createContext, useState} from "react";
import {BtnRefsType, useBtnRefs} from "./navigation-utils/navigation-utils.ts";
import {MainPage} from "./pages/main-page/main-page.tsx";
import s from './app.module.scss'

export const BtnRefsContext = createContext<BtnRefsType | null>(null)

export function App() {
    const btnRefs = useBtnRefs()
    const [isForm, setIsForm] =useState(false)


    return (
        <BtnRefsContext.Provider value={btnRefs}>
            {
                isForm
                ? <FormPage className={s.formPage}/>
                : <MainPage onClick={()=>{setIsForm(true)}} className={s.mainPage}/>
            }
        </BtnRefsContext.Provider>

)
}

