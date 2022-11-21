import React from 'react'

export const Functions = () => {

    const add = (a: number, b: number): number => {
        return a + b;
    }



  return (
    <div>
        <h3>Functions</h3>
        <span>The result is: {add(2, 5)}</span>
    </div>

  )
}
