
import './App.css'
import InputContainer from './components/InputContainer';
import TipContainer from './components/TipContainer';
import Results from './components/Results';
import { useState } from 'react';

function App() {

  const [splitTip, setSplitTip] = useState('0.00');
  const [splitTotal, setSplitTotal] = useState('0.00');
  const [BillChange, setBillChange] = useState('')
  const [PeopleChange, setPeopleChange] = useState('')
  const [buttonState, setButtonState] = useState(true)
  const [tip, setTip] = useState(0)
  const [style,setStyle] = useState('input-cont')

  const handleBillChange = (value) => {
    setBillChange(value || '');
    validateData(value, PeopleChange, tip);
  }

  
  const handlePeopleChange = (value) => {
    setPeopleChange(value || '');
    validateData(BillChange, value, tip);
  }

  const handleTipChange = (value) => {
    setTip(value);
    validateData(BillChange, PeopleChange, value);
  };

  const handleReset = () =>{
    setSplitTip('0.00');
    setSplitTotal('0.00');
    setBillChange('');
    setPeopleChange('')
    setButtonState(true)
  }

  const validateData = (billValue, peopleValue, tipValue) =>{
    const billIsNotEmpty = billValue !== '0.00' && billValue !== '' && billValue > 0;
    const peopleIsNotEmpty = peopleValue !== '0.00' && peopleValue !== '' && peopleValue >0;


    if (!peopleIsNotEmpty) {
      setStyle('input-cont require');
    } else {
      setStyle('input-cont');
    }
    if(billIsNotEmpty && peopleIsNotEmpty){
      const percentajeCovert = parseFloat(tipValue/100);
      const totalTip = (percentajeCovert * parseFloat(billValue)).toFixed(2)
      const totalBill = (parseFloat(billValue) + parseFloat(totalTip))

      const splitTip = (totalTip / parseInt(peopleValue)).toFixed(2)
      const splitTotal = (totalBill / parseInt(peopleValue)).toFixed(2)

      setButtonState(false)
      setSplitTip(splitTip)
      setSplitTotal(splitTotal)
    }else{
      setButtonState(true)
      setSplitTip('0.00')
      setSplitTotal('0.00')
    }
  }

  return (
    <>
      <header>
        <h3>SPLI</h3>
        <h3>TTER</h3>
      </header>
      <main>
        <section>
          <InputContainer name={'Bill'}  value={BillChange} onInputChange={handleBillChange} style={'input-cont'}/>
          <TipContainer onClickTip={handleTipChange} />
          <InputContainer name={'Number of people'} style={style} value={PeopleChange} onInputChange={handlePeopleChange} />
        </section>
        <section>
          <Results bill={splitTotal} tip={splitTip} button={buttonState} onSubmit={handleReset} />
        </section>
      </main>
    </>
  )
}

export default App
