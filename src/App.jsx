import './App.css'
import Main from './components/Main/Main'
import SplitBillProvider from './hooks/SplitBillProvider'

function App() {

  return (
    <>
      <SplitBillProvider>
        <Main />
      </SplitBillProvider>
    </>
  )
}

export default App
