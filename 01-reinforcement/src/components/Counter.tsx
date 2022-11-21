import React from 'react'

export const Counter = () => {
    const [counter, setCounter] = React.useState(10);

    const accumulate = (number: number) => {
        setCounter(counter + number);
    }

  return (
      
      <div>

            <h3>Counter: {counter}</h3>
            <button className="btn btn-primary m-2" onClick={()=>accumulate(-1)}>-1</button>
            <button className="btn btn-primary m-2" onClick={()=>accumulate(1)}>+1</button>


        </div>

  )
}
