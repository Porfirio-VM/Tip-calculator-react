
import { createContext } from "react";
import { useSplit } from "./useSplit";

export const splitBillContext = createContext();

export default function SplitBillProvider({ children }){

    const {setBill, setPeople, setTip, bill, tip, people, selectedButton, resetFields, disableReset, formRef } = useSplit();

    const splitBillValues = {
        setBill, 
        setPeople, 
        setTip, 
        bill, 
        tip, 
        people, 
        selectedButton, 
        resetFields, 
        disableReset, 
        formRef
    }

    return(
        <splitBillContext.Provider value={splitBillValues}>
            {children}
        </splitBillContext.Provider>
    )

}