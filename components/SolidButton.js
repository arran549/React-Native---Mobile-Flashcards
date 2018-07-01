import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native'
import { purple, green, white } from '../utils/colors'

export default function SolidButton ({ children, onPress, color, style = {} }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={[styles.text, {backgroundColor: color || green}]}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: green,
    },
    text: {
        justifyContent: 'center',
        textAlign: 'center',
        flex: 1,
        height: 40,
        color: white,
        backgroundColor: green,
        flexDirection: 'row',
        padding: 12,
        //borderRadius: 10
    }
})