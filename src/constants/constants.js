import dolar from '../assets/dollar-sign.svg'
import user from '../assets/user.svg'

export const svg = {
    dolarImg : dolar,
    userImg : user
}

export const initialState = {
    billAmount: '0.00',
    totalBillAmount: '0.00',
    TotalTipAmount: '0.00',
    tip: '',
    people: '',
    selectedButton: '',
    disableReset: true
}

export const tipsPencentages = ['5%', '10%', '15%', '25%', '50%' ]