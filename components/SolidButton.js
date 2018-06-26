import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native'
import { purple, green, white } from '../utils/colors'

export default function SolidButton ({ children, onPress, style = {} }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={[styles.button, style]}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        //justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    button: {
       // justifyContent: 'center',
        textAlign: 'center',
        flex: 1,
        color: white,
        backgroundColor: green,
        height: 40,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 10
    }
})