import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { purple, green, white } from '../utils/colors'

export default function SolidButton ({ children, onPress, style = {} }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={[styles.button, style]}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        textAlign: 'center',
        color: white,
        backgroundColor: green,
        height: 40
    }
})