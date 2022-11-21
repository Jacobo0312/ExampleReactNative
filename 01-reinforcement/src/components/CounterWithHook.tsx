import React from 'react'
import { useCounter } from '../hooks/useCounter'

export const CounterWithHook = () => {
    const {counter, accumulate} = useCounter(10);

  return (

      
      <div>

            <h3>Counter: {counter}</h3>
            <button className="btn btn-primary m-2" onClick={()=>accumulate(-1)}>-1</button>
            <button className="btn btn-primary m-2" onClick={()=>accumulate(1)}>+1</button>


        </div>

  )
}
