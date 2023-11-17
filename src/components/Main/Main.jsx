import BillForm from "../BillForm/BillForm"
import Results from "../Results/Results"
import './Main.css'

function Main(){

    return(
        <>
            <h1 className="title">
                <span>Spli</span>
                <span>ther</span>
            </h1>
            <main className="grid main-container">
                <BillForm/>
                <Results />
            </main>
        </>
    )
}

export default Main