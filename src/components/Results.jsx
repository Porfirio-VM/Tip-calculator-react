import './CSS/Results.css'

function Results(props){

    const reserBtn = () =>{
       props.onSubmit();
    }
    
    return(
        <article className='result-container'>
            <div className='result-cont'>
                <div className="info-container">
                    <h4>Tip ammount</h4>
                    <p>/ person</p>
                </div>
                <h1>${props.tip}</h1>
            </div>
            <div className='result-cont'>
                <div className="info-container">
                    <h4>Tip ammount</h4>
                    <p>/ person</p>
                </div>
                <h1>${props.bill}</h1>
            </div>
            <button disabled={props.button} onClick={reserBtn} className='reset'>RESET</button>
        </article>
    )
}

export default Results