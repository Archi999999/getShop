import {FormPage} from "./pages/form-page/form-page.tsx";
import {createContext} from "react";
import {BtnRefsType, useBtnRefs} from "./navigation-utils/navigation-utils.ts";

export const BtnRefsContext = createContext<BtnRefsType | null>(null)

export function App() {
    const btnRefs = useBtnRefs()
    return (
        <BtnRefsContext.Provider value={btnRefs}>
            <FormPage/>
        </BtnRefsContext.Provider>

)
}

