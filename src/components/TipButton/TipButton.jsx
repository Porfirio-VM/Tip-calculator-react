import { useContext } from "react";
import { tipsPencentages } from "../../constants/constants"
import { splitBillContext } from "../../hooks/SplitBillProvider";

function TipButton(){

    const { setTip, selectedButton } = useContext(splitBillContext)
    const getButtonText = (button) => button.innerText;

    return(
        <>
        {
            tipsPencentages.map( percentage => (
                <button key={percentage} 
                    onClick={setTip} 
                    className={`${getButtonText(selectedButton) == percentage? 'selected': ''}`}>
                    {percentage}
                </button>
            ))
        }
        </>
    )
}

export default TipButton