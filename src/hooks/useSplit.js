import { initialState } from "../constants/constants";
import { useEffect, useReducer, useRef } from "react";

function reducer(state, action){
    switch(action.type) {
        case 'setBill':{
            return{
                    ...state,
                    billAmount: action.updateTotal,
            };
        }

        case 'setPeople':{
            return{
                ...state,
                people: action.updatePeople
            };
        }
        
        case 'setTip':{
            return{
                ...state,
                selectedButton: action.selectedButton,
                tip: action.updateTip,
            };
        }

        case 'inputsAreFilled':{
            return{
                ...state,
                totalBillAmount: action.dividedBill,
                TotalTipAmount: action.dividedTip,
                disableReset: action.disableReset
            }
        }
        
        case 'resetFields':{
            return{
                 ...action.resetFields
            }
        }
    }
}

export function useSplit(){
    const [state, dispatch] = useReducer(reducer, initialState)
    const { people, billAmount, tip, totalBillAmount, TotalTipAmount, selectedButton, disableReset } = state;
    const formRef = useRef();

    useEffect(() => {
       if(people !== '' && people !== '0' && billAmount !== '0.00' && billAmount !== undefined && tip !== ''){
            splitTipAndBill(billAmount, tip, people)
       }
    }, [people, billAmount, tip]);

    const setBill = (e) =>{
       const total = e.target.value || initialState.tipAmount;
       dispatch({
            type: 'setBill',
            updateTotal: total
       })
    }

    const setTip = (e) =>{
        const tag = e.target;
        const removePercentage = (text) => text.replace('%', '')
        const tagValue = tag.tagName === 'INPUT'? tag.value : removePercentage(tag.innerText);
        dispatch({
            type: 'setTip',
            updateTip: tagValue,
            selectedButton: tag
        })
    }

    const setPeople = (e) => {
        const peopleValue = e.target.value;
            dispatch({
                type: 'setPeople',
                updatePeople: peopleValue
            })
    } 

    const resetFields = () =>{
       formRef.current.reset();
       dispatch({ 
        type: 'resetFields',
        resetFields: initialState
       })
    }

    const splitTipAndBill = (bill, tip, people) =>{
       const parsedBill = parseFloat(bill)
       const parsedTip = parseFloat(tip)
       const tipPencentage = parsedTip / 100;
       const calculateTip = parsedBill * tipPencentage
       const addTipToBill = calculateTip + parsedBill 

       const dividedBill = (addTipToBill / people).toFixed(2)
       const dividedTip = (calculateTip / people).toFixed(2)

        dispatch({
            type: 'inputsAreFilled',
            dividedBill: dividedBill,
            dividedTip: dividedTip,
            disableReset: false
        })
    }

    return{ 
        formRef,
        setBill,  
        setTip, 
        setPeople, 
        resetFields,
        bill: totalBillAmount, 
        tip: TotalTipAmount, 
        people: people, 
        selectedButton: selectedButton,
        disableReset: disableReset,
    }
}