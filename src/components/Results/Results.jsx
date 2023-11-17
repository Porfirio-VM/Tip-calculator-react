import { useContext } from 'react'
import './Results.css'
import { splitBillContext } from '../../hooks/SplitBillProvider'

function Results(){

    const { tip, bill, resetFields, disableReset } = useContext(splitBillContext)

    return(
        <section className='flex results-section'>
            <div className="flex tip-wrapper">
                <div className="flex wrapper-title">
                    <p>Tip Amount</p>
                    <span>/ person</span>
                </div>
                <h2>${tip}</h2>
            </div>
            <div className="flex tip-wrapper">
                <div className="wrapper-title">
                    <p>Total</p>
                    <span>/ person</span>
                </div>
                <h2>${bill}</h2>
            </div>
            <button className='reset' onClick={resetFields} disabled={disableReset}>RESET</button>
        </section>
    )
}

export default Results