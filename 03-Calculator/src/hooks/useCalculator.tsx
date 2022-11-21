import React, { useRef, useState } from 'react'

enum Operators {
    sum, rest, multiply, divide
}


export const useCalculator = () => {

    const [number, setNumber] = useState('0');

    const [previousNumber, setPreviousNumber] = useState('0');

    const operator = useRef<Operators>()

    const clean = () => {
        setNumber('0');
        setPreviousNumber('0');
    }

    const negativePositive = () => {
        if (number.includes('-')) {
            setNumber(number.replace('-', ''));
        } else {
            setNumber('-' + number);
        }
    }

    const deleteLast = () => {

        if (number.length === 1) {
            setNumber('0');
        } else {
            if (number.includes('-') && number.length === 2) {
                setNumber('0');
            } else {

                setNumber(number.substring(0, number.length - 1));
            }

        }

    }



    const buildNumber = (textNumber: string) => {

        //Dont accept double points

        if (number.includes('.') && textNumber === '.') return;

        if (number.startsWith('0') || number.startsWith('-0')) {

            //Decimal point
            if (textNumber === '.') {
                setNumber(number + textNumber);
            }

            //Evaluate if it is another zero and there is a point

            else if (textNumber === '0' && number.includes('.')) {
                setNumber(number + textNumber);
            }
            //Evaluate if it is different from zero and there is no point
            else if (textNumber !== '0' && !number.includes('.')) {
                setNumber(textNumber);
            }
            //Avoid 000.0
            else if (textNumber === '0' && !number.includes('.')) {
                setNumber(number);
            }
            else {
                setNumber(number + textNumber);
            }


        } else {
            setNumber(number + textNumber);
        }

    }


    const changePreviousNumber = () => {
        if (number.endsWith('.')) {
            setPreviousNumber(number.slice(0, -1));
        } else {
            setPreviousNumber(number);
        }
        setNumber('0');
    }

    const btnDivide = () => {
        changePreviousNumber();
        operator.current = Operators.divide;

    }

    const btnMultiply = () => {
        changePreviousNumber();
        operator.current = Operators.multiply;
    }

    const btnSubstract = () => {
        changePreviousNumber();
        operator.current = Operators.rest;
    }

    const btnAdd = () => {
        changePreviousNumber();
        operator.current = Operators.sum;
    }

    const calculate = () => {
        const num1 = Number(number);
        const num2 = Number(previousNumber);

        switch (operator.current) {
            case Operators.sum:
                setNumber(`${num1 + num2}`);
                break;
            case Operators.rest:
                setNumber(`${num2 - num1}`);
                break;
            case Operators.multiply:
                setNumber(`${num1 * num2}`);
                break;
            case Operators.divide:
                setNumber(`${num2 / num1}`);
                break;
        }


        setPreviousNumber('0');

    }



    return {
        number,
        previousNumber,
        clean,
        negativePositive,
        deleteLast,
        buildNumber,
        btnDivide,
        btnMultiply,
        btnSubstract,
        btnAdd,
        calculate
    }











}
