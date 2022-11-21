import React from 'react'

//100 is the optional initial value
export const useCounter = (number:number=100) => {

    const [counter, setCounter] = React.useState(number);

    const accumulate = (number: number) => {
        setCounter(counter + number);
    }

    return {
        counter,
        accumulate
    }  
}
