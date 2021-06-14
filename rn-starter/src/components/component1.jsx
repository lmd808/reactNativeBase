// how different components work together
import React from 'react';
//take info from components and show them 
//taking small parts from a given library
import {Text,View, StyleSheet} from 'react-native';

const myName = 'Laura DiTommaso'

//component
const ComponentScreen = () => {
    return (
        <View>
        <Text style={styles.header}>Getting Started with React Native</Text>
        <Text style={styles.subHeader}>My Name is {myName}</Text>
        </View>
    )
}

//styleSheet
const styles = StyleSheet.create({
    header: {
        fontSize: 45,
        textAlign: 'center'
    },
    subHeader: {
        fontSize: 20 
    }
})



export default ComponentScreen

