import { useContext } from "react"
import { svg } from "../../constants/constants"
import TipButton from "../TipButton/TipButton"
import './BillForm.css'
import { splitBillContext } from "../../hooks/SplitBillProvider"

function BillForm(){

    const { dolarImg, userImg } = svg
    const { setBill, setPeople , setTip, people, formRef } = useContext(splitBillContext)

    return(
           <section className="form-section-wrapper">
                <form ref={formRef} action="" className="flex form-section" onSubmit={(e) => e.preventDefault()}>
                    <div className="input-wrapper">
                        <label htmlFor="bill">Bill</label>
                        <div className="flex custom-input">
                            <img src={dolarImg} alt="" style={{width: '.7em', height: 'auto'}}/>
                            <input type="number" name="" id="bill" placeholder='0' step='0.01' onInput={setBill}/>
                        </div>
                    </div>

                    <div className="input-wrapper">
                        <label htmlFor="custom-tip">Select tip %</label>
                        <div className="grid button-wrapper">
                            <TipButton />
                            <input type="number" name="" id="custom-tip" onInput={setTip} placeholder="Custom"/>
                        </div>
                    </div>
                    
                    <div className="input-wrapper">
                        <label htmlFor="people">Number of people</label>
                        <div className={`flex custom-input ${ people && people <= 0? 'error-wrapper': ''}`}>
                            {people && people <= 0 && 
                                <span className="error">{`Can't be zero`}</span>
                            }
                            <img src={userImg} alt="" style={{width: '.7em', height: 'auto'}}/>
                            <input type="number" name="" id="people" placeholder="0" onInput={setPeople}/>
                        </div>
                    </div>
                </form>
           </section>
    )
}

export default BillForm