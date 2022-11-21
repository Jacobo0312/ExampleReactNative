import React from 'react'
import { Text, View } from 'react-native'
import { Button } from '../components/Button/Button'
import { useCalculator } from '../hooks/useCalculator'
import { styles } from '../theme/AppTheme'



export const CalculatorScreen = () => {


    const { previousNumber, number, clean, negativePositive, deleteLast, btnAdd, btnDivide, btnMultiply, btnSubstract, buildNumber, calculate } = useCalculator();



    return (
        <View style={styles.containerCalculator}>

            {
                (previousNumber !== '0') && <Text style={styles.smallResult}>{previousNumber}</Text>

            }

            <Text style={styles.result}
                numberOfLines={1}
                adjustsFontSizeToFit>{number}</Text>

            <View style={styles.row}>
                <Button text='C' color='#9B9B9B'
                    action={clean} />
                <Button text='+/-' color='#9B9B9B'
                    action={negativePositive} />
                <Button text='del' color='#9B9B9B'
                    action={deleteLast} />
                <Button text='/' color='#FF9427'
                    action={btnDivide} />
            </View>

            <View style={styles.row}>
                <Button text='7'
                    action={buildNumber} />
                <Button text='8'
                    action={buildNumber} />
                <Button text='9'
                    action={buildNumber} />
                <Button text='X' color='#FF9427'
                    action={btnMultiply} />

            </View>

            <View style={styles.row}>
                <Button text='4'
                    action={buildNumber} />
                <Button text='5'
                    action={buildNumber} />
                <Button text='6'
                    action={buildNumber} />
                <Button text='-' color='#FF9427'
                    action={btnSubstract} />
            </View>

            <View style={styles.row}>
                <Button text='1'
                    action={buildNumber} />
                <Button text='2'
                    action={buildNumber} />
                <Button text='3'
                    action={buildNumber} />
                <Button text='+' color='#FF9427'
                    action={btnAdd} />
            </View>

            <View style={styles.row}>
                <Button text='0' width
                    action={buildNumber} />
                <Button text='.'
                    action={buildNumber} />
                <Button text='=' color='#FF9427'
                    action={calculate} />
            </View>



        </View>
    )
}


