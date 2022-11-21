import React from 'react'

//Interfaces

interface Address {
    street: string;
    city: string;
}

interface Person {
    name: string;
    age: number;
    address: Address;

}


export const LiteralObjects = () => {
    const person:Person = {
        name: 'Jacobo',
        age: 19,
        address: { 
            street: 'CRA 98',
            city: 'COLOMBIA',
        }
    };


    return (
        <>
            <h3>Literal Objects</h3>
            <code>
                <pre>
                    {JSON.stringify(person, null, 2)}
                </pre>
            </code>
        </>


    )
}
