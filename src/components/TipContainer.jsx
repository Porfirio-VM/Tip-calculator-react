import { useState } from 'react'
import './CSS/TipContainer.css'

function TipContainer(props){
    const [selects, useSelect] = useState(null)

    const handleTip = (tip) =>{
        useSelect(tip);
        props.onClickTip(tip)
    }

    return(
        <article className='tip-container'>
            <label htmlFor="">Select tip %</label>
            <div className="tip-cont">
                <ul id='list'>
                    <li className={selects === 5 ? 'selected':''} onClick={()=>{handleTip(5)}}>
                        <span>5%</span>
                    </li>
                    <li className={selects === 10 ? 'selected':''} onClick={()=>{handleTip(10)}}>
                        <span>10%</span>
                    </li>
                    <li className={selects === 15 ? 'selected':''} onClick={()=>{handleTip(15)}}>
                        <span>15%</span> 
                    </li>
                    <li className={selects === 25 ? 'selected':''} onClick={()=>{handleTip(25)}}>
                        <span>25%</span>
                    </li>
                    <li className={selects === 50 ? 'selected':''} onClick={()=>{handleTip(50)}}>
                        <span>50%</span>
                    </li>
                    <li>
                        <input placeholder='Custom' onInput={()=>{handleTip(custom.value)}} type="number" name="" id="custom" />
                    </li>
                </ul>
            </div>
        </article>
    )
}

export default TipContainer